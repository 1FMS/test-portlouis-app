const Contato = require('../model/contatosModel')

const getContatos = (req, res) => {
    Contato.getContatos((err, contato)=>{
        if(err){
            return res.status(500).json({erro: 'Erro ao buscar contatos'});
        }else{
            return res.status(200).json(contato)
        }
    });
};

const createContato = (req, res) => {
    const {nome, telefone} = req.body;
    if(!nome || !telefone){
        return res.status(400).json({massage:'Nome e telefefone obrigatorios'});
    }

    Contato.createContato({nome, telefone}, (err,newContato) => {
        if(err){
            return res.status(500).json({error: 'erro ao criar usuario'});
        }else{
            return res.status(201).json(newContato)
        }
    })
}

module.exports = {
    createContato,
    getContatos
}