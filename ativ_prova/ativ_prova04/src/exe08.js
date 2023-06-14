//exe08
function somar(a,b){
  let v = [] //cria um array vazio
  for( let i = 0; i< a.length; i++ ){
    v[i] = a[i]
    if( a[i] < b[i]){
      v[i] = b[i];
    }
    else{
      v[i] = a[i];
    }
  }
  return v;
}

let a = [5,8,3,4,9,7];
let b = [3,5,9,2,3,4];
let r = somar(a,b);
console.log("Soma:", r);