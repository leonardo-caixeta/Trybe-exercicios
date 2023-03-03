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


function objectKeys(objectOne) {
  let keys = Object.keys(objectOne);
  return keys
}

// console.log(objectKeys(lesson1));


function objectLenght(objectTwo) {
  let lenght = Object.keys(objectTwo).length;
  return lenght
}

// console.log(objectLenght(lesson2));


function objectValues(objectThree) {
  let values = Object.values(objectThree);
  return values
}

// console.log(objectValues(lesson3));

let allLessons = Object.assign({}, {
  lesson1: lesson1,
  lesson2: lesson2,
  lesson3: lesson3
})

// console.log(allLessons)


function totalStudents(allLessonsObj) {
  let lessonsList = Object.values(allLessonsObj)
  let result = 0;
  for (let index = 0; index < lessonsList.length; index+= 1) {
    let currentLesson = lessonsList[index];
    result += currentLesson.numeroEstudantes
  }
  return result
}

// console.log(totalStudents(allLessons));

function getValueByNumber(object, value) {
  return Object.values(object)[value]
}

// console.log(getValueByNumber(lesson1, 0))

function verifyPair(obj, key, value) {
  let exist = false;
  let entries = Object.entries(obj)

  for(let index in entries){
    if(entries[index][0] === key && entries[index][1] === value)
    exist = true;
  }

  return exist
}

console.log(verifyPair(lesson2,'professor','Carlos'));