import React, { useState } from 'react';
import "./YourAsset.css";

const YourAsset = (props)=> {

    console.log(props.attributes);

    return <div className='yourAsset' id="test">
        <p id="name">{props.name} (id: {props.id})</p>
        <p id="description">{props.description}</p>
        <img src = {props.src} style = {{"width": props.width, "height": props.height}} alt="Test" />
        <table>
            <tbody>
            <tr>
                <th colSpan={2}>Attributes</th>
            </tr>
            { props.attributes.map((data, index) => (
                <tr key={index} id="data">
                    <th>{data["trait_type"]}</th>
                    <th>{data["value"]}</th>
                </tr>
            ))}
            </tbody>
                </table>
    </div>
}

export default YourAsset;

