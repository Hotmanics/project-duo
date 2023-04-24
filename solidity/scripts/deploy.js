// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require('hardhat')

async function main() {

  // const contractName = "ProjectDuo";
  // const Contract = await ethers.getContractFactory(contractName);
  // const contract = await Contract.deploy("0xB2b5841DBeF766d4b521221732F9B618fCf34A87");
  
  // console.log(`${contractName} is being deployed...`);
  // console.log(`Transaction hash: ${contract.deployTransaction.hash}`);

  // let tx = await contract.deployed();
  
  // console.log(`Gas Price: ${ethers.utils.formatUnits(contract.deployTransaction.gasPrice.toNumber(), 'gwei')} gwei`)
  // console.log(`Gas Limit: ${contract.deployTransaction.gasLimit.toNumber()}`)
  
  // console.log(`Deployed ${contractName} to: ${contract.address}`);

  // await deploy("ProjectDuo", "0xB2b5841DBeF766d4b521221732F9B618fCf34A87");
  await deploy("SingleRecipientPaymaster", "0xA9FA66ae55044e40840fa2381b78Df0D17A8fe46");

}

async function deploy(name, ...params) {
  const contractName = name;
  const Contract = await ethers.getContractFactory(contractName);
  const contract = await Contract.deploy(...params);
  
  console.log(`${contractName} is being deployed...`);
  console.log(`Transaction hash: ${contract.deployTransaction.hash}`);

  let tx = await contract.deployed();
  
  console.log(`Gas Price: ${ethers.utils.formatUnits(contract.deployTransaction.gasPrice.toNumber(), 'gwei')} gwei`)
  console.log(`Gas Limit: ${contract.deployTransaction.gasLimit.toNumber()}`)
  
  console.log(`Deployed ${contractName} to: ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
