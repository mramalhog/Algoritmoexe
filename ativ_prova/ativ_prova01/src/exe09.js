// Exercício 9
let i = 0;
while( i < 6 ){
  nro = Math.floor(Math.random()*100);
  if( nro < 20 || nro > 80 ){
    console.log(nro);
    i = i + 1;
  }
}