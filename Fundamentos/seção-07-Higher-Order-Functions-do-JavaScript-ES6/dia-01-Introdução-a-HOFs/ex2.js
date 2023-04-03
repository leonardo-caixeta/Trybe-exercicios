const numberChecked = (myNumber, loteryNumber) => myNumber === loteryNumber;

const lotery = (numberOfLuck, callback) => {
  const randomNumber = Math.round(Math.random() * 5)
  return callback(numberOfLuck, randomNumber) ? 'won' : 'loss';
};

console.log(lotery(3, numberChecked));