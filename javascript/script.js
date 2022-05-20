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

const card = [
  {
    id: 1,
    image_id: 'im1',
    image_source: 'https://i.pravatar.cc/150?img=15',
    title: 'shakya muni',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 2,
    image_id: 'im2',
    image_source: 'https://i.pravatar.cc/150?img=33',
    title: 'karma kagyu',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 3,
    image_id: 'im3',
    image_source: 'https://i.pravatar.cc/150?img=8',
    title: 'Drukpa kagyu',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 4,
    image_id: 'im4',
    image_source: 'https://i.pravatar.cc/150?img=11',
    title: 'sangye menla',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 5,
    image_id: 'im5',
    image_source: 'https://i.pravatar.cc/150?img=45',
    title: 'Samantabhadra',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
  {
    id: 6,
    image_id: 'im6',
    image_source: 'https://i.pravatar.cc/150?img=55',
    title: 'Lama Tsonkapa',
    subtitle: 'Director at the university of san fransisco',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas deserunt necessitatibus reprehenderit quod natus,consequuntur assumenda, earum voluptatibus ducimus, molestias dolorum harum? Sit eveniet, quas facere quam temporibus assumenda itaque.',
  },
];

const cards = card.map((fuji) => `<div class="member one">
               <div id="${fuji.image_id}"> <img src="${fuji.image_source}" alt=""></div>
               <div class="reference">
               <h2>${fuji.title}</h2>
               <h3>${fuji.subtitle}</h3>
               <p> ${fuji.paragraph}</p>
            </div>
           </div>`).join('');

members.innerHTML += cards;