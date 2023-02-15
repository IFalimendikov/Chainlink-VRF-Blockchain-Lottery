const { ethers, BigNumber } = require("hardhat");

const LINK_TOKEN = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";
const VRF_COORDINATOR = "0x2bce784e69d2Ff36c71edcB9F88358dB0DfB55b4";
const KEY_HASH =
  "0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a";
const FEE = ethers.utils.parseEther("0.1");
module.exports = { LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE };