function validaNumero(num){
  if(typeof num === 'number')
    return num;
  else
    return undefined;
}
console.log(validaNumero(5));

function somarInteiros(num){
  var i; var soma=0;
  if(validaNumero(num)){
     for(i=0;i<=num;i++){
        soma = soma + i;
      }
      return soma;
   }
}
console.log(somarInteiros(5));

function somarImpares(num){
  var i; var soma=0;
  if(validaNumero(num)){
    for(i=1;i<=num;i=i+2){
       soma = soma + i;
     }
     return soma;
   }
}
console.log(somarImpares(5));


