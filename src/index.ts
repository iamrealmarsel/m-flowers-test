import './styles/main.scss';

console.log('Hello, Modesto Flowers !');

const burgerElement = document.querySelector('.js-burger') as HTMLElement;
const menuElement = document.querySelector('.js-menu') as HTMLElement;
const overlayElement = document.querySelector('.js-overlay') as HTMLElement;
const form1Element = document.querySelector('.js-form-1') as HTMLElement;
const form2Element = document.querySelector('.js-form-2') as HTMLElement;
const nextElement = form1Element.querySelector('.js-form-next') as HTMLElement;
const backElement = form2Element.querySelector('.js-form-back') as HTMLElement;

nextElement.addEventListener('click', () => {
  form1Element.style.display = 'none';
  form2Element.style.display = 'block';
});

backElement.addEventListener('click', () => {
  form1Element.style.display = 'block';
  form2Element.style.display = 'none';
});

burgerElement.addEventListener('click', () => {
  menuElement.classList.add('_active');
  overlayElement.classList.add('_active');
});

overlayElement.addEventListener('click', () => {
  menuElement.classList.remove('_active');
  overlayElement.classList.remove('_active');
});
