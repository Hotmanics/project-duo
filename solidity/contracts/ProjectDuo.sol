// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@opengsn/contracts/src/ERC2771Recipient.sol";

contract ProjectDuo is Ownable, ERC721URIStorage, AccessControl, ERC2771Recipient {
    
    uint256 mintCount;

    string[] rarityURLs = [
        "ipfs://bafybeielcuklhzaegddycgh6ivzl5f75fajdfopc7pmz4bdtc7sxbsxyhq/blue.json",
        "ipfs://bafybeielcuklhzaegddycgh6ivzl5f75fajdfopc7pmz4bdtc7sxbsxyhq/red.json",
        "ipfs://bafybeielcuklhzaegddycgh6ivzl5f75fajdfopc7pmz4bdtc7sxbsxyhq/green.json",
        "ipfs://bafybeielcuklhzaegddycgh6ivzl5f75fajdfopc7pmz4bdtc7sxbsxyhq/multi.json"
    ];

    constructor(address forwarder) ERC721("Project Duo", "PD") { 
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setTrustedForwarder(forwarder);
    }
    
    function mint() external {

        uint256 count = 0;
        for (uint256 i = 0; i < mintCount; i++) {
            if (ownerOf(i) == _msgSender()) {
                count++;
            }
        }

        require(count < 3, "You own too many!");

        _safeMint(_msgSender(), mintCount);

        uint256 rn = random();
        _setTokenURI(mintCount, rarityURLs[rn]);

        mintCount++;
    }

    function random() internal view returns(uint) {
        return (uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp))) % 4);
    }

    function supportsInterface(bytes4 interfaceId)
    public view override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function _msgSender() internal override(Context, ERC2771Recipient) virtual view returns (address ret) {
        return ERC2771Recipient._msgSender();
    }
        
    function _msgData() internal override(Context, ERC2771Recipient) virtual view returns (bytes calldata ret) {
        return ERC2771Recipient._msgData();
    }
}