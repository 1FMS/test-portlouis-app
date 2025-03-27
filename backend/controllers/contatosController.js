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

const searchContato = (req, res) => {
    const nome = req.query.nome;
    
    if(!nome){
        return res.status(400).json({message:'Nome obrigatório'});
    }

    
    Contato.searchContato({ nome }, (err, searchContato) => {
        if(err){
            return res.status(500).json({error:'Erro ao buscar contato'});
        }

        if(!searchContato || searchContato.length === 0){
            return res.status(200).json([]);
        }

        res.status(200).json(searchContato);
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
    });
};

const updateContato = (req, res) => {
    const ContatoID = req.params.id;
    const {nome, telefone} = req.body;
    if(!nome || !telefone){
        return res.status(400).json({massage:'Nome e telefefone obrigatorios'});
    }

    Contato.updateContato(ContatoID,{nome, telefone}, (err, updateContato) =>{
        if(err){
            return res.status(500).json({error:'error ao atualizar'})
        }

        if(!updateContato){
            return res.status(404).json({message:'usuario nao encontrado'})
        }

        res.status(200).json(updateContato)
    });
};

const deleteContato = (req, res) => {
    const ContatoID = req.params.id;

    Contato.deleteContato(ContatoID,(err, result) =>{
        if(err){
            return res.status(500).json({error:'error ao deletar'})
        }

        if(!result){
            return res.status(404).json({message: 'contato nao encontrado'});
        }

        res.status(204).json(result);
    });
};


module.exports = {

    createContato,
    getContatos,
    updateContato,
    deleteContato,
    searchContato

}