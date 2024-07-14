// // "use client"

// // import { Button } from "@/components/ui/button";
// // import { Textarea } from "@/components/ui/textarea"
// // import { Input } from "@/components/ui/input"

// // import { decrypt_Key } from "savi-keygen";

// // import {
// //     Alert,
// //     AlertDescription,
// //     AlertTitle,
// //   } from "@/components/ui/alert";

// // import { useState } from "react";
// // import {
// //     isConnected,
// //     setAllowed,
// //     getPublicKey,
// //     signAuthEntry,
// //     signTransaction,
// //     signBlob
// //   } from "@stellar/freighter-api";

// // import {
// //     Keypair,
// //     Transaction,
// //     Operation,
// //     Asset,
// //     Memo,
// //     BASE_FEE,
// //     Networks,
// //     Contract,
// //     SorobanRpc,
// //     xdr,
// //     TransactionBuilder
// // } from "@stellar/stellar-sdk";


// // export default function Satisfy() {
    
// //     const [inputText, setInputText] = useState("")
// //     const [idText, setIdText] = useState("")
// //     const [decryptedText, setDecryptedText] = useState("")
// //     const [showDecryptedText, setShowDecryptedText] = useState(false)
// //     const [isCopied, setIsCopied] = useState(false)
// //     const [decryptedData, setDecryptedData] = useState("")

// //     async function decryptData(data: string, id:string) {

// //         console.log(isPublic)
// //         const acc = {
// //             contractAddress:"CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7",
// //             methodName:"is_user_registered",
// //             methodParams:[isPublic],
// //             result:"true"
// //         }
// //         let decrypted;
// //         try {
// //             decrypted = await decrypt_Key(acc as any, id, data)
// //             setDecryptedText(decrypted)
// //             setShowDecryptedText(true)
// //         }
// //         catch (e) {
// //             alert(e)
// //         }
// //         // decrypted = await decrypt_Key(acc as any, data)
// //         // setDecryptedText(decrypted)
// //         // setShowDecryptedText(true)
// //       }

// //     const [isConnected, setIsConnected] = useState(false);
// //     const [isPublic, setIsPublic] = useState("");
// //     const [isAccepted, setIsAccepted] = useState(false);

// //     const connectWallet = async () => {
// //         const isAllowed = await setAllowed();

// //         if (isAllowed) {
// //             setIsConnected(true);
// //             setIsPublic(await getPublicKey());
// //         } 

// //     }

// //     // const accessControl = async () => {
        
// //     //     const server = new SorobanRpc.Server("https://soroban-testnet.stellar.org:443");
// //     //     const contract = new Contract("CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7");

// //     //     const scValParams = acc.methodParams.map(param => {
// //     //         if (typeof param === 'string') {
// //     //             return xdr.ScVal.scvString(param);
// //     //         } else if (typeof param === 'number') {
// //     //             return xdr.ScVal.scvU32(param);
// //     //         } else {
// //     //             throw new Error(`Unsupported parameter type: ${typeof param}`);
// //     //         }
// //     //     });

// //     //     const sourceAccount = await server.getAccount(await getPublicKey());
// //     //     const transaction = new TransactionBuilder(sourceAccount, {
// //     //         fee: BASE_FEE,
// //     //         networkPassphrase: Networks.TESTNET
// //     //     })
// //     //     .addOperation(
// //     //         contract.call(acc.methodName,...scValParams)
// //     //     )
// //     //     .setTimeout(30)
// //     //     .build();

// //     //     let preparedTransaction = await server.prepareTransaction(transaction);
// //     //     preparedTransaction.sign(Keypair.fromSecret("SAJBV6OTS56MT564SE4F7OZB6LESRHGKC4D5SC4ZHKRP277324BDBPJJ"));

// //     //     let transactionResult = await server.sendTransaction(preparedTransaction);

// //     //     let output: boolean = false;

// //     //     while(true){
// //     //         let res = (await server.getTransaction(transactionResult.hash));
// //     //         if(res.status == "SUCCESS"){
// //     //             let r = JSON.parse(JSON.stringify(res.returnValue));
// //     //             output = Boolean(r._value);
// //     //             console.log(output);
// //     //             break;
// //     //         }
// //     //     }
        
// //     //     if (output) {
// //     //         setIsAccepted(true);
// //     //     } else {
// //     //         alert("Access Denied"); 
// //     //     }
        
// //     // }



// //     return (
// //         <>
// //             {
// //                 //if the wallet is not connected, show the connect button
// //                 !isConnected ? (
// //                     <div className="flex flex-col items-center justify-center min-h-screen bg-white text-[#e7e7e7] outline-dashed ">
// //                         <div className="flex flex-col items-center justify-center">
// //                             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Connect your wallet</h1>
// //                             <Button onClick={() => connectWallet()}>Connect</Button>
// //                         </div>
// //                     </div>
// //                 )

