import React, { useState } from 'react';
import "./AdvancedInformation.css";
import { ProjectDuoAddress, ProjectDuoABI } from "../../Smart Contract Information/ProjectDuo.js";

const AdvancedInformation = (props)=> {

    const [isShowing, setIsShowing] = useState(false);

    let output;
    if (isShowing) {
        output = <div>
            <div id="uh">
                <p id="uh2">Contract Address: {ProjectDuoAddress} </p>
                <a href="https://mumbai.polygonscan.com/address/0xbF6A844c4873372E138Da8FbF8BB51d4229b3873" target={"#"}><p>Explorer Link</p></a>
            </div>
            <button onClick={()=>{setIsShowing(false)}}>Hide Advanced Information</button>
        </div>
    } else {
        output = <button onClick={()=>{setIsShowing(true)}}>Show Advanced Information</button>
    }

    return <div className='advancedInformation'> 
    {output}
    </div>
}

export default AdvancedInformation;