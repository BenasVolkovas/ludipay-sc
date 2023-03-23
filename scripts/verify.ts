import {run, network} from "hardhat";

export const verify = async (contractAddress: string, args: any[]) => {
    if (process.env.POLYGONSCAN_API_KEY && network.name === "mumbai") {
        console.log("Verifying contract...");
        try {
            await run("verify:verify", {
                address: contractAddress,
                constructorArguments: args,
            });
        } catch (e: any) {
            if (e.message.toLowerCase().includes("already verified")) {
                console.log("Already verified!");
            } else {
                console.log(e);
            }
        }
    }
};
