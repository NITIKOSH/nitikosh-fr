"use client";
import Link from "next/link";
import Image from "next/image";
import { logo, search, wallent } from "@/assets";
import { useCallback, useState } from "react";
import { ethers } from "ethers";
export interface AccountType {
  address?: string;
  balance?: string;
  chainId?: string;
  network?: string;
}
const Navbar = () => {
  const [accountData, setAccountData] = useState<AccountType>({});

  const _connectToMetaMask = useCallback(async () => {
    const ethereum = window.ethereum;
    // Check if MetaMask is installed
    if (typeof ethereum !== "undefined") {
      try {
        // Request access to the user's MetaMask accounts
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get the connected Ethereum address
        const address = accounts[0];
        const provider = new ethers.BrowserProvider(ethereum);
        // Get the account balance
        const balance = await provider.getBalance(address);
        // Get the network ID from MetaMask
        const network = await provider.getNetwork();
        // Update state with the results
        setAccountData({
          address,
          balance: ethers.formatEther(balance),
          // The chainId property is a bigint, change to a string
          chainId: network.chainId.toString(),
          network: network.name,
        });
        // Check address in console of web browser
        console.log("connected to MetaMask with address: ", address);
      } catch (error: Error | any) {
        alert(`Error connecting to MetaMask: ${error?.message ?? error}`);
      }
    } else {
      alert("MetaMask not installed");
    }
  }, []);
  return (
    <div
      className=" w-screen bg-white h-20 flex items-center justify-center fixed  shadow-[0px_4px_8px_-4px_rgba(0,0,0,0.078)]
 "
    >
      {/* left side  */}
      <div className="container mx-auto flex  justify-between">
        <div className="flex items-center justify-center space-x-2">
          <Link className="cursor-pointer" href="/">
            <Image
              src={logo}
              alt="Picture of the author"
              width={30}
              height={30}
            />
          </Link>

          <Link
            href="/"
            className=" uppercase text-xl font-poppins cursor-pointer font-thin text-[#222222cb]"
          >
            nitikosh
          </Link>
        </div>
        {/* ri9ght side */}
        <div className="flex items-center justify-center space-x-4">
          <form className="flex items-center justify-center outline px-4 py-[6px] outline-[#D4D7E5] outline-1 rounded space-x-2">
            <input
              type="text"
              placeholder="Search Case..."
              id=""
              className="outline-none text-slate-400 text-sm w-48"
            />
            <Image
              src={search}
              alt="search icpon"
              width={18}
              height={18}
              className="cursor-pointer"
            />
          </form>
          <div>
            <button
              className=" flex items-center justify-center bg-gradient-to-r px-6 py-[6px] from-[#332885] to-[#7F8FD7] rounded cursor-pointer space-x-2"
              onClick={_connectToMetaMask}
            >
              <Image
                src={wallent}
                alt="wallet iconm"
                width={20}
                height={20}
               
              />
              {accountData.address ? (
                <span className="text-white text-sm">
                  {accountData.address.slice(0, 4)}...
                  {accountData.address.slice(
                    accountData.address.length - 4,
                    accountData.address.length
                  )}
                </span>
              ) : (
                <span className="text-white text-sm">Connect Wallet</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
