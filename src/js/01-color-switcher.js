function changeBgColor() {
  let intervalId;
  document.querySelector('[data-start]').addEventListener('click', () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      document.querySelector('[data-start]').disabled = true;
    }
  });

  document.querySelector('[data-stop]').addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    document.querySelector('[data-start]').disabled = false;
  });
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

changeBgColor();
