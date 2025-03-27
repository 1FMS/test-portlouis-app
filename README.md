# Lista de Contatos

Este projeto é uma API simples para gerenciar uma lista de contatos, desenvolvida com Node.js e Express. A aplicação utiliza um banco de dados MySQL para armazenar os contatos e permite operações de criação, leitura, atualização e exclusão (CRUD).

## Tecnologias Utilizadas
- Node.js
- Express
- MySQL

## Pré-requisitos
Antes de executar a aplicação, você precisará:
- [Node.js](https://nodejs.org/) instalado no seu computador
- [MySQL](https://www.mysql.com/) instalado e configurado (caso não tenha, siga as instruções abaixo)

### Instalação do MySQL
Se você não tem o MySQL instalado, siga estes passos:
1. Baixe o MySQL Community Server [aqui](https://dev.mysql.com/downloads/mysql/).
2. Instale o MySQL seguindo as instruções do instalador.
3. Durante a instalação, defina uma senha para o usuário `root` e lembre-se dela.
4. Após a instalação, abra o MySQL Workbench ou o terminal e crie o banco de dados utilizando o comando que aparecerá abaixo.

## Instalação do Projeto
1. Baixe este projeto clicando em "Code" > "Download ZIP" ou usando o comando:
   ```sh
   git clone https://github.com/1FMS/test-portlouis-app.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd backend
   ```
3. Instale todas as dependências necessárias de uma vez:
   ```sh
   npm install express mysql2 dotenv cors
   ```

## Configuração
1. Crie um arquivo `.env` com as configurações do banco de dados, seguindo o exemplo abaixo:
   ```sh
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=sua_senha
   DB_NAME=contatos
   ```
2. Caso prefira, use o arquivo `.env-example` como modelo e preencha com suas credenciais.
3. **Importante:** No arquivo `config/db.js`, altere o caminho do `.env` para refletir o seu ambiente. Atualize a linha abaixo:
   ```js
   require('dotenv').config({ path: 'C:\\Users\\SEU_USUARIO\\SEU_CAMINHO\\backend\\.env' });
   ```

## Banco de Dados
Crie o banco de dados e a tabela executando os seguintes comandos no MySQL:
```sql
CREATE DATABASE contatos;

USE contatos;

CREATE TABLE contatos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(50) DEFAULT NULL,
  telefone VARCHAR(20) DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
```

## Execução
Para iniciar o servidor, execute na pasta backend:
```sh
node server.js
```
A API estará rodando em `http://localhost:3000`.

Para abrir o frontend, basta abrir o arquivo `index.html` no navegador após iniciar o servidor.

## Endpoints da API
A API possui as seguintes rotas:

### Listar todos os contatos
```
GET /contatos
```
Retorna a lista de contatos cadastrados.

### Criar um novo contato
```
POST /contatos
```
Body esperado (JSON):
```json
{
  "nome": "João Silva",
  "telefone": "(99) 99999-9999"
}
```

### Atualizar um contato
```
PATCH /contatos/:id
```
Atualiza os dados de um contato pelo ID.

### Deletar um contato
```
DELETE /contatos/:id
```
Remove um contato pelo ID.

### Buscar um contato por nome
```
GET /contatos/search?nome=João
```
Pesquisa contatos pelo nome.
