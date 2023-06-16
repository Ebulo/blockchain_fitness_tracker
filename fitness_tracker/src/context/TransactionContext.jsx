import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
// const ethers = require("ethers");

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  // const provider = new ethers.provider.
  console.log("Inside of getEthhereum", ethers);
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [formData, setFormData] = useState({
    addressTo: "0x463b31475202368EE41FCe93e83De74F4d82791F",
    amount: "0.00001",
    keyword: "Fitness",
    message: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [transactions, setTransactions] = useState([]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const getAllTransactions = async () => {
    try {
      if (!ethereum) alert("Please Install MetaMask");

      const transactionContract = getEthereumContract();
      const availavleTransactions =
        await transactionContract.getAllTransactions();
      const structuredTransactions = availavleTransactions.map(
        (transaction) => ({
          addressTo: transaction.reeiver,
          addressFrom: transaction.sender,
          timestamp: new Date(
            transaction.timestamp.toNumber() * 1000
          ).toLocaleDateString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / 10 ** 18,
        })
      );

      console.log(structuredTransactions);
      setTransactions(structuredTransactions);
    } catch (error) {}
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) alert("Please Install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        getAllTransactions();
      } else {
        console.log("No Accounts");
      }
    } catch (error) {
      console.error(error);
      throw new Error("No Etherium Object");
    }
  };

  const checkIFTransactionsExit = async () => {
    try {
      const transactionContract = getEthereumContract();
      const transactionCount = await transactionContract.getTransactionCount();
      window.localStorage.setItem("transactionCount", transactionCount);
    } catch (error) {
      console.error(error);
      throw new Error("No Etherium Object");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) alert("Please Install MetaMask");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts);
    } catch (error) {
      console.error(error);
      throw new Error("No Etherium Object");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) alert("Please Install MetaMask");
      const { addressTo, amount, keyword, message } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", //Gwei in Hexa 21000
            value: parsedAmount._hex,
          },
        ],
      });

      const transactionHash = await transactionContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      );

      setIsLoading(true);
      console.log(`Loading - ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`Success - ${transactionHash.hash}`);

      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
    } catch (error) {
      console.error(error);
      throw new Error("No Etherium Object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIFTransactionsExit();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        sendTransaction,
        handleChange,
        loading,
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
