# Projeto HUAWEI API

Este projeto foi desenvolvido para integrar com o **HEALTH KIT da Huawei**, simulando uma API do Huawei Health Kit, salvando os dados no MongoDB e disponibilizando esses dados para outros desenvolvedores consumirem através de requisições **GET**. O projeto é organizado em três pastas principais:

- **API_HUAWEI**: Faz requisições à **API_Simulação** e salva os dados no MongoDB.
- **API_Simulação**: Simula a API do Huawei Health Kit e retorna dados fictícios.
- **API_Mongo_Consumo**: Disponibiliza os dados salvos no MongoDB através de endpoints do tipo GET para outros desenvolvedores.

---

## Estrutura do Projeto

### 1. **API_HUAWEI**
Responsável por consumir os dados da **API_Simulação** e armazená-los no banco de dados MongoDB.

- **Funcionalidade principal**: 
  - Realiza requisições à **API_Simulação**.
  - Salva os dados recebidos no MongoDB em uma coleção específica.

- **Tecnologias utilizadas**:
  - Node.js
  - Express.js
  - Mongoose (para integração com o MongoDB)

---

### 2. **API_Simulação**
Simula o comportamento da API do **Huawei Health Kit**, retornando dados fictícios relacionados à saúde.

- **Funcionalidade principal**:
  - Fornece dados de exemplo, como registros de ECG, frequência cardíaca, entre outros.

- **Tecnologias utilizadas**:
  - Node.js
  - Express.js

---

### 3. **API_Mongo_Consumo**
Exibe os dados salvos no MongoDB para outros desenvolvedores através de requisições **GET**.

- **Funcionalidade principal**:
  - Disponibiliza endpoints para acessar os dados salvos no MongoDB pela **API_HUAWEI**.

- **Tecnologias utilizadas**:
  - Node.js
  - Express.js
  - Mongoose

---

## Pré-requisitos

1. **Node.js**: Certifique-se de ter o Node.js instalado.
2. **MongoDB**: Configure e execute um servidor MongoDB local ou em nuvem.

---

## Configuração e Execução

### Passo 1: Clonar o repositório

```bash
git clone https://github.com/seu-usuario/projeto-huawei-api.git
cd projeto-huawei-api
```

### Passo 2: Instalar dependências

Para cada pasta do projeto (**API_HUAWEI**, **API_Simulação**, e **API_Mongo_Consumo**), execute:

```bash
cd <nome-da-pasta>
npm install
```

### Passo 3: Configurar as variáveis de ambiente

Crie um arquivo `.env` em cada pasta com as configurações apropriadas. Exemplo para a conexão MongoDB:

```env
MONGO_URI=mongodb://localhost:27017/huawei_health
PORT=3001
```

## Endpoints

### **API_Simulação**
- **GET api/healthkit/v2/dataCollectors/healthRecords**
  - Retorna dados simulados do Huawei Health Kit.

### **API_Mongo_Consumo**
- **GET /api/api/routesHealth/**
  - Retorna os dados salvos no MongoDB.

---

## Fluxo do Projeto

1. A **API_Simulação** retorna dados simulados de saúde.
2. A **API_HUAWEI** consome esses dados e os salva no MongoDB.
3. A **API_Mongo_Consumo** disponibiliza os dados salvos para que outros desenvolvedores os acessem via **GET**.

---

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir um _pull request_ ou relatar problemas na seção de _issues_.

---
