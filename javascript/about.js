const shamburger = document.querySelector('.shamburger');
const navlist2 = document.querySelector('#navList2');

shamburger.addEventListener('click', () => {
  navlist2.classList.toggle('disappears');
});