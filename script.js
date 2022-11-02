const blocks = document.querySelectorAll('.block');

const getRandomMax = (maxValue) => {
  return  Math.floor(Math.random() * Math.floor(maxValue));
}

const paintRandomColor = (block) => {
  const red = getRandomMax(255);
  const green = getRandomMax(255);
  const blue = getRandomMax(255);

  const color = 'rgb(' + red + ',' + green + ',' + blue + ')';

  block.style.backgroundColor = color;
  block.textContent = color;
}

blocks.forEach((block) => paintRandomColor(block));
