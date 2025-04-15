//12. Sorteador de Nomes
//Peça uma lista de nomes separados por vírgula e 
// sorteie um aleatoriamente usando split() e Math.random().

function SorteadorDeNomes(nomes) {
    const listarNomes = nomes.split(', ');
    const indiceAleatorio = Math.floor(Math.random() * listaNomes.length);
    return listarNomes[indiceAleatorio];
  }
  console.log(SorteadorDeNomes('Rubi, Joaquim, Miguel, Isaias, Miriam'));