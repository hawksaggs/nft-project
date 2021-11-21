const hre = require("hardhat");

async function main() {
  const EmotionalShapes = await hre.ethers.getContractFactory(
    "EmotionalShapes"
  );
  const emotionalShapes = await EmotionalShapes.deploy();

  await emotionalShapes.deployed();

  console.log("EmotionalShapes deployed at: ", emotionalShapes.address);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
