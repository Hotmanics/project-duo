import React, { useState, useEffect } from 'react';
import { ProjectDuoAddress, ProjectDuoABI } from "../../Smart Contract Information/ProjectDuo.js";
import { ethers } from "ethers"
import YourAsset from './YourAsset/YourAsset.js';
import "./YourAssets.css";

const YourAssets = (props)=> {

    useEffect(()=> {
        DisplayAssets();
    }, [])

       
    useEffect(()=> {
        if (props.onMintTrigger) {
          DisplayAssets();  
        }
    }, [props.onMintTrigger]);


    const address = ProjectDuoAddress;
    const contract = new ethers.Contract(
        address,
        ProjectDuoABI,
        props.connectedWalletInfo.provider
    );

    const [assets, setAssets] = useState([]);
    const [collectionName, setCollectionName] = useState('');
    const [collectionSymbol, setCollectiionSymbol] = useState('');

    async function getJson(uri) {
        try {
            let response = await fetch(uri);
            let responseJson = await response.json();
            return responseJson;
        } catch(error) {
            console.error(error);
        }
    }
    
    const DisplayAssets = async ()=> {

        setIsLoadingAssets(true);

        if (props.connectedWalletInfo.provider === undefined) {
            return;
        }

        let collectionName = await contract.name();
        let collectionSymbol = await contract.symbol();

        const assets = [];
    
        const mintCount = await contract.mintCount();

        for (let i =0; i < mintCount; i++) {
            let ownerAddress = await contract.ownerOf(i);
            if (ownerAddress === props.connectedWalletInfo.account) {
    
                let uri = await contract.tokenURI(i);
                uri = uri.replace("ipfs://", "https://ipfs.io/ipfs/");
                let json = await getJson(uri);

                let imgURI = json.image.replace("ipfs://", "https://ipfs.io/ipfs/");
                assets.push({
                  name: json.name,
                  description: json.description,
                  src: imgURI,
                  id: i,
                  attributes: json.attributes
                });
            }
        }

        setIsLoadingAssets(false);
        setAssets(assets);
        setCollectiionSymbol(collectionSymbol);
        setCollectionName(collectionName);
    }

    let output;

    if (assets.length > 0) {
        output = <div>
                    <h2 id="title">Your Characters</h2>
                    <div>
                    { assets.map((data) => (
                        <YourAsset
                            boastMessage= {props.boastMessage}
                            key={data.id} src={data.src} name={data.name} description={data.description} attributes={data.attributes}
                            width={75} height={75} id={data.id}
                        >
                        </YourAsset>
                    ))}
                    </div>
        </div>;

    }

    const [isLoadingAssets, setIsLoadingAssets] = useState(false);

    let loadingOutput;

    if (isLoadingAssets) {
        loadingOutput = <p>Loading your characters..</p>
    }
    else {
        loadingOutput = <div></div>
    }
    return <div className='yourAssets'>
        { loadingOutput }
        { output }
        </div>
}

export default YourAssets;

