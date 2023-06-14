// Exercício 7	
let entrada = "19,11,5,10,20";
let nros = entrada.split(",");
let soma = 0;
for(let i = 0; i < nros.length; i++ ){
  soma += parseInt(nros[i]);
}
console.log("Somatório:", soma);
