import './styles/main.scss';

console.log('hello, world !');

const burger = document.querySelector('.js-burger') as HTMLElement;
const menu = document.querySelector('.js-menu') as HTMLElement;
const overlay = document.querySelector('.js-overlay') as HTMLElement;

burger.addEventListener('click', () => {
  menu.classList.add('_active');
  overlay.classList.add('_active');
});

overlay.addEventListener('click', () => {
  menu.classList.remove('_active');
  overlay.classList.remove('_active');
});
