import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
        },
        mumbai: {
            url: process.env.MUMBAI_URL || "",
            accounts:
                process.env.DEPLOYER_PRIVATE_KEY !== undefined
                    ? [process.env.DEPLOYER_PRIVATE_KEY]
                    : [],
            chainId: 80001,
        },
    },
    etherscan: {
        apiKey: {
            polygonMumbai: process.env.POLYGONSCAN_API_KEY || "",
        },
    },
};

export default config;
