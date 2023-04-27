import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', async event => {
  event.preventDefault();
  const delay = +event.target.elements.delay.value;
  const step = +event.target.elements.step.value;
  const amount = +event.target.elements.amount.value;

  for (let i = 1; i <= amount; i++) {
    const position = i;
    const promiseDelay = delay + step * (i - 1);
    try {
      const { position, delay } = await createPromise(position, promiseDelay);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } catch ({ position, delay }) {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }
});
