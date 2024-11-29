const axios = require("axios");
const express = require("express");

const { Health: HealthModel } = require("../models/Health")

// Função para buscar e salvar dados no MongoDB
const fetchAndSaveHealthRecords = async () => {
  try {
    // Configurações da API
    const url =
      "http://localhost:3030/api/healthkit/v2/dataCollectors/healthRecords";
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
setInterval(fetchAndSaveHealthRecords, intervalTime);

module.exports = fetchAndSaveHealthRecords;
