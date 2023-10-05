import { ethers } from "ethers";
import contractABI from "../../abis/Nitikosh.json";
import { useState, useEffect } from "react";

export async function connectWallet() {
  if (window.ethereum) {
    try {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });

      const desiredChainId = "0x13881"; // 0x followed by hexadecimal chain ID

      if (chainId !== desiredChainId) {
        // Switch to the desired network
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: desiredChainId }],
        });
      }
      // Request access to the user's accounts
      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Wallet connected!");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let accounts = await provider.send("eth_requestAccounts", []);
      let userAddress = accounts[0];

      // Update the web3 state

      console.log(userAddress);

      return {
        provider,
        userAdd: userAddress,
      };
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  } else {
    console.error("No wallet found!");
  }
}

export function useWeb3State() {
  const [web3State, setWeb3State] = useState({
    provider: undefined,
    signer: undefined,
    contract: undefined,
    userAdd: "",
  });

  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        // Check if MetaMask is installed
        if (window.ethereum) {
          // Create a new provider and signer
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          // Create a contract instance
          const contractAddress = process.env.NEXT_PUBLIC_CONT_ADD;
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          // console.log("contract",contract);

          let accounts = await provider.send("eth_requestAccounts", []);
          let userAddress = accounts[0];

          // Update the web3 state
          setWeb3State({
            provider,
            signer,
            contract,
            userAdd: userAddress,
          });
        } else {
          console.error("No wallet found!");
        }
      } catch (error) {
        console.error("Failed to initialize web3:", error);
      }
    };

    initializeWeb3();
  }, []);

  return web3State;
}

// Mint/register a new case
export async function mintCase(web3State, linkHash) {
  if (!web3State.signer || !web3State.contract) {
    console.error("Signer or contract is undefined");
    return;
  }

  try {
    const mintTx = await web3State.contract
      .connect(web3State.signer)
      .mintNewCase(linkHash);
    const receipt = await mintTx.wait();

    const tokenId = receipt.events?.[2].args?.[0].toNumber();
    const caseNo = receipt.events?.[2].args?.[1].toNumber();

    console.log(
      "New case is registered with case NO and TokenId",
      caseNo,
      tokenId
    );
  } catch (error) {
    console.error("Failed to mint NFT:", error);
  }
}

// Mint an NFT by referencing any particular case

export async function mintSubCase(web3State, caseNo, linkHash) {
  if (!web3State.signer || !web3State.contract) {
    console.error("Signer or contract is undefined");
    return;
  }

  try {
    const mintTx = await web3State.contract
      .connect(web3State.signer)
      .mintWithRefrence(caseNo, linkHash);
    const receipt = await mintTx.wait();

    const tokenId = receipt.events?.[0]?.args?.[1]?.toNumber();
    console.log("New subcase is added to caseNO with tokenId", caseNo, tokenId);
  } catch (error) {
    console.error("Failed to mint NFT:", error);
  }
}

// Function to get the case Tokens (sub case) of any particular case

export async function getCaseTokens(web3State, caseNo) {
  if (!web3State.contract) {
    console.error("Contract is undefined");
    return [];
  }

  try {
    const tokens = await web3State.contract.getCaseTokens(caseNo);
    const tokenIds = tokens.map((tokenId) => tokenId.toNumber());

    return tokenIds;
  } catch (error) {
    console.error("Failed to retrieve case tokens:", error);
    return [];
  }
}
