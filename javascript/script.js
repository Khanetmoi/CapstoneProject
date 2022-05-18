const more = document.querySelector('#more');
const members = document.querySelector('.members');

let state = 0;

// more
more.addEventListener('click', () => {
  // members.classList.toggle('add');
  if (state === 0) {
    members.style.height = 'auto';
    more.innerText = 'less';
    state += 1;
  } else {
    members.style.height = '65vh';
    more.innerText = 'more';
    state -= 1;
  }
});

// hamburger button

const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('#navList');

hamburger.addEventListener('click', () => {
  navlist.classList.toggle('disappear');
});

// see more programs

const More = document.querySelector('#mores');
const sixth = document.querySelector('.sixth');
const fifth = document.querySelector('.fifth ');

let bs = 1;

More.addEventListener('click', () => {
  sixth.classList.toggle('remove');
  fifth.classList.toggle('remove');
  if (bs === 1) {
    More.innerText = 'Less';
    bs -= 1;
  } else {
    More.innerText = 'more';
    bs += 1;
  }
});

const card = [
  {
    id: 1,
    image_id: 'im1',
    title: 'Jone doe',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 2,
    image_id: 'im2',
    title: 'Jane doe',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 3,
    image_id: 'im3',
    title: 'Jone doe',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 4,
    image_id: 'im4',
    title: 'Jone doe',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 5,
    image_id: 'im5',
    title: 'Jone doe',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 6,
    image_id: 'im6',
    title: 'Jone doe',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
];

const cards = card.map((fuji) => `<div class="member one">
               <div id="${fuji.image_id}"></div>
               <div class="reference">
               <h2>${fuji.title}</h2>
               <h3>${fuji.subtitle}</h3>
               <p> ${fuji.paragraph}</p>
            </div>
           </div>`).join('');

members.innerHTML += cards;