// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let index = 0; index < numbers.length; index += 1){
//   console.log(numbers[index])
// }

// ----------------------------------------------------

// let result = 0 ;
// let avarage = 0 ;

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

// let higherNumber = numbers[0] ;

// for(index = 1; index < numbers.length; index += 1){
//   if (numbers[index] > higherNumber){
//     higherNumber = numbers[index]
//   }
// }

// console.log(higherNumber);

// ----------------------------------------------------

// let oddNumbers = [0] ;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 != 0 ) {
//     oddNumbers.push(numbers[index]) ;
//   } else if (oddNumbers === 0) {
//      console.log('Nenhum numero ímpar encontrado');
//   } {

//   }
// }
// console.log(oddNumbers);

// ----------------------------------------------------

// let smallestNumber = numbers[0] ;

// for (let index = 0; index < numbers.length; index += 1) {
//   let currentNumber = numbers[index];
//   if (smallestNumber > currentNumber) {
//     smallestNumber = currentNumber;
//   }else{

//   }

// }

// console.log(smallestNumber)

// ----------------------------------------------------

// let list = [];

// for (let index = 1; index < 26; index += 1) {
//   list.push(index)
// }

// console.log(list);

// ----------------------------------------------------

// let list = [];
// let res = [];

// for (let index = 1; index < 26; index += 1) {
//   list.push(index)
//   res = index /2
//   console.log(res);
// }
//Minha solução
// ----------------------------------------------------

// let list = [];

// for (let index = 1; index < 26; index += 1) {
//   list.push(index)
// }

// console.log(list);

// for (let index = 0; index < list.length; index += 1) {
//   console.log(list[index] / 2);
// }
// Solução do gabarito

// ----------------------------------------------------

// let number = 10 ;
// let fatorial = 1 ;

// for (let index = number; index >= 1; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

// ----------------------------------------------------

// let word = 'tryber';
// let letter = '';

// for (let index = word.length - 1; index >= 0; index -= 1) {
//   letter += word[index] ;
// }
// console.log(letter);

// ----------------------------------------------------

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let smallestWord = array[0];
// let biggestWord = array[0];


// for (let index = 0; index < array.length; index += 1){
//   if (array[index].length < smallestWord.length){
//     smallestWord = array[index]
//   }
// }
// for (let index = 0; index < array.length; index++) {
//   if (array[index].length > biggestWord.length) {
//     biggestWord = array[index]
//   }

// }
// console.log(smallestWord);
// console.log(biggestWord)

// ----------------------------------------------------
//Bubble Sort (nem tentei)

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    }
  }
}
