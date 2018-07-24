function somarInteiros(num){
  var i; var soma=0;
  if(typeof num === 'number'){
      for(i=0;i<=num;i++){   
    
      soma = soma + i;
      }
    return soma;
      
    }
    else{
      return undefined;
    }
      

}
console.log(somarInteiros(5));