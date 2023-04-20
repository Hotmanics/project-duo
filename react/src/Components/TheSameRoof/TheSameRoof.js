import React, { useState } from 'react';
import { ProjectDuoAddress, ProjectDuoABI } from "../../Smart Contract Information/ProjectDuo.js";
import { ethers } from "ethers"
import "./TheSameRoof.css";
import ContractManagement from '../ContractManagement/ContractManagement.js';
import YourAssets from '../YourAssets/YourAssets.js';
import Logger from '../Logger/Logger.js';

const TheSameRoof = (props)=> {
    const address = ProjectDuoAddress;
    const contract = new ethers.Contract(
        address,
        ProjectDuoABI,
        props.connectedWalletInfo.provider
    );

    const [onMintTrigger, setOnMintTrigger] = useState(0);

    const handleMint = ()=> {
      setOnMintTrigger((onMintTrigger)=> onMintTrigger + 1);
    }
    const [message, setMessage] = useState('');

    const handleLogger = (message)=> {
        setMessage(message);
    }

    return <div className='theSameRoof'>
        <Logger boastMessage={message}>
        </Logger>
        <ContractManagement 
            onBoastMessage={handleLogger}
            connectedWalletInfo={props.connectedWalletInfo}
            onMintTrigger={handleMint}
        ></ContractManagement>
        <YourAssets connectedWalletInfo={props.connectedWalletInfo} onMintTrigger={onMintTrigger}>
        </YourAssets>
    </div>
}

export default TheSameRoof;