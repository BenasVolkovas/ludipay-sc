import { ethers } from "hardhat";
import { verify } from "./verify";

async function main() {
    const Token = await ethers.getContractFactory("LudiPay");
    const token = await Token.deploy();
    await token.deployed();
    console.log(`Deployed to ${token.address}`);

    await verify(token.address, []);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
