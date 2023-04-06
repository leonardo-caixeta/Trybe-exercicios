// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

const allPopulation = () => {
  const allPeople = countries.reduce((all, currCountry) =>
  all + currCountry.population,
  0);
  return allPeople;
};

const allArea = () => {
  const countrySize = countries.reduce((all, currCountry) =>
  all + currCountry.area,
  0);
  return countrySize;
};

const biggestName = () => {
  const theBiggest = countries.reduce((biggest, currCountry) =>
  (currCountry.name.length > biggest.name.length)
  ? currCountry : biggest,
  0);
  return theBiggest
};

const countingLetterA = () => {
  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  const splitedNames = names.join('').toLocaleLowerCase().split('')
  const countA = splitedNames.reduce((aAppearence, currLetter) =>
  currLetter === 'a' ? aAppearence += 1 : aAppearence,
  0)
  return countA;
}

const averageGrade = () => {
  const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
  const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
  const nameAndAverage = students.map((student, index) => (
    {
    name: student,
    average: (grades[index].reduce((accValue, currGrade) => accValue + currGrade,
    0) / grades[index].length),
  }
  ));
  return nameAndAverage
};

console.log(averageGrade());
