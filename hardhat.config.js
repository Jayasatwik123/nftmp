require("@nomicfoundation/hardhat-toolbox");

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://rpc-mumbai.maticvigil.com";
const NEXT_PUBLIC_PRIVATE_KEY = "7b34548bc649d7f3f7ec7da9291ae2fddb0b99aef5b9254f45a25e84ebbbf2ec";
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {

  defaultNetwork: "localhost",
  networks: {
    hardhat: {
      chainId:80001
    },
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
  solidity:{
    version:"0.8.9",
    settings:{
      optimizer:{
        enabled:true,
        runs:200
      }
    }
  }

  //   // fuji: {
  //   //   url: `Your URL`,
  //   //   accounts: [
  //   //     `0x${"Your Account"}`,
  //   //   ],
  //   // },
  // },
};
