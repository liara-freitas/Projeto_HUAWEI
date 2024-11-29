const express = require("express");
const app = express();

app.use(express.json());


app.listen(4000, function () {
  console.log("Servidor 4000 Online!");
});