// //                 : (
// //                     <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black">
// //                     <div className="space-y-4 text-center">
// //                         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Secure Your Data</h1>
// //                         <p className="mt-4 text-lg text-gray-600">
// //                         This is an demo of how we decrypt data and access it for various possible 
// //                         </p>
// //                     </div>
// //                     <div className="mt-12 w-full max-w-md">
// //                         <div className="relative">
// //                         <Input
// //                             placeholder="Type your ID..."
// //                             value={idText}
// //                             required
// //                             onChange={(e) => setIdText(e.target.value)}
// //                             className="w-full rounded-lg bg-gray-200 px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none"
// //                         />
// //                         <br />
// //                         <Textarea
// //                             placeholder="Type your Encrypted Data..."
// //                             value={inputText}
// //                             required
// //                             onChange={(e) => setInputText(e.target.value)}
// //                             className="w-full rounded-lg bg-gray-200 px-4 py-3 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none"
// //                         />
// //                         </div>
// //                         <Button
// //                         onClick={() => decryptData(inputText, idText)}
// //                         className="mt-4 w-full"
// //                         >
// //                             Decrypt
// //                         </Button>
// //                         {showDecryptedText && (
// //                         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-[50vw] bg-[#0077b6] px-6 py-4 flex flex-col items-start justify-between shadow-lg overflow-auto rounded-t-lg scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-700 max-h-[150px]">
// //                             <h5 className="text-gray-400 mb-2 text-sm font-bold">Output</h5>
// //                             <div className="flex items-center gap-2">
// //                             <span className="text-white text-sm font-normal font-mono max-h-[100px] whitespace-normal md:max-w-[40vw] break-words">
// //                                 {decryptedText}
// //                             </span>
// //                             </div>
// //                         </div>
// //                         )}
// //                     </div>
// //                     </div>
// //                 )

// //             }
// //         </>
// //     )
// // }

// "use client"

// import { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea"
// import { Input } from "@/components/ui/input"
// import { decrypt_Key } from "savi-keygen";
// import {
//   Alert,
//   AlertDescription,
//   AlertTitle,
// } from "@/components/ui/alert";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
// } from "@/components/ui/sheet"
// import { Loader2, AlertCircle } from "lucide-react"
// import {
//   isConnected,
//   setAllowed,
//   getPublicKey,
// } from "@stellar/freighter-api";

// export default function Satisfy() {
//   const [inputText, setInputText] = useState("")
//   const [idText, setIdText] = useState("")
//   const [decryptedText, setDecryptedText] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const [isWalletConnected, setIsWalletConnected] = useState(false)
//   const [isPublic, setIsPublic] = useState("")
//   const [isSheetOpen, setIsSheetOpen] = useState(false)

//   async function decryptData(data: string, id: string) {
//     setIsLoading(true)
//     setError("")
//     setIsSheetOpen(false)

//     const acc = {
//       contractAddress: "CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7",
//       methodName: "is_user_registered",
//       methodParams: [isPublic],
//       result: "true"
//     }

//     try {
//       const decrypted = await decrypt_Key(acc as any, id, data)
//       if (!decrypted || decrypted.trim() === "") {
//         setError("Please check your Id and encrypted text")
//       }else {
//         if (decrypted === "Failed") {
//             throw new Error("Access Denied")
//         } else {
//             setDecryptedText(decrypted)
//             setIsSheetOpen(true)
//         }
//       }
//     } catch (e:any) {
//         //if error is Error: Malformed UTF-8 data, setError to "Access Denied"
//         if (e.message === "Malformed UTF-8 data") {
//             setError("Please check your ID and Encrypted text")
//         } else {
//             setError("Access Parameters Denied Data Request")
//         }
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const connectWallet = async () => {
//     const isAllowed = await setAllowed();
//     if (isAllowed) {
//       setIsWalletConnected(true);
//       setIsPublic(await getPublicKey());
//     }
//   }

//   const isButtonDisabled = !inputText.trim() || !idText.trim() || isLoading;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1b1e] text-[#d8d8d8] relative">
//       {error && (
//         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50">
//           <Alert variant="destructive" className="bg-red-900 text-white border-red-600">
//             <AlertCircle className="h-4 w-4" />
//             <AlertTitle>Error</AlertTitle>
//             <AlertDescription>{error}</AlertDescription>
//           </Alert>
//         </div>
//       )}

//       {!isWalletConnected ? (
//         <div className="flex flex-col items-center justify-center space-y-4">
//           <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">Connect your wallet</h1>
//           <Button onClick={connectWallet} className="bg-[#2a2b2f] text-white hover:bg-[#4e4e4e]">Connect</Button>
//         </div>
//       ) : (
//         <div className="w-full max-w-md space-y-8">
//           <div className="text-center">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">Secure Your Data</h1>
//             <p className="mt-4 text-lg text-[#d8d8d8]">
//               This is a demo of how we decrypt data and access it for various purposes
//             </p>
//           </div>
          
//           <Input
//             placeholder="Type your ID..."
//             value={idText}
//             required
//             onChange={(e) => setIdText(e.target.value)}
//             className="w-full bg-[#2a2b2f] text-white placeholder:text-[#4e4e4e]"
//           />
          
//           <Textarea
//             placeholder="Type your Encrypted Data..."
//             value={inputText}
//             required
//             onChange={(e) => setInputText(e.target.value)}
//             className="w-full bg-[#2a2b2f] text-white placeholder:text-[#4e4e4e]"
//           />
          
//           <Button
//             onClick={() => decryptData(inputText, idText)}
//             className={`w-full text-white transition-all duration-300 ${
//               isLoading ? 'bg-transparent' : 'bg-[#2a2b2f] hover:bg-[#4e4e4e]'
//             }`}
//             disabled={isButtonDisabled}
//           >
//             {isLoading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Decrypting...
//               </>
//             ) : (
//               'Decrypt'
//             )}
//           </Button>

//           <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
//             <SheetContent className="bg-[#2a2b2f] text-white">
//               <SheetHeader>
//                 <SheetTitle className="text-white">Decrypted Text</SheetTitle>
//                 <SheetDescription className="text-[#d8d8d8]">
//                   Here's your decrypted data:
//                 </SheetDescription>
//               </SheetHeader>
//               <div className="mt-4 p-4 bg-[#1a1b1e] rounded-md">
//                 <pre className="text-sm text-white whitespace-pre-wrap break-words">
//                   {decryptedText}
//                 </pre>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { decrypt_Key } from "savi-keygen";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Progress } from "@/components/ui/progress"
import { Loader2, AlertCircle } from "lucide-react"
import {
  isConnected,
  setAllowed,
  getPublicKey,
} from "@stellar/freighter-api";

export default function Satisfy() {
  const [inputText, setInputText] = useState("")
  const [idText, setIdText] = useState("")
  const [decryptedText, setDecryptedText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isPublic, setIsPublic] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [nodesApproved, setNodesApproved] = useState(0)

  async function decryptData(data: string, id: string) {
    setIsLoading(true)
    setError("")
    setIsSheetOpen(false)
    setNodesApproved(0)

    const acc = {
      contractAddress: "CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7",
      methodName: "is_user_registered",
      methodParams: [isPublic],
      result: "true"
    }

    try {
      const decrypted = await decrypt_Key(acc as any, id, data)
      if (!decrypted || decrypted.trim() === "") {
        setError("Please check your Id and encrypted text")
      } else {
        if (decrypted === "Failed") {
          throw new Error("Access Denied")
        } else {
          setDecryptedText(decrypted)
          setNodesApproved(2)
          setIsSheetOpen(true)
        }
      }
    } catch (e:any) {
      if (e.message === "Malformed UTF-8 data") {
        setError("Please check your ID and Encrypted text")
      } else {
        setError("Access Parameters Denied Data Request")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const connectWallet = async () => {
    const isAllowed = await setAllowed();
    if (isAllowed) {
      setIsWalletConnected(true);
      setIsPublic(await getPublicKey());
    }
  }

  const isButtonDisabled = !inputText.trim() || !idText.trim() || isLoading;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1b1e] text-[#d8d8d8] relative">
      {error && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md z-50">
          <Alert variant="destructive" className="bg-red-900 text-white border-red-600">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              {error}
              {error === "Access Parameters Denied Data Request" && (
                <div className="mt-2 text-xs text-[#b2b2b2]">0/2 nodes approved</div>
              )}
            </AlertDescription>
          </Alert>
        </div>
      )}

      {!isWalletConnected ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">Connect your wallet</h1>
          <Button onClick={connectWallet} className="bg-[#2a2b2f] text-white hover:bg-[#4e4e4e]">Connect</Button>
        </div>
      ) : (
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">Secure Your Data</h1>
            <p className="mt-4 text-lg text-[#d8d8d8]">
              This is a demo of how we decrypt data and access it for various purposes
            </p>
          </div>
          
          <Input
            placeholder="Type your ID..."
            value={idText}
            required
            onChange={(e) => setIdText(e.target.value)}
            className="w-full bg-[#2a2b2f] text-white placeholder:text-[#4e4e4e]"
          />
          
          <Textarea
            placeholder="Type your Encrypted Data..."
            value={inputText}
            required
            onChange={(e) => setInputText(e.target.value)}
            className="w-full bg-[#2a2b2f] text-white placeholder:text-[#4e4e4e]"
          />
          
          <Button
            onClick={() => decryptData(inputText, idText)}
            className={`w-full text-white transition-all duration-300 ${
              isLoading ? 'bg-transparent' : 'bg-[#2a2b2f] hover:bg-[#4e4e4e]'
            }`}
            disabled={isButtonDisabled}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Decrypting...
              </>
            ) : (
              'Decrypt'
            )}
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetContent className="bg-[#2a2b2f] text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Decrypted Text</SheetTitle>
                <SheetDescription className="text-[#d8d8d8]">
                  Here's your decrypted data:
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4 space-y-4">
                {/* <Progress value={0} className="w-full bg-white text-white" /> */}
                <div className="p-4 bg-[#1a1b1e] rounded-md">
                  <pre className="text-sm text-white whitespace-pre-wrap break-words">
                    {decryptedText}
                  </pre>
                </div>
                
                <h5 className="text-xs text-[#7d7c7c]">2/2 nodes approved</h5>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}
    </div>
  )
}