

export default function AcaiPage () {
    
function calcularAçai (qtdPeq, qtdMed, qtdGra, desc ) {
    let soma = (qtdPeq * 13.50 + qtdMed * 15.00 + qtdGra * 17.50) 
    let totalcomDesc = (soma / 100) * desc
    return soma - totalcomDesc
}
    return (
        <main>
            
        </main>
    )
}