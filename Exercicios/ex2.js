//2. Maior Palavra
//Peça uma frase e crie uma função que retorna a maior palavra
//  da frase usando split() e reduce().

function maiorPalavra(frase) {
  const palavras = frase.split(' ');
  return palavras.reduce((maior, atual) => atual.length > maior.length ? atual : maior, '');
}
console.log(maiorPalavra('Aprender a palavra paralelepipedo é divertido'));
