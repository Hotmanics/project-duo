import React, { useState } from 'react';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers } from "ethers"
import "./Lost2.css";

const Lost2 = (props)=> {

    const handleClick = ()=> {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: "0x89",
              rpcUrls: ["https://polygon.llamarpc.com"],
              chainName: "Polygon Mainnet",
              nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18
              },
              blockExplorerUrls: ["https://polygonscan.com/"]
            }]
          });
    }

    return <div className="lost2">
            <div id="uh">
                <div id="holla uh2">Please ensure that your metamask is connected to Polygon!</div>
                <button onClick={handleClick}>Add Polygon To Metamask</button>
            </div>
        </div>
}

export default Lost2;