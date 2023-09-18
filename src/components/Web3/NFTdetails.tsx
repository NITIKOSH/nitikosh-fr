export async function NFTDetails(contract: any,nftId: number) {
  
  let jsonData;    
  try{
        if (contract) {
          // console.log(contract.address);
          // console.log("ID ",nftId);
          const tokenURIHash = await contract.tokenURI(nftId);
          
          const ipfsBaseUrl = 'https://ipfs.io/ipfs/';
          const fullIpfsUrl = ipfsBaseUrl + tokenURIHash;
          
          const response = await fetch(fullIpfsUrl);
           jsonData = await response.json();

          console.log('json data', jsonData);

        } else {
          console.log('contract not found');
        }
      } catch (error) {
        console.error('Failed to fetch token URI:', error);
      }
    
      // console.log("random",nftDetails);
  return jsonData;
}
