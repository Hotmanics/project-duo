import React, {useState, useEffect} from 'react';
import "./App.css";
import ConnectWallet from "./Components/ConnectWallet/ConnectWallet";
import Logger from "./Components/Logger/Logger";
import LoggedInSection from './Components/ContractManagement/ContractManagement';
import YourAssets from './Components/YourAssets/YourAssets';
import TheSameRoof from './Components/TheSameRoof/TheSameRoof';
import AdvancedInformation from './Components/AdvancedInformation/AdvancedInformation';
import Lost from './Components/Lost/Lost';
import Lost2 from './Components/Lost2/Lost2';

function App() {

  useEffect(() => {
    document.title = "Project Duo"
    }, []);

  const [connectedWalletInfo, setConnectedWalletInfo] = useState();

  const handleLogin = (info)=> {
    setConnectedWalletInfo(info);
  }

  let extra;
  if (connectedWalletInfo === undefined) {
    extra = <Lost></Lost>;
  }

  let output = <div>
    <div id="margined">
      <ConnectWallet onWalletConnected={handleLogin}></ConnectWallet>
    </div>
    <div id="margined">
      {extra}
    </div>
    <div id="margined">
      <Lost2></Lost2>
    </div>
  </div>

  let loginOutput = connectedWalletInfo === undefined ?
  <div></div> : 
  <div>
    <AdvancedInformation></AdvancedInformation>
    <TheSameRoof
      connectedWalletInfo={connectedWalletInfo}
    >
    </TheSameRoof>
  </div>

  return (
    <div className="app">
      <header>
        { output }
        { loginOutput }
      </header>
    </div>
  );
}

export default App;