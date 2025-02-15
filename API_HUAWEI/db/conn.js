
require("dotenv").config();

const mongoose = require ("mongoose")


async function main () {
  try {

    mongoose.set("strictQuery", true)
    await mongoose.connect(process.env.DATABASE_URL);

  console.log ("Conectado ao banco")    
  } catch (error) {
    console.log (`Erro:${error}`)
  }
}

module.exports = main