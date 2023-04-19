const { expect } = require("chai");

describe("Test", function () {
  it("Should return hello", async function () {
    const [owner] = await ethers.getSigners();

    const Contract = await ethers.getContractFactory("ProjectDuo");

    const contract = await Contract.deploy(owner.address);

    const rn = await contract.random();
    console.log(rn);
    
  });
});