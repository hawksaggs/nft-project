require("dotenv").config();
const ethers = require("ethers");

// get contract artifact (contract interface)
const contract = require("../artifacts/contracts/EmotionalShapes.sol/EmotionalShapes.json");
const contractInterface = contract.abi;

// get provider
const provider = ethers.getDefaultProvider("ropsten", {
  alchemy: process.env.DEV_API_URL,
});

// get wallet
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

const emotionalShapes = new ethers.Contract(
  "0xce23518320fe422f4f392f6c39a14d7e549609fb",
  contractInterface,
  wallet
);

const main = () => {
  emotionalShapes
    .mint(process.env.PUBLIC_KEY)
    .then((transaction) => console.log(transaction))
    .catch((err) => console.log(err));
};

main();