// Exercício 10
let i = 0;
while( i < 6 ){
  nro = Math.floor(Math.random()*100);
  if( (nro < 50 && nro%2 == 1) || (nro >= 50 && nro%2 == 0) ){
    console.log(nro);
    i = i + 1;
  }
}
