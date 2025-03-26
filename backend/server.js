const express = require('express');
const contatosRoutes = require('./routes/contatosRoutes');

const app = express();
const port = 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/api', contatosRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});