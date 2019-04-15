
const sixNumbers = [];

function addSixNumbers(arr){
  let lista = [];

  for(let i = 0; i<=100; i++){
    lista.push(i);
  }
  
  for(let j=0; j<=6; j++){
    arr.push(lista[Math.floor(Math.random() * lista.length)]);
  }
  
  return arr;
  
}

addSixNumbers(sixNumbers);
console.log(sixNumbers);
