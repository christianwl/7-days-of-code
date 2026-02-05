let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = 10

export function executarPrimeiroDesafio(){
    alert(compararVariaveis(
        {nome: "numeroUm", valor: numeroUm}, 
        {nome: "stringUm", valor: stringUm}, 
    ));

    alert(compararVariaveis(
        {nome: "numeroTrinta", valor: numeroTrinta}, 
        {nome: "stringTrinta", valor: stringTrinta}, 
    ));

    alert(compararVariaveis(
        {nome: "numeroDez", valor: numeroDez}, 
        {nome: "stringDez", valor: stringDez}, 
    ));
}

function compararValores(valor1, valor2){
    return valor1 == valor2;
}

function compararTipos(tipo1, tipo2){
    return tipo1 === tipo2;
}

/**
 * Compara duas variáveis, verificando se elas têm o mesmo valor e se possuem o mesmo tipo.
 * 
 * @param {Object} objeto1 O primeiro objeto contendo o nome e o valor da variável.
 * @param {string} objeto1.nome O nome da primeira variável.
 * @param {any} objeto1.valor O valor da primeira variável.
 * @param {Object} objeto2 O segundo objeto contendo o nome e o valor da variável.
 * @param {string} objeto2.nome O nome da segunda variável.
 * @param {any} objeto2.valor O valor da segunda variável.
 * 
 * @returns {string} A mensagem que descreve a comparação entre as variáveis.
 */
function compararVariaveis(objeto1, objeto2){

    let textoResultado = `Resultado da comparação das variáveis:\n[ ${objeto1.nome} ] e [ ${objeto2.nome} ]\n`;

    let temMesmoValor = compararValores(objeto1.valor, objeto2.valor);

    textoResultado += `\n${temMesmoValor ? "" : "não "}tem o mesmo valor`;

    if(temMesmoValor){
        let temMesmoTipo = compararTipos(objeto1.valor, objeto2.valor);
        textoResultado += temMesmoTipo ? " e mesmo tipo" : ", mas tipos diferentes";
    }

    return textoResultado;
}