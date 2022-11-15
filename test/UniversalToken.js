const { expect } = require('chai');

describe('Token contract', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    const [owner, controller] = await ethers.getSigners();

    const partition1_short =
      '7265736572766564000000000000000000000000000000000000000000000000'; // reserved in hex
    const partition2_short =
      '6973737565640000000000000000000000000000000000000000000000000000'; // issued in hex
    const partition3_short =
      '6c6f636b65640000000000000000000000000000000000000000000000000000'; // locked in hex

    const partition1 = '0x'.concat(partition1_short);
    const partition2 = '0x'.concat(partition2_short);
    const partition3 = '0x'.concat(partition3_short);

    const partitions = [partition1, partition2, partition3];

    const Token = await ethers.getContractFactory('ERC1400');

    const universalToken = await Token.deploy(
      'ERC1400Token',
      'DAU',
      1,
      [controller.address],
      partitions,
      { gasLimit: 4100000 }
    );

    // console.log(universalToken.address);

    // const ownerBalance = await universalToken.balanceOf(owner.address);
    // expect(await universalToken.totalSupply()).to.equal(ownerBalance);
  });
});
