// function provaCafe (estudantes, litrosCafe, MiliCafe ) {
//     let cafeNecessario = Math.ceil((estudantes * MiliCafe) / 1000);
  
    
//     console.log(cafeNecessario)
//     let resposta;
//     if (litrosCafe < cafeNecessario ) {
//         resposta = litrosCafe * 2
//     } else {
//         resposta = litrosCafe
//     }
//     return resposta + " " + "litros" 
// }

// let r = provaCafe(2, 1, 2000)
// console.log(r)

function jokenpo (JogadorUm, JogadorDois) {
    let resultado = ''
    if(JogadorUm === 'pedra' && JogadorDois === 'pedra' || JogadorUm === 'tesoura' && JogadorDois === 'tesoura' || JogadorUm === 'papel' && JogadorDois === 'papel') {
        resultado = 'empate'
    }

    if(JogadorUm === 'papel' && JogadorDois === 'pedra' || JogadorUm === 'pedra' && JogadorDois === 'tesoura' || JogadorUm === 'tesoura' && JogadorDois === 'papel') {
        resultado = 'Jogador um ganhou!'
    } 
    else {
        resultado = 'Jogador dois ganhou!'
    }
    return resultado;
}

let a = jokenpo('tesoura', 'papel')
console.log(a)