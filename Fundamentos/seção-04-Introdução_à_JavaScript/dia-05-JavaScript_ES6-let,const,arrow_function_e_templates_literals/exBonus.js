const name = 'Anna Clara';

const substituaX = (nome) => {
  const phrase = `Tryber ${nome} aqui!`;
  return phrase;
};

// console.log(substituaX(name));

const phraseWithName = substituaX(name);

const minhasSkills = (frase) =>{
  const skills = ['Html', 'CSS', 'JavaScript'];
  let completePhrase= `${frase}
  Minhas três principais habilidades são:
  ${skills}`;
  return completePhrase;
};

console.log(minhasSkills(phraseWithName));