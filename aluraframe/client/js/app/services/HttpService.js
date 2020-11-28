class HttpService {
    get(url) {

        return new Promise((resolve, reject) => {


            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
    
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
                      resolve (JSON.parse(xhr.responseText)); 

                    }else {
                        reject(xhr.responseText);
                    
                    }
                }
            }
            xhr.send();
        })
    }
    post (url, dado){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState ==4){
                    if (xhr.status == 200){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado));
        });
    }
}