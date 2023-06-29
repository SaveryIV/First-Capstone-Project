const $body = document.querySelector('body');
const $hamburger = document.querySelector('.hamburger');
const $navList = document.querySelector('.nav-list');
const $closeX = document.querySelector('.close-hamburger');
const $links = document.querySelectorAll('.menu-links');

$hamburger.addEventListener('click', () => {
  $navList.style.display = 'flex';
  $hamburger.style.display = 'none';
  $body.style.overflow = 'hidden';
});

$closeX.addEventListener('click', () => {
  $navList.style.display = 'none';
  $hamburger.style.display = '';
  $body.style.overflow = 'scroll';
});

$links.forEach((i) => {
  i.addEventListener('click', () => {
    $navList.style.display = 'none';
    $hamburger.style.display = '';
    $body.style.overflow = 'scroll';
  });
});