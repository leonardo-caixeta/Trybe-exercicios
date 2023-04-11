const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = (...cars) => {
  const newObject = {
    palio,
    shelbyCobra,
    chiron,
  };
  return newObject;
};

console.log(toObject(palio, shelbyCobra, chiron));
