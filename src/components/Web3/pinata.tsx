import axios from 'axios';

//The pinJSONToIPFS function is defined to pin a JSON object to IPFS using the Pinata API. 
// It takes the JSON data as a parameter.

export async function pinJSONToIPFS(jsonData: string) {
  // Function to pin JSON to IPFS using Pinata API


    const pinataUrl = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    //The Pinata API endpoint and headers are defined, including the Content-Type header and the API keys retrieved from the environment variables.  

    console.log("ipfs:",jsonData);
    // console.log(process.env.NEXT_PUBLIC_PINATA_API_KEY);
    // console.log(process.env.NEXT_PUBLIC_PINATA_API_SECRET);

    // The pinataData object is created with pinataMetadata containing the name of the data and pinataContent containing the actual JSON data.
    const pinataHeaders = {
        'Content-Type': 'application/json',
        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY! ,
        pinata_secret_api_key:process.env.NEXT_PUBLIC_PINATA_API_SECRET!
      };
      const pinataData = {
        pinataMetadata: {
          name: 'NitiKosh',
        },
        pinataContent: jsonData,
      };

      try {
        const response = await axios.post(pinataUrl, pinataData, { headers: pinataHeaders });
        // Accesing the IPFS link after uploading to IPFS
        const ipfsLink = response.data.IpfsHash;
        console.log('IPFS link:', ipfsLink);
        return ipfsLink;
      } catch (error) {
        console.error('Error pinning to Pinata:', error);
      }
    } 

// The unpinFromPinata function is defined to unpin an IPFS link from Pinata. It takes the IPFS link as a parameter.


export async function pinFileToIPFS(file: File) {
  const pinataUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';  
  
  const pinataHeaders = {
    'Content-Type': 'multipart/form-data',
    pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY!,
    pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_API_SECRET!,
  };

  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(pinataUrl, formData, { headers: pinataHeaders });
    const ipfsLink = response.data.IpfsHash;
    return ipfsLink;
  } catch (error) {
    console.error('Error pinning file to Pinata:', error);
    throw error;
  }
}