const express = require('express');
const router = express.Router();
const contatosController = require('../controller/contatosController');


router.get('/contatos', contatosController.getContatos);
router.post('/contatos', contatosController.createContato);

module.exports = router;
