//9. Verificar Palíndromo com Funções
//Crie uma função que verifica se uma palavra
//é palíndroma usando split(), reverse() e join().

function verificarPalavraPalindromo(palavra) {
    const palavraReversa = palavra.split('').reverse().join('');
    return palavra === palavraReversa;
}
console.log(verificarPalavraPalindromo('level'));
console.log(verificarPalavraPalindromo('licao'));
console.log(verificarPalavraPalindromo('maca'));
console.log(verificarPalavraPalindromo('Renner'));
