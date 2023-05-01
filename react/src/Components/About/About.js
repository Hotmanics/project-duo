import React, { useState } from 'react';
import "./About.css";

const About = (props)=> {
    return <div className="about">
            <div>
                <h1>Project Duo</h1>
                <p>A combination of an asset collection, a website to generate and view your assets from the collection, and two video games which utilize the assets in different ways.</p>
            </div>
            <div>
                <h3>Asset Collection</h3>
                <p>
                    The Asset Collection is a very basic implementation of the ERC721 smart contract on the Polygon Mainnet. However, it also implements the ERC2771 Standard. Which allows the user to generate an asset without paying for gas fees by offloading them to the creator of the collection.
                </p>
            </div>
            <div>
                <h3>Websites</h3>
                <p>
                    The website acts as an intermediary between the assets and the user. It aims to make it simple to generate your assets and view them within the browser.
                </p>
            </div>
            <div>
                <h3>Video Games</h3>
                <p>
                    There are two video games which accompany this project. Each one loads in the assets in exactly the same way. However, the utilize them in different ways. They load in the same asset, but the gameplay is completely different for the asset based on which game you are playing!
                </p>
            </div>
        </div>
}

export default About;