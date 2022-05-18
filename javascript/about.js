const shamburger = document.querySelector('.shamburger');
const navlist2 = document.querySelector('#navList2');

shamburger.addEventListener('click', () => {
  console.log('clicked');
  navlist2.classList.toggle('disappears');
});