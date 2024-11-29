require("dotenv").config();

const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(DATABASE_URL);

    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro:${error}`);
  }
}

module.exports = main;
