require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/8h4jELz3ayY1qNCVao7ck9cG4xnifhvk",
      accounts: [
        "a3f22b5a0aa544c4f15238fa0d858defa8a4edbaa3670f6e1373acd0732607a4",
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
