//exe04
function quebrar(nome){
  const v = nome.split("");
    for( let i = 0; i < v.length; i++ ) {
  v[i] = "<div>"+[i]+"</div>";
}
return v;
}
let r = quebrar("Mariana");
console.log("Separado:", r);