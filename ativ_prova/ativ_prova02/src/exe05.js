// Exercício 5
let placa = prompt("Entre com a placa:");
for(let i = 0; i < placa.length; i++ ){
  codigo = placa.charCodeAt(i);
  if( codigo >= 48 && codigo <= 57 ){
    console.log(placa[i], codigo);
  }
}