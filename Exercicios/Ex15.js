//15. Verificação de Email Simples
//Crie uma função que verifica se um texto contém "@" e ".",
// retornando se é um e-mail válido ou inválido. Use includes() e indexOf().

function verificacao (email){
    return email.includes('@') &&  email.includes('.');
}
console.log(verificacao("emailverificado@email.com"));
console.log(verificacao("emailfalso@gmailcom"));