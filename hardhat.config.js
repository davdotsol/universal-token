require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.1',
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
  },
};