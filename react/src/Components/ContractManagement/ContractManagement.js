import React, { useEffect, useState } from 'react';
import { ProjectDuoAddress, ProjectDuoABI } from "../../Smart Contract Information/ProjectDuo.js";
import { ethers } from "ethers"
import { RelayProvider } from '@opengsn/provider'
import "./ContractManagement.css";

const ContractManagement = (props)=> {

    const [collectionName, setCollectionName] = useState('');
    const [collectionSymbol, setCollectiionSymbol] = useState('');

    useEffect(()=> {
        getCollectionInfo();
    }, []);
    
    const getCollectionInfo = async ()=> {
        let collectionName = await contract.name();
        let collectionSymbol = await contract.symbol();

        setCollectiionSymbol(collectionSymbol);
        setCollectionName(collectionName);
    }

    const address = ProjectDuoAddress;
    const contract = new ethers.Contract(
        address,
        ProjectDuoABI,
        props.connectedWalletInfo.provider
    );
    console.log(contract);

    const handleBtnClick = async ()=> {

        try {
            props.onBoastMessage("Generating your character...A metamask popup will appear shortly...Please read the details and press the \"Sign\" button...After pressing the button, please wait another moment for the section below to populate! (This may take a couple of minutes)");
            const gsnConfig = {
                paymasterAddress: "0x935ad27F0883B7ad34a60E38a6dc08075179a5b0",
              }
    
              const gsnProvider = RelayProvider.newProvider({ provider: window.ethereum, config: gsnConfig })
              await gsnProvider.init()
              const provider = new ethers.providers.Web3Provider(gsnProvider)
              const signer = provider.getSigner()
              const aContract = new ethers.Contract(address, ProjectDuoABI, signer);
    
              let tx = await aContract.mint();
              await tx.wait();
              props.onBoastMessage("Generated your character! Please take a look below! You can now play the two games using your new character!");
    
              props.onMintTrigger();
        } catch (e) {
            if (e.reason === "execution reverted: You own too many!") {
                props.onBoastMessage("Sorry, but you can only own 3 characters per account! Sorry for the inconvenience! Please login using a different account if you want to generate more!");
            }
        }
    }

    return <div className='contractManagement'>
                <br/>
                <table>
                    <tbody>

                    <tr>
                    <th>
                        Collection Name
                    </th>
                    <th>
                        Collection Symbol
                    </th>
                    </tr>
                    <tr>
                    <th id="header">
                        {collectionName}
                    </th>
                    <th id="header">
                        {collectionSymbol}
                    </th>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <button onClick={handleBtnClick}>Generate a character!</button>
    </div>
}

export default ContractManagement;