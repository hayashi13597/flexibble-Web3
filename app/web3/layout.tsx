"use client";
import { Sidebar, Navbar } from "@/components/Web3Component";
import { Sepolia } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StateContextProvider } from "@/context";

export default function Web3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <StateContextProvider>
        <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
          <div className="sm:flex hidden mr-10 relative">
            <Sidebar />
          </div>
          <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
            <Navbar />
            {children}
          </div>
        </div>
      </StateContextProvider>
    </ThirdwebProvider>
  );
}
