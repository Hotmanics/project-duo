import React, { useState } from 'react';
import { ProjectDuoAddress, ProjectDuoABI } from "../../Smart Contract Information/ProjectDuo.js";
import { ethers } from "ethers"

const LoggedInSection = (props)=> {
    const address = ProjectDuoAddress;
    const contract = new ethers.Contract(
        address,
        ProjectDuoABI,
        props.connectedWalletInfo.provider
    );
    
    console.log(contract);

    return <div>Hello</div>
}

export default LoggedInSection;