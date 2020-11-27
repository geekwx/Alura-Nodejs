class NegociacaoService {

    obterNegociacoesDaSemana(cb) {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');

        xhr.onreadystatechange = () => {
            /*
            Estado das requisições. 
            0: Requisição ainda não iniciada
            1: conexão com o servidor estabelecida
            2: requisicao recebida
            3: processando requisição
            4: requisição concluida e a resposta pronta 
            */

            if(xhr.readyState == 4){
                if(xhr.status == 200){

                    console.log('Obtendo as negociaões do servidor.');
                  cb(null,   JSON.parse(xhr.responseText)
                    .map( objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                }else {
                    console.log(xhr.responseText);
                    cb('Não foi possivel obter a negociação', null);
                
                }
            }
        }
        xhr.send();
    }
}