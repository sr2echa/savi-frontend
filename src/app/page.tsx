"use client"
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Github, BookOpen, Play, Rocket, Lock, Shield } from "lucide-react";

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <main className=" flex justify-center min-h-screen flex-col items-center p-24 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets/background.svg')"}}>
      <div className="relative flex justify-center" style={{ overflow: 'none', backdropFilter: 'blur(0px)', height:'100%'}}>
        <div className="fixed top-0 left-0 flex h-12 mb-10 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          
    {/* <div className="flex flex-col items-center justify-center min-h-screen bg-[#1a1b1e] text-[#d8d8d8]">
      <div className="w-full max-w-4xl space-y-12 px-4"> */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl text-white">
            sa<span className="text-[#4e4e4e]">vi</span>
          </h1>
          <p className="text-xl text-[#d8d8d8]">
            Next-generation Distributed Key Generation Protocol on Stellar. <br/>
            <span className="text-[#4e4e4e] text-m">Laying the road for the future of DATA DAOs</span>
          </p>
          <div className="flex justify-center">
            <Separator className="bg-[#4e4e4e] w-[40%] text-center flex justify-center m-1" />
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/chiranjeev13/saviKeyGen">
              <Button className="bg-[#2a2b2f] text-white hover:bg-[#4e4e4e]">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </Link>
            <Link href="https://gist.github.com/vaibhavgeek/ec1b82626afd392ff9bd0cc9ab7ab10d">
              <Button className="bg-[#2a2b2f] text-white hover:bg-[#4e4e4e]">
                <BookOpen className="mr-2 h-4 w-4" /> Documentation
              </Button>
            </Link>
            <Link href="/suffice">
              <Button className="bg-[#2a2b2f] text-white hover:bg-[#4e4e4e]">
                <Play className="mr-2 h-4 w-4" /> Demo App
              </Button>
            </Link>
          </div>
        </header>
{/* 
        <Tabs defaultValue="features" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 bg-[#2a2b2f]">
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
          </TabsList>
          <TabsContent value="features" className="mt-4">
            <Card className="bg-[#2a2b2f] border-[#4e4e4e]">
              <CardHeader>
                <CardTitle className="text-white">Key Features</CardTitle>
                <CardDescription>What makes SecureCrypt stand out</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Lock className="mr-2 h-5 w-5 text-[#d8d8d8]" />
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-[#d8d8d8]" />
                  <span>Decentralized key management</span>
                </div>
                <div className="flex items-center">
                  <Rocket className="mr-2 h-5 w-5 text-[#d8d8d8]" />
                  <span>Quantum-resistant algorithms</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="how-it-works" className="mt-4">
            <Card className="bg-[#2a2b2f] border-[#4e4e4e]">
              <CardHeader>
                <CardTitle className="text-white">How It Works</CardTitle>
                <CardDescription>The technology behind SecureCrypt</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Connect your wallet</li>
                  <li>Enter your data and unique ID</li>
                  <li>SecureCrypt encrypts your data</li>
                  <li>Data is securely stored on the blockchain</li>
                  <li>Retrieve and decrypt data with your ID</li>
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="use-cases" className="mt-4">
            <Card className="bg-[#2a2b2f] border-[#4e4e4e]">
              <CardHeader>
                <CardTitle className="text-white">Use Cases</CardTitle>
                <CardDescription>Where SecureCrypt can be applied</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="secondary">DeFi</Badge>
                <Badge variant="secondary">NFTs</Badge>
                <Badge variant="secondary">DAOs</Badge>
                <Badge variant="secondary">Smart Contracts</Badge>
                <Badge variant="secondary">Digital Identity</Badge>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Separator className="bg-[#4e4e4e]" />

        <footer className="text-center">
          <p>&copy; 2024 SecureCrypt. All rights reserved.</p>
        </footer> */}
      </div>
    </div>
        {/* </div>
      </div> */}
    </main>
  );
}
