require('dotenv').config({ path: 'C:\\Users\\felip\\OneDrive\\Desktop\\Teste\\backend\\.env' });


const mysql = require('mysql2'); 

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
};

console.log("Conectando ao banco:", dbConfig.database);


const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.log("Erro de conexão:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

module.exports = connection;