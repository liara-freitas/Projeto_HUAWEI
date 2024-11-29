const express = require("express")
const axios = require("axios");
const { Health: HealthModel } = require("./models/Health");


const app = express()

app.use(express.json())

//Conexão DB

const conn = require("./db/conn")

conn();



//Rotas

const routes = require ("./routes/router")

app.use("/api", routes)


app.listen (4000,function(){
  console.log("Servidor 4000 Online!")
})

app.listen(3000, function () {
  console.log("Servidor 3000 Online!");
});

//

// Função para buscar e salvar dados no MongoDB
const fetchAndSaveHealthRecords = async () => {
  try {
    // Configurações da API
    const url =
      "http://localhost:4000/api/healthkit/v2/dataCollectors/healthRecords";
    const headers = {
      Authorization: "Bearer seu-token", // Atualize com o token real
      "x-client-id": "seu-client-id",
      "x-version": "1.0",
      "x-caller-trace-id": "seu-trace-id",
    };

    // Faz a requisição GET
    const response = await axios.get(url, { headers });

    if (response.data && response.data.healthRecords) {
      // Salva os registros no MongoDB
      const healthRecords = new HealthModel(response.data);
      await healthRecords.save();

      console.log("Dados salvos no MongoDB com sucesso!");
    } else {
      console.warn("Nenhum dado recebido da API.");
    }
  } catch (error) {
    console.error("Erro ao buscar ou salvar os registros:", error.message);
  }
};

// Intervalo de 5 minutos (5 * 60 * 1000 ms)
const intervalTime = 1 * 60 * 1000;

// Executa imediatamente e depois a cada 5 minutos
fetchAndSaveHealthRecords();
setInterval(fetchAndSaveHealthRecords, intervalTime);
