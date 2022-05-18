const more = document.querySelector('#more');
const members = document.querySelector('.members');

var state = 0;

// more
more.addEventListener('click', function() {
    // members.classList.toggle('add');
    if(state == 0){
        members.style.height = 'auto'
        more.innerText = 'less';
        state +=1;
    }
    else {
        members.style.height = '65vh'
        more.innerText = 'more';
        state -= 1;
    }
    
})

// hamburger button

const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('#navList');



hamburger.addEventListener('click', () => {
    navlist.classList.toggle('disappear');
})

