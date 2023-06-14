//exe09
function somar(a,b){
  let v = [] //cria um array vazio
  v[0] = a;
  v[1] = b;
  return v;  
}
let a = [5,8,3,4,9,7];
let b = [3,5,9,2,3,4];
let r = somar(a,b);
console.log("Soma:", r);
