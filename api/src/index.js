
const dotenv = require('dotenv')
const express = require('express');
const cors = require('cors')
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(require('./routes/index'))
app.listen(process.env.PORT || 3333);

console.log("Servidor Rodando na porta 3333")