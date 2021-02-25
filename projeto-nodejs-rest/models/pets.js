const conexao = require('../infraestrutura/conexao');


class Pet {
    adiciona(pet){
        const query = 'INSERT INTO Pets SET ?'
        conexao.query(query, pet,  erro => {
            if(erro){
                console.log(erro)
                resizeBy.status(400).json(erro)
            }else {
                resizeBy.status(200).json(pet)
            }
        })
    }
}

module.exports = new Pet()