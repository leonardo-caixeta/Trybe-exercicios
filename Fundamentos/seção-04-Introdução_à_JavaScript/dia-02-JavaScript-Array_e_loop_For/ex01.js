let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index])
// }

// ----------------------------------------------------

// let result = 0 ;
// let avarage = 0

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
//   avarage = result / index;
//   }
//   if(avarage > 20){
//     console.log('Valor maior que 20')
//   } else {
//     console.log('Valor menor que 20');
//   }
// console.log('resultado ' + result + ' média ' +  avarage )

// ----------------------------------------------------

let higherNumber = numbers[0]

for(index = 1; index < numbers.length; index += 1){
  if (numbers[index] > higherNumber){
    higherNumber = numbers[index]
  }
}

console.log(higherNumber);