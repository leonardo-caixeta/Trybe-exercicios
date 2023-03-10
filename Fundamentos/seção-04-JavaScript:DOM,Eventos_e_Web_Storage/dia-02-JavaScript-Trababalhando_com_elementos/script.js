const body = document.getElementById('body');

const h1 = document.createElement('h1');
h1.innerHTML = 'TrybeTrip - Agência de Viagens';
h1.className  = 'title'

  body.appendChild(h1);

const mainContent = document.createElement('main');
mainContent.className = 'main-content';

  body.appendChild(mainContent);

const section = document.createElement('section');
section.className = 'center-content';

  mainContent.appendChild(section)

const paragraph = document.createElement('p');
paragraph.innerHTML = 'Compre suas viagens mais barato aqui, na TrybeTrip!';

  section.appendChild(paragraph)

const sectionTwo = document.createElement('section');
sectionTwo.className = 'left-content';

  mainContent.appendChild(sectionTwo)

const sectionThree = document.createElement('section');
sectionThree.className = 'right-content';

  mainContent.appendChild(sectionThree)

const img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';

  sectionTwo.appendChild(img)

const unorderList = document.createElement('ul');

  sectionThree.appendChild(unorderList);

  const numbers = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']
  for (let values in numbers){
  const listItem = document.createElement('li')
  listItem.innerText = numbers[values];
  unorderList.appendChild(listItem);
}

for (let index = 0 ; index < 3 ; index += 1){
  const h3 = document.createElement('h3');
  h3.innerHTML = `Show ${index + 1}`;
  mainContent.appendChild(h3);
  h3.className = 'description';
}

mainContent.removeChild(sectionTwo);

const ul = document.getElementsByTagName('ul')[0];
const li = document.getElementsByTagName('li');
const liLength = li.length;

if (liLength >= 2) {
  ul.removeChild(li[liLength - 1]);
  ul.removeChild(li[liLength - 2]);
}