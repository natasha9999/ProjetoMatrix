function somarImpares(num){
  var i; var soma=0;
  if(typeof num === 'number'){
     for(i=1;i<=num;i=i+2){
        soma = soma + i;
     }
     return soma;
  }
  else{
     return undefined;
  }

}
console.log(soma(5));