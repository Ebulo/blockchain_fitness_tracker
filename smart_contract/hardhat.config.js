require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8h4jELz3ayY1qNCVao7ck9cG4xnifhvk",
      accounts: [
        "........", // To deploy this contract again, create an account in Metamask and paste your account Private Key Here
      ],
    },
  },
  solidity: {
    version: "0.8.0",
  },
};

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

// mocha: {
//   timeout: 40000,
// },
// mocha: {
//   timeout: 40000,
// },

// settings: {
//   optimizer: {
//     enabled: true,
//     runs: 200,
//   },
// },

// paths: {
//   sources: "./contracts",
//   tests: "./test",
//   cache: "./cache",
//   artifacts: "./artifacts",
// },
