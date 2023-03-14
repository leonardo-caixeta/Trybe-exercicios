window.onload = () => {
  const paragraph = document.querySelector('.paragraph');
  const setupColors = () => {
    const savedBackground = localStorage.getItem('backgroundColor');
    if (savedBackground !== null){
      paragraph.style.backgroundColor = savedBackground;
    }
    const savedColor = localStorage.getItem('color')
    if (savedColor !== null){
      paragraph.style.color = savedColor;
    }
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedBackground !== null){
      paragraph.style.fontSize = savedFontSize;
    }
  };


  const backgroundColor = () => {
    const backgroundButton = document.getElementById('background-color');
    backgroundButton.addEventListener('click', (event) => {
      const color = event.target.innerText;
      paragraph.style.backgroundColor = color;
      localStorage.setItem('backgroundColor', color)
    });
  };
  const fontColor = () => {
    const colorButton = document.getElementById('font-color');
    colorButton.addEventListener('click', (event) => {
      const color = event.target.innerText;
      paragraph.style.color = color;
      localStorage.setItem('color', color)
    });
  };
  const fontSize = () => {
    const fontButton = document.getElementById('font-size');
    fontButton.addEventListener('click', (event) => {
      const size = event.target.innerText;
      paragraph.style.fontSize = size;
      localStorage.setItem('fontSize', size);
    })
  };

  const calls = () => {
    setupColors();
    backgroundColor();
    fontColor();
    fontSize();
  }
  calls();
};