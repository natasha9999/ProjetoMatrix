function somarInteiros(num){
  if(num === 0)
    return 0;
  else return (num + somarInteiros(num-1));
}
console.log(somarInteiros(5));


function somarImpares(num){
  if((num !== 0) && (num%2 !== 0))
    return ((2*num-1) + somarImpares(num-1));
  else if(num !== 0)
     return 0;
}
console.log(somarImpares(5));


function multiplicarInteiros(num){
  if(num === 0)
    return 1;
  else
    return (num * multiplicarInteiros(num-1));
}
console.log(multiplicarInteiros(5));