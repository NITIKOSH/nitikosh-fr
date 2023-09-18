import {ethers} from "ethers";
import contractABI from "../../abis/Nitikosh.json";
import { useState,useEffect } from 'react';


// func to connect the wallet
export async function connectWallet() {  
  if (window.ethereum) {
    try {
      // Request access to the user's accounts
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Wallet connected!');
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  } else {
    console.error('No wallet found!');
  }
}


export interface Web3State {
  provider: ethers.providers.Web3Provider | undefined;
  signer: ethers.Signer | undefined;
  contract: ethers.Contract | undefined;
  userAdd: string|undefined;
}


// initialize the web3 componets
export function useWeb3State(): Web3State {

  const [web3State, setWeb3State] = useState<Web3State>({
    provider: undefined,
    signer: undefined,
    contract: undefined,
    userAdd: ""
  });


  useEffect(() => {
    const initializeWeb3 = async () => {
      try {
        // Check if MetaMask is installed 
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();

          // Create a contract instance
          const contractAddress = process.env.NEXT_PUBLIC_CONT_ADD!;
          const contract = new ethers.Contract(contractAddress, contractABI, signer);
          // console.log("contract",contract);

          let accounts = await provider.send("eth_requestAccounts", []);
          let userAddress: string = accounts[0];

          // Update the web3 state
          setWeb3State({
            provider,
            signer,
            contract,
            userAdd: userAddress,
          });
          
        } else {
          console.error('No wallet found!');
        }
      } catch (error) {
        console.error('Failed to initialize web3:', error);
      }
    };

    initializeWeb3();
  }, []);

  return web3State;
}


// Mint/register a new case
export async function mintCase(web3State: Web3State,linkHash:string) {
  if (!web3State.signer || !web3State.contract) {
    console.error('Signer or contract is undefined');
    return;
  }
  
  try {
    const mintTx = await web3State.contract.connect(web3State.signer).mintNewCase(linkHash);
    const receipt = await mintTx.wait();

    const tokenId = receipt.events?.[0]?.args?.[1]?.toNumber();
    const caseNo = receipt.events?.[0]?.args?.[2]?.toNumber();

    console.log("New case is registered with case NO and TokenId",caseNo, tokenId);
    
  } catch (error) {
    console.error('Failed to mint NFT:', error);
  }
}


// Mint an NFT by referencing any particular case

  export async function mintSubCase(web3State: Web3State,caseNo : number , linkHash:string) {
    if (!web3State.signer || !web3State.contract) {
      console.error('Signer or contract is undefined');
      return;
    }
    
    try {
      const mintTx = await web3State.contract.connect(web3State.signer).mintWithRefrence(caseNo,linkHash);
      const receipt = await mintTx.wait();
  
      const tokenId = receipt.events?.[0]?.args?.[1]?.toNumber();
      console.log("New subcase is added to caseNO with tokenId",caseNo, tokenId);
      
    } catch (error) {
      console.error('Failed to mint NFT:', error);
    }

}


// Function to get the case Tokens (sub case) of any particular case

export async function getCaseTokens(web3State: Web3State, caseNo: number): Promise<number[]> {
  if (!web3State.contract) {
    console.error('Contract is undefined');
    return [];
  }

  try {
    const tokens = await web3State.contract.getCaseTokens(caseNo);
    const tokenIds: number[] = tokens.map((tokenId: ethers.BigNumber) => tokenId.toNumber());

    return tokenIds;
  } catch (error) {
    console.error('Failed to retrieve case tokens:', error);
    return [];
  }
}



