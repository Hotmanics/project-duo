import React, { useState } from 'react';
import "./AdvancedInformation.css";
import { ProjectDuoAddress, ProjectDuoABI } from "../../Smart Contract Information/ProjectDuo.js";

const AdvancedInformation = (props)=> {

    const [isShowing, setIsShowing] = useState(false);

    let output;
    if (isShowing) {
        output = <div>
                <p id="ele">Contract Address:</p>
                <p id="addr">{ProjectDuoAddress}</p>
                <a id="ele" href="https://polygonscan.com/address/0xA9FA66ae55044e40840fa2381b78Df0D17A8fe46" target={"#"}><p>PolygonScan Link</p></a>
                <button onClick={()=>{setIsShowing(false)}}>Hide Advanced Information</button>
        
        </div>
        
        
        
        
        // <div>
        //     <div id="uh">
        //     </div>
        // </div>
    } else {
        output = <button onClick={()=>{setIsShowing(true)}}>Show Advanced Information</button>
    }

    return <div className='advancedInformation'> 
    <div id="container">
    {output}
    </div>
    </div>
}

export default AdvancedInformation;