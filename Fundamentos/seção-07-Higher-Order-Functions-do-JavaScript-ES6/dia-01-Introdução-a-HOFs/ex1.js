const registerEmployee = (nameOfEmployee) => {
  const email = nameOfEmployee.toLowerCase().replace(' ', '_');
  return {fullName:nameOfEmployee, email:`${email}@trybe.com`};
};

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};


console.log(newEmployees(registerEmployee));