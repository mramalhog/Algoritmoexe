//Exercício10
function fatorial(nro){
  if( nro < 0){
      return NaN
  }
  let total = 1;
    for(let i = 1; i <= nro; i++){
      total = total * i;
    }
  return total;
}

let r = fatorial(5);
console.log("Fatorial:", r);
r = fatorial(2);
console.log("Fatorial:", r);
r = fatorial(-1);
console.log("Fatorial:", r);
r = fatorial(0);
console.log("Fatorial:", r);