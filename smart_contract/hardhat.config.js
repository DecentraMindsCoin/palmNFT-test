require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  settings: {
    optimizer: {
        enabled: true,
        runs: 1000000,
    },
},
mocha: {
    timeout: 90000
},
networks: {
    palm_testnet: {
        url: `https://palm-testnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
        accounts: [`0x` + process.env.PRIVATE_KEY],
        gasPrice: 1000
    },
    // palm_mainnet: {
    //     url: `https://palm-mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
    //     accounts: [`0x` + process.env.PRIVATE_KEY],
    //     gasPrice: 1000
    // }
}
};
