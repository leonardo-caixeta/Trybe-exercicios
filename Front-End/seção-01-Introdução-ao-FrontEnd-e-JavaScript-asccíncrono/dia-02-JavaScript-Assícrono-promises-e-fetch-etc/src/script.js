
const cardImg = document.getElementById('img');
const text = document.getElementById('text');
const card = document.getElementById('card');
const bttn = document.getElementById('sort')


bttn.addEventListener('click', () => {
  const characterId = Math.round(Math.random() * 731);
  const access = `https://www.superheroapi.com/api.php/3530518913896819/${characterId}`

  fetch(access)
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        const { name, image } = data;
        const { url } = image;
        cardImg.src = url;
        text.innerText = name;
      }, 1000)
      throw ('Algo inesperado aconteceu')

  })
  .catch((error) => error.message)
})
