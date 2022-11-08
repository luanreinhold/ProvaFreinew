const readLine = require('prompt-sync')();


function radomNumber(){
    let numeroAleatorio = parseInt(Math.random() * 1000)
    let msg = '';
    let usuario = 0 

    for (let tentativa = 1 ; tentativa <= 10 || msg === 'acertou'; tentativa++){
        console.log('Digite um numero 4' + 'tentativa ' + tentativa)
        usuario = Number(readLine())
        if(usuario === numeroAleatorio){
            msg = 'acertou'
            console.log(msg)
            break;
        }
        else if(usuario > numeroAleatorio){
            msg = 'menor'
            console.log(msg)
        }else if (usuario < numeroAleatorio){
            msg = 'maior'
            console.log(msg)
        }else{
            msg = 'acabou as tentativas'
            console.log(msg)
        }
    }
    

    return msg
       
}


radomNumber()