const express = require('express');
const router = express.Router();
const contatosController = require('../controller/contatosController');


router.get('/contatos', contatosController.getContatos);
router.post('/contatos', contatosController.createContato);
router.patch('/contatos/:id', contatosController.updateContato);
router.delete('/contatos/:id', contatosController.deleteContato);
router.get('/contatos/search', contatosController.searchContato);

module.exports = router;
