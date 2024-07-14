"use client"

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

import { decrypt_Key } from "savi-keygen";

import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert";

import { useState } from "react";
import {
    isConnected,
    setAllowed,
    getPublicKey,
    signAuthEntry,
    signTransaction,
    signBlob
  } from "@stellar/freighter-api";

import {
    Keypair,
    Transaction,
    Operation,
    Asset,
    Memo,
    BASE_FEE,
    Networks,
    Contract,
    SorobanRpc,
    xdr,
    TransactionBuilder
} from "@stellar/stellar-sdk";


export default function Sub() {
    const acc = {
        contractAddress:"CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7",
        methodName:"is_user_registered",
        methodParams:[""],
        result:"true"
    }
    const [inputText, setInputText] = useState("")
    const [idText, setIdText] = useState("")
    const [decryptedText, setDecryptedText] = useState("")
    const [showDecryptedText, setShowDecryptedText] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const [decryptedData, setDecryptedData] = useState("")

    // async function decryptData(data: string) {
    //     let decrypted;
    //     try {
    //         decrypted = await decrypt_Key(acc as any, data)
    //         setDecryptedText(decrypted)
    //         setShowDecryptedText(true)
    //     }
    //     catch (e) {
    //         alert("Access Denied")
    //     }
    //     // decrypted = await decrypt_Key(acc as any, data)
    //     // setDecryptedText(decrypted)
    //     // setShowDecryptedText(true)
    //   }

    const [isConnected, setIsConnected] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    const connectWallet = async () => {
        const isAllowed = await setAllowed();

        if (isAllowed) {
            setIsConnected(true);
        }       

    }

    const payUp = async () => {
        
        const server = new SorobanRpc.Server("https://soroban-testnet.stellar.org:443");
        const contract = new Contract("CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7");

        const scValParams = [await getPublicKey()].map(param => {
            if (typeof param === 'string') {
                return xdr.ScVal.scvString(param);
            } else if (typeof param === 'number') {
                return xdr.ScVal.scvU32(param);
            } else {
                throw new Error(`Unsupported parameter type: ${typeof param}`);
            }
        });

        const sourceAccount = await server.getAccount(await getPublicKey());
        const transaction = new TransactionBuilder(sourceAccount, {
            fee: BASE_FEE,
            // network: "TESTNET",
            networkPassphrase: Networks.TESTNET
        })
        .addOperation(
            contract.call("reg_user",...scValParams)
        )
        .setTimeout(30)
        .build();

        let preparedTransaction = await server.prepareTransaction(transaction);
        // preparedTransaction.sign();



        let transactionResult = await signTransaction(preparedTransaction.toXDR(), {"network":"TESTNET",accountToSign: await getPublicKey()});
        
        let tx = TransactionBuilder.fromXDR(transactionResult, Networks.TESTNET);

        try {
            let sendTx = await server.sendTransaction(tx).catch(function (err) {
              console.error("Catch-1", err);
              return err;
            });
            if (sendTx.errorResult) {
              throw new Error("Unable to submit transaction");
            }
            if (sendTx.status === "PENDING") {
                console.log("Transaction is pending");
              let txResponse = await server.getTransaction(sendTx.hash);
              //   we will continously checking the transaction status until it gets successfull added to the blockchain ledger or it gets rejected
              while (txResponse.status === "NOT_FOUND") {
                console.log("Transaction is not found");
                txResponse = await server.getTransaction(sendTx.hash);
                await new Promise((resolve) => setTimeout(resolve, 100));
              }
              if (txResponse.status === "SUCCESS") {
                let result = txResponse.returnValue;
                console.log("Transaction is successfull", result);
                setIsAccepted(true);
              }
            }
          } catch (err) {
            console.log("Catch-2", err);
            return;
          }
        // let output: boolean = false;
        // console.log(transactionResult);
        // while(true){
        //     let res = (await server.getTransaction(transactionResult));
        //     if(res.status == "SUCCESS"){
        //         let r = JSON.parse(JSON.stringify(res.returnValue));
        //         // output = Boolean(r._value);
        //         console.log(r);
        //         break;
        //     }
        // }
        
        // if (output) {
        //     setIsAccepted(true);
        // } else {
        //     alert("Access Denied"); 
        // }
        
    }



    return (
        <>
            {
                //if the wallet is not connected, show the connect button
                !isConnected ? (
                    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#e7e7e7] outline-dashed ">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Connect your wallet</h1>
                            <Button onClick={() => connectWallet()}>Connect</Button>
                        </div>
                    </div>
                )

                : !isAccepted ? (
                    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#e7e7e7] outline-dashed ">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Pay up B*tch</h1>
                            <Button onClick={() => payUp()}>Open Flighter Client</Button>
                        </div>
                    </div>
                )
                : (
                    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#e7e7e7] outline-dashed ">
                        <div className="flex flex-col items-center justify-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">You have earned your eligibility</h1>
                        </div>
                    </div>
                )

            }
        </>
    )
}