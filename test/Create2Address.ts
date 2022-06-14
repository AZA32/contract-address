import {expect} from 'chai';
import {ethers, waffle} from 'hardhat'
import {Create2Address} from '../typechain-types/Create2Address'

describe("Create", function () {
    let contract: Create2Address;

    it("Should return the new greeting once it's changed", async function () {

        const Create2Address = await ethers.getContractFactory("Create2Address");
        contract = (await Create2Address.deploy()) as Create2Address;
        await contract.deployed();

        const computeAddress = await contract.computeAddress(1);
        console.log("computeAddress:", computeAddress);

        let tx = await contract.create(1);
        let contractReceipt = await tx.wait();
        const event = contractReceipt.events?.find(event => event.event === 'created');
        expect(computeAddress).to.equal(event?.args?.[0]);
    });
})