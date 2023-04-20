import React, { useState } from 'react';
import "./Logger.css";

const Logger = (props)=> {

    let msg = props.boastMessage === '' ? "There is currently no message to display!" : props.boastMessage;
    return <div className='logger'> 
    
    
    <p>
       {msg}
    </p>
        </div>
}

export default Logger;