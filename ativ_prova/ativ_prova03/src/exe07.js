//Exercício07
function longo(a,b){
  if(a.length < b.length){
    return b;
  }
  else{
    return a;
  }
}
let r = longo("Ana","Maria");
console.log("Nome mais longo:", r);
r = longo("Antonio","Pedro");
console.log("Nome mais longo:", r);