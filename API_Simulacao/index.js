const express = require("express");

const app = express();
app.use(express.json()); //Permite usar o JSON


const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3030, function () {
  console.log("Servidor 3030 Online!");
});


