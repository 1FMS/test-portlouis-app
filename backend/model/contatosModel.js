const connection = require('../config/db')

const getContatos = (callback) =>{
    const query = 'SELECT * FROM contatos';
    connection.query(query,(err,result)=>{
        if(err){
            console.error('erro na consulta:',err)
            return callback(err,null)
        }
        else{
            callback(null,result)
        }
    });
};

const searchContato = (ContatoData, callback) => {
    const query = 'SELECT * FROM contatos WHERE nome LIKE ?'
    connection.query(query, [`%${ContatoData.nome}%`], (err, result) => {
        if(err){
            console.error('Erro ao buscar contato')
            return callback(err, null)
        }
        callback(null, result)
    })
}


const createContato = (ContatoData, callback) =>{
    const query = 'INSERT INTO contatos(nome, telefone) VALUES(?, ?)';
    connection.query(query,[ContatoData.nome, ContatoData.telefone],(err, result)=>{
        if(err){
            console.error('Erro ao criar contato:', err);
            return callback(err, null);
        }
        else{
            callback(null,{id: result.insertId, ...ContatoData})
        };
    });
};

const updateContato = (ContatoID, ContatoData, callback) => {
    const query = 'UPDATE contatos SET nome=?, telefone=? WHERE id=?';
    connection.query(query,[ContatoData.nome, ContatoData.telefone, ContatoID], (err, result)=>{
        if(err){
            console.error('Erro ao atualizar o usuario')
            return callback(err, null)
        }

        if(result.affectedRows === 0){
            return callback(null,null);
        }

        callback(null, {id:ContatoID,...ContatoData});
    });
};

const deleteContato = (ContatoID, callback) => {
    const query = 'DELETE FROM contatos WHERE id=?'
    connection.query(query,[ContatoID],(err,result)=>{
        if(err){
            console.error('Erro ao excluir contato', err);
            return callback(err, null)
        }

        if(result.affectedRows === 0){
            return callback(null,null);
        }

        callback(null, {message: 'Contato deletado'})
    })
}

module.exports = {
    getContatos,
    createContato,
    updateContato,
    deleteContato,
    searchContato
};