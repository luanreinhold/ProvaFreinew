function provaCafe (estudantes, litrosCafe, MiliCafe ) {
    let cafeNecessario = Math.ceil((estudantes * MiliCafe) / 1000);
  
    
    console.log(cafeNecessario)
    let resposta;
    if (litrosCafe < cafeNecessario ) {
        resposta = litrosCafe * 2
    } else {
        resposta = litrosCafe
    }
    return resposta + " " + "litros" 
}

let r = provaCafe(2, 1, 2000)
console.log(r)