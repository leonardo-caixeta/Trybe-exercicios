let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addShift(lesson, key, value) {
  lesson2[key] = value;
}
addShift(lesson2, 'turno', 'noite')

// console.log(lesson2);

let objectOneKeys ;

function objectKeys(objectOne) {
  return objectOneKeys = Object.keys(objectOne)
}

// console.log(objectKeys(lesson1));

let lenght ;

function objectLenght(objectTwo) {
  return lenght = Object.keys(objectTwo).length
}

console.log(objectLenght(lesson2));