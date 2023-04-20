import React, { useState } from 'react';
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { ethers } from "ethers"
import "./Lost.css";

const Lost = (props)=> {

    return <div className="lost">
            <div id="uh">
                <div id="holla uh2">Lost? Please follow this tutorial to install Metamask: </div>
                <a id="tt" href="https://www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/" target={"#"}><div id="tt">Tutorial</div></a>
            </div>
        </div>
}

export default Lost;