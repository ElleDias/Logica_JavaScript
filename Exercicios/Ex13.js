//13. Filtrar Palavras por Tamanho
//Crie uma função que recebe um array de palavras e retorna 
// apenas as que têm mais de 5 letras, usando filter().

function filtrarPalavras(palavras) {
    return palavras.filter(palavra => palavra.length > 5);
  }
  console.log(filtrarPalavras(['lontra', 'karpa', 'polvo', 'ornintorrinco'])); 
  