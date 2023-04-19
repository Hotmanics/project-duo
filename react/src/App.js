import React, {useState, useEffect} from 'react';
import "./App.css";
import ConnectWallet from "./Components/ConnectWallet/ConnectWallet";
import Logger from "./Components/Logger/Logger";
import LoggedInSection from './Components/LoggedInSection/LoggedInSection';

function App() {

  useEffect(() => {
    document.title = "Project Duo"
    }, []);

  const [connectedWalletInfo, setConnectedWalletInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (info)=> {
    setConnectedWalletInfo(info);

    setLoginComponents(
      info.provider === undefined ?
        <div></div> : 
        <LoggedInSection 
          onBoastMessage={handleLogger} 
          connectedWalletInfo={info}
        ></LoggedInSection>
        );
  }

  const handleLogger = (message)=> {
    setMessage(message);
  }

  const [loginComponents, setLoginComponents] = useState('');

  let output = <div>
      <div id="test">
        <ConnectWallet onBoastMessage={handleLogger} onWalletConnected={handleLogin}></ConnectWallet>
      </div>
      <div id="test">  
        <Logger boastMessage={message} connectedWalletInfo={connectedWalletInfo}></Logger>
      </div>
  </div>

  return (
    <div className="App">
        { output }
        { loginComponents }
    </div>
  );
}

export default App;