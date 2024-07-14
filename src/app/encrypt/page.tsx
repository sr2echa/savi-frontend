    // // // import Image from "next/image";
    // // // import LandingE from "@/components/landing-e";

    // // // export default function Encrypt() {
    // // //   return (
    // // //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // // //       <LandingE />
    // // //     </main>
    // // //   );
    // // // }

    // // "use client"

    // // import { useState, useEffect } from "react"
    // // import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
    // // import { Button } from "@/components/ui/button"
    // // import { Textarea } from "@/components/ui/textarea"

    // // import { encrypt_key } from "savi-keygen"

    // // export default function Encrypt() {
    
    // //     type AccessControlType = 
    // //     {
    // //         contractAddress: string,
    // //         methodName: string,
    // //         methodParams:any[],
    // //         result: any,
    // //     }

    // //   const [inputText, setInputText] = useState("")
    // //   const [encryptedText, setEncryptedText] = useState("")
    // //   const [showEncryptedText, setShowEncryptedText] = useState(false) 
    // //   const [isCopied, setIsCopied] = useState(false)
    // //   const [encryptedData, setEncryptedData] = useState("")
    
    // //   const [id, setId] = useState("")
    // //   const [isSheetOpen, setIsSheetOpen] = useState(false)
    // //   const [copiedState, setCopiedState] = useState({ id: false, encryptedText: false })

    // //   const acc:AccessControlType = {
    // //     contractAddress:"CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7",
    // //     methodName:"is_user_registered",
    // //     methodParams:[""],
    // //     result:"true"
    // //   }

    // //   async function encryptData(data: string) {
    // //     let encrypted
    // //     encrypted = await encrypt_key(acc as AccessControlType, data)
    // //     setEncryptedText(encrypted.encrypted_data)
    // //     setId(encrypted.ID)
    // //     setShowEncryptedText(true)
    // //     setIsSheetOpen(true)
    // //   }


    // // const handleCopy = (textToCopy: string, type: string): void => {
    // //     navigator.clipboard.writeText(textToCopy)
    // //     setCopiedState(prev => ({ ...prev, [type]: true }))
    // //     setTimeout(() => setCopiedState(prev => ({ ...prev, [type]: false })), 2000)
    // // }

    // //   return (
    // //     <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1b1e] text-white">
    // //       <div className="space-y-4 text-center">
    // //         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Secure Your Messages</h1>
    // //         <p className="mt-4 text-lg text-gray-400">
    // //           Encrypt your text with a single click and share it securely.
    // //         </p>
    // //       </div>
    // //       <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    // //         <SheetContent className="w-[90vw] max-w-2xl">
    // //           <SheetHeader>
    // //             <SheetTitle>Encrypted Output</SheetTitle>
    // //             <SheetDescription>Your encrypted text and ID are displayed below.</SheetDescription>
    // //           </SheetHeader>
    // //           {inputText.trim().length > 0 && (
    // //             <div className="space-y-4 p-4">
    // //               <div className="bg-[#d8d8d8] rounded-sm max-w-md p-4">
    // //                 <div className="flex items-center justify-between">
    // //                   <span className="text-gray-400 text-sm">ID</span>
    // //                   <Button
    // //                     variant="ghost"
    // //                     onClick={() => handleCopy(id, 'id')}
    // //                     className="bg-[#d8d8d8] text-[#4e4e4e] hover:bg-[#d8d8d8] hover:text-white"
    // //                   >
    // //                     {copiedState.id ? "Copied!" : "Copy"}
    // //                   </Button>
    // //                 </div>
    // //                 <pre className="font-mono text-sm whitespace-pre-wrap break-all mt-1">{id}</pre>
    // //               </div>
    // //               <div className="bg-[#e4e4e4] rounded-lg p-4">
    // //                 <div className="flex items-center justify-between">
    // //                   <span className="text-gray-400 text-sm">Encrypted Data</span>
    // //                   <Button
    // //                     variant="ghost"
    // //                     onClick={() => handleCopy(encryptedText, 'encryptedText')}
    // //                     className="bg-[#d8d8d8] text-[#4e4e4e] hover:bg-[#d8d8d8] hover:text-white"
    // //                   >
    // //                     {copiedState.encryptedText ? "Copied!" : "Copy"}
    // //                   </Button>
    // //                 </div>
    // //                 <pre className="font-mono text-sm whitespace-pre-wrap break-all">{encryptedText}</pre>
    // //               </div>
    // //             </div>
    // //           )}
    // //         </SheetContent>
    // //       </Sheet>
    // //       <div className="mt-12 w-full max-w-md">
    // //         <div className="relative bg-[#2a2b2f] rounded-lg">
    // //           <Textarea
    // //             placeholder="Type your message..."
    // //             value={inputText}
    // //             onChange={(e) => setInputText(e.target.value)}
    // //             className="w-full rounded-lg bg-[#2a2b2f] px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none"
    // //           />
    // //           <Button
    // //             variant="ghost"
    // //             size="icon"
    // //             className={`absolute bottom-2 right-2 bg-[#2a2b2f] text-white hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground transition-colors duration-300 ${
    // //               inputText.trim().length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    // //             }`}
    // //             disabled={inputText.trim().length === 0}
    // //             onClick={() => encryptData(inputText)}
    // //           >
    // //             <PlaneIcon className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-foreground group-focus:text-primary-foreground" />
    // //             <span className="sr-only">Show Encrypted Data</span>
    // //           </Button>
    // //         </div>
    // //       </div>
    // //       {(copiedState.id || copiedState.encryptedText) && (
    // //         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
    // //           Content copied to clipboard!
    // //         </div>
    // //       )}
    // //     </div>
    // //   )
    // // }

    // // // Remove the duplicate function implementation of PlaneIcon.

    // // function PlaneIcon(props:any) {
    // //   return (
    // //     <svg
    // //       {...props}
    // //       xmlns="http://www.w3.org/2000/svg"
    // //       width="24"
    // //       height="24"
    // //       viewBox="0 0 24 24"
    // //       fill="none"
    // //       stroke="currentColor"
    // //       strokeWidth="2"
    // //       strokeLinecap="round"
    // //       strokeLinejoin="round"
    // //     >
    // //       <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    // //     </svg>
    // //   )
    // // }


    // // function XIcon(props:any) {
    // //   return (
    // //     <svg
    // //       {...props}
    // //       xmlns="http://www.w3.org/2000/svg"
    // //       width="24"
    // //       height="24"
    // //       viewBox="0 0 24 24"
    // //       fill="none"
    // //       stroke="currentColor"
    // //       strokeWidth="2"
    // //       strokeLinecap="round"
    // //       strokeLinejoin="round"
    // //     >
    // //       <path d="M18 6 6 18" />
    // //       <path d="m6 6 12 12" />
    // //     </svg>
    // //   )
    // // }

    // // import Image from "next/image";
    // // import LandingE from "@/components/landing-e";

    // // export default function Encrypt() {
    // //   return (
    // //     <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // //       <LandingE />
    // //     </main>
    // //   );
    // // }

    // "use client"

    // import { useState, useEffect } from "react"
    // import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
    // import { Button } from "@/components/ui/button"
    // import { Textarea } from "@/components/ui/textarea"
    // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

    // import { encrypt_key } from "savi-keygen"

    // export default function Encrypt() {
    
    //     type AccessControlType = 
    //     {
    //         contractAddress: string,
    //         methodName: string,
    //         methodParams:any[],
    //         result: any,
    //     }

    // const [inputText, setInputText] = useState("")
    // const [encryptedText, setEncryptedText] = useState("")
    // const [showEncryptedText, setShowEncryptedText] = useState(false) 
    // const [isCopied, setIsCopied] = useState(false)
    // const [encryptedData, setEncryptedData] = useState("")
    
    // const [id, setId] = useState("")
    // const [isSheetOpen, setIsSheetOpen] = useState(false)
    // const [copiedState, setCopiedState] = useState({ id: false, encryptedText: false })
    // const [selectedMethod, setSelectedMethod] = useState("is_user_registered")

    // const acc:AccessControlType = {
    //     contractAddress:"CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7",
    //     methodName: selectedMethod,
    //     methodParams:[""],
    //     result:"true"
    // }

    // async function encryptData(data: string) {
    //     let encrypted
    //     encrypted = await encrypt_key(acc as AccessControlType, data)
    //     setEncryptedText(encrypted.encrypted_data)
    //     setId(encrypted.ID)
    //     setShowEncryptedText(true)
    //     setIsSheetOpen(true)
    // }

    // const handleCopy = (textToCopy: string, type: string): void => {
    //     navigator.clipboard.writeText(textToCopy)
    //     setCopiedState(prev => ({ ...prev, [type]: true }))
    //     setTimeout(() => setCopiedState(prev => ({ ...prev, [type]: false })), 2000)
    // }

    // return (
    //     <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1b1e] text-white">
    //     <div className="space-y-4 text-center">
    //         <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Secure Your Messages</h1>
    //         <p className="mt-4 text-lg text-gray-400">
    //         Encrypt your text with a single click and share it securely.
    //         </p>
    //     </div>
    //     <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
    //         <SheetContent className="w-[90vw] max-w-2xl">
    //         <SheetHeader>
    //             <SheetTitle>Encrypted Output</SheetTitle>
    //             <SheetDescription>Your encrypted text and ID are displayed below.</SheetDescription>
    //         </SheetHeader>
    //         {inputText.trim().length > 0 && (
    //             <div className="space-y-4 p-4">
    //             <div className="bg-[#d8d8d8] rounded-sm max-w-md p-4">
    //                 <div className="flex items-center justify-between">
    //                 <span className="text-gray-400 text-sm">ID</span>
    //                 <Button
    //                     variant="ghost"
    //                     onClick={() => handleCopy(id, 'id')}
    //                     className="bg-[#d8d8d8] text-[#4e4e4e] hover:bg-[#d8d8d8] hover:text-white"
    //                 >
    //                     {copiedState.id ? "Copied!" : "Copy"}
    //                 </Button>
    //                 </div>
    //                 <pre className="font-mono text-sm whitespace-pre-wrap break-all mt-1">{id}</pre>
    //             </div>
    //             <div className="bg-[#e4e4e4] rounded-lg p-4">
    //                 <div className="flex items-center justify-between">
    //                 <span className="text-gray-400 text-sm">Encrypted Data</span>
    //                 <Button
    //                     variant="ghost"
    //                     onClick={() => handleCopy(encryptedText, 'encryptedText')}
    //                     className="bg-[#d8d8d8] text-[#4e4e4e] hover:bg-[#d8d8d8] hover:text-white"
    //                 >
    //                     {copiedState.encryptedText ? "Copied!" : "Copy"}
    //                 </Button>
    //                 </div>
    //                 <pre className="font-mono text-sm whitespace-pre-wrap break-all">{encryptedText}</pre>
    //             </div>
    //             </div>
    //         )}
    //         </SheetContent>
    //         </Sheet>
    //     <div className="mt-12 w-full max-w-md space-y-4">
    //         <Select onValueChange={setSelectedMethod} defaultValue={selectedMethod}>
    //         <SelectTrigger className="w-full bg-[#2a2b2f] text-white">
    //             <SelectValue placeholder="Select Access Control" />
    //         </SelectTrigger>
    //         <SelectContent className="bg-[#2a2b2f] text-white">
    //             <SelectItem value="is_user_registered">Is User Registered</SelectItem>
    //             <SelectItem value="is_admin">Is Admin</SelectItem>
    //             <SelectItem value="has_premium">Has Premium</SelectItem>
    //         </SelectContent>
    //         </Select>
    //         <div className="relative bg-[#2a2b2f] rounded-lg">
    //         <Textarea
    //             placeholder="Type your message..."
    //             value={inputText}
    //             onChange={(e) => setInputText(e.target.value)}
    //             className="w-full rounded-lg bg-[#2a2b2f] px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none"
    //         />
    //         <Button
    //             variant="ghost"
    //             size="icon"
    //             className={`absolute bottom-2 right-2 bg-[#2a2b2f] text-white hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground transition-colors duration-300 ${
    //             inputText.trim().length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
    //             }`}
    //             disabled={inputText.trim().length === 0}
    //             onClick={() => encryptData(inputText)}
    //         >
    //             <PlaneIcon className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-foreground group-focus:text-primary-foreground" />
    //             <span className="sr-only">Show Encrypted Data</span>
    //         </Button>
    //         </div>
    //     </div>
    //     {(copiedState.id || copiedState.encryptedText) && (
    //         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
    //         Content copied to clipboard!
    //         </div>
    //     )}
    //     </div>
    // )
    // }
    // // Remove the duplicate function implementation of PlaneIcon.

    // function PlaneIcon(props:any) {
    // return (
    //     <svg
    //     {...props}
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="24"
    //     height="24"
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     stroke="currentColor"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     >
    //     <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    //     </svg>
    // )
    // }


    // function XIcon(props:any) {
    // return (
    //     <svg
    //     {...props}
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="24"
    //     height="24"
    //     viewBox="0 0 24 24"
    //     fill="none"
    //     stroke="currentColor"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     >
    //     <path d="M18 6 6 18" />
    //     <path d="m6 6 12 12" />
    //     </svg>
    // )
    // }
    "use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

import { encrypt_key } from "savi-keygen"

export default function Encrypt() {
  
    type AccessControlType = 
    {
        contractAddress: string,
        methodName: string,
        methodParams:any[],
        result: any,
    }

  const [inputText, setInputText] = useState("")
  const [encryptedText, setEncryptedText] = useState("")
  const [showEncryptedText, setShowEncryptedText] = useState(false) 
  const [isCopied, setIsCopied] = useState(false)
  const [encryptedData, setEncryptedData] = useState("")
  
  const [id, setId] = useState("")
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [copiedState, setCopiedState] = useState({ id: false, encryptedText: false })
  const [selectedMethod, setSelectedMethod] = useState("is_user_registered")
  const [contractAddress, setContractAddress] = useState("CDG6OKHVGF5ICLPGRPRHHN5F4JKEZCMMOHG3PFY6CRFN25JI7HB6I7Y7")
  const [expectedResponse, setExpectedResponse] = useState("true")

  const acc:AccessControlType = {
    contractAddress: contractAddress,
    methodName: selectedMethod,
    methodParams:[""],
    result: expectedResponse
  }

  async function encryptData(data: string) {
    let encrypted
    encrypted = await encrypt_key(acc as AccessControlType, data)
    setEncryptedText(encrypted.encrypted_data)
    setId(encrypted.ID)
    setShowEncryptedText(true)
    setIsSheetOpen(true)
  }

  const handleCopy = (textToCopy: string, type: string): void => {
    navigator.clipboard.writeText(textToCopy)
    setCopiedState(prev => ({ ...prev, [type]: true }))
    setTimeout(() => setCopiedState(prev => ({ ...prev, [type]: false })), 2000)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1b1e] text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Secure Your Messages</h1>
        <p className="mt-4 text-lg text-gray-400">
          Encrypt your text with a single click and share it securely.
        </p>
      </div>
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[90vw] max-w-2xl">
          <SheetHeader>
            <SheetTitle>Encrypted Output</SheetTitle>
            <SheetDescription>Your encrypted text and ID are displayed below.</SheetDescription>
          </SheetHeader>
          {inputText.trim().length > 0 && (
            <div className="space-y-4 p-4">
              <div className="bg-[#d8d8d8] rounded-sm max-w-md p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">ID</span>
                  <Button
                    variant="ghost"
                    onClick={() => handleCopy(id, 'id')}
                    className="bg-[#d8d8d8] text-[#4e4e4e] hover:bg-[#d8d8d8] hover:text-white"
                  >
                    {copiedState.id ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <pre className="font-mono text-sm whitespace-pre-wrap break-all mt-1">{id}</pre>
              </div>
              <div className="bg-[#e4e4e4] rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Encrypted Data</span>
                  <Button
                    variant="ghost"
                    onClick={() => handleCopy(encryptedText, 'encryptedText')}
                    className="bg-[#d8d8d8] text-[#4e4e4e] hover:bg-[#d8d8d8] hover:text-white"
                  >
                    {copiedState.encryptedText ? "Copied!" : "Copy"}
                  </Button>
                </div>
                <pre className="font-mono text-sm whitespace-pre-wrap break-all">{encryptedText}</pre>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
      <div className="mt-12 w-full max-w-md space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <Input
              placeholder="Contract Address (required)"
              value={contractAddress}
              onChange={(e) => setContractAddress(e.target.value)}
              className="w-full bg-[#2a2b2f] text-white"
            />
          </div>
          <div className="flex-1">
            <Input
              placeholder="Expected Response"
              value={expectedResponse}
              onChange={(e) => setExpectedResponse(e.target.value)}
              className="w-full bg-[#2a2b2f] text-white"
            />
          </div>
        </div>
        <Select onValueChange={setSelectedMethod} defaultValue={selectedMethod}>
          <SelectTrigger className="w-full bg-[#2a2b2f] text-white">
            <SelectValue placeholder="Select Access Control" />
          </SelectTrigger>
          <SelectContent className="bg-[#2a2b2f] text-white">
            <SelectItem value="is_user_registered">Is User Registered</SelectItem>
            <SelectItem value="is_admin">Is Admin</SelectItem>
            <SelectItem value="has_premium">Has Premium</SelectItem>
          </SelectContent>
        </Select>
        <div className="relative bg-[#2a2b2f] rounded-lg">
          <Textarea
            placeholder="Type your message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full rounded-lg bg-[#2a2b2f] px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all duration-300 resize-none"
          />
          <Button
            variant="ghost"
            size="icon"
            className={`absolute bottom-2 right-2 bg-[#2a2b2f] text-white hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground transition-colors duration-300 ${
              inputText.trim().length === 0 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            disabled={inputText.trim().length === 0 || contractAddress.trim().length === 0}
            onClick={() => encryptData(inputText)}
          >
            <PlaneIcon className="w-4 h-4 transition-colors duration-300 group-hover:text-primary-foreground group-focus:text-primary-foreground" />
            <span className="sr-only">Show Encrypted Data</span>
          </Button>
        </div>
      </div>
      {(copiedState.id || copiedState.encryptedText) && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          Content copied to clipboard!
        </div>
      )}
    </div>
  )
}

function PlaneIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}

function XIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}