// SPDX-License-Identifier: MIT
 pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract Nitikosh is ERC721URIStorage{
//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenIdCounter ;
//     address  public owner; 
//     uint public caseNo = 0;
//     mapping (uint=>uint[]) public cases;
//     mapping(address=>uint[]) public agentcase;


//     // Event for new case minted
//     event CaseMinted(uint indexed tokenId, uint indexed caseNo, string indexed uri);

//     constructor() ERC721("Nitikosh", "NTK") {
//         owner = msg.sender;
//     }

//     function mintNewCase(string memory uri) public {
//         require(bytes(uri).length > 0, "URI must not be empty");
//         uint256 tokenId = _tokenIdCounter.current();
//         _tokenIdCounter.increment();
//         _safeMint(owner, tokenId);
//         _setTokenURI(tokenId, uri);
//         caseNo++;
//         cases[caseNo].push(tokenId);
//         agentcase[msg.sender].push(caseNo);
//         emit CaseMinted(tokenId, caseNo, uri);
//     }

//     function mintWithRefrence(uint _caseNo, string memory uri) public {
//         require(bytes(uri).length > 0, "URI must not be empty");
//         require(_caseNo > 0 && _caseNo <= caseNo, "Invalid case number");
//         uint256 tokenId = _tokenIdCounter.current();
//         _tokenIdCounter.increment();
//         _safeMint(owner, tokenId);
//         _setTokenURI(tokenId, uri);
//         cases[_caseNo].push(tokenId);
//         emit CaseMinted(tokenId, caseNo, uri);
//     }


//     function tokenURI(uint256 tokenId)
//         public
//         view
//         override(ERC721URIStorage)
//         returns (string memory)
//     {
//         require(tokenId>=0 && tokenId <= _tokenIdCounter.current(),"invalid TokenId");
//         return super.tokenURI(tokenId);
//     }

//     function getCaseTokens(uint _caseNo) public view returns (uint[] memory) {
//     require(_caseNo > 0 && _caseNo <= caseNo, "Invalid case number");
//     return cases[_caseNo];
// }
// function getUserCases(address _lawer) public view returns (uint[] memory) {
//     return agentcase[_lawer];
// }

//     function supportsInterface(bytes4 interfaceId)
//         public
//         view
//         override( ERC721URIStorage)
//         returns (bool)
//     {
//         return super.supportsInterface(interfaceId);
//     }
// }


//deployed at : 0x0A841f3C592AF88A10D69EFcF5b7b0aBd5c5A752
// by : 0xABCa9eD477d1e84db4f17B6155A429E643bd13784
// chain : polygon mumbai