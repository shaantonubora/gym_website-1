'use strict';

function isOnStrict() {
  return typeof this === 'undefined';
}
console.log(isOnStrict());


// Hamburger button UI iteraction
const hamburgerBtn = document.querySelector('.hamburger-btn i');
const sideNavSlide = document.querySelector('.sideNavBar');

hamburgerBtn.addEventListener('click', function(){
  sideNavSlide.classList.toggle('active');
})


// HERO UI-Iteraction
const socialBtns = document.querySelectorAll('.social-link-container .icon i');
const socialBtnsStyle = document.querySelector('header #hero-section > div:nth-of-type(3) .style')
console.log(socialBtns);

for (let el of socialBtns){
  el.addEventListener('mouseover', function() {
    socialBtnsStyle.style.top = '35%';
  });
  el.addEventListener('mouseout', function(){
    socialBtnsStyle.style.top = '40%';
  })
}
// CURRICULUMN box ui functionality
const curriculumnItem = document.querySelectorAll('main #services .container1 .item');
// console.log(curriculumnItem);

for(const i of curriculumnItem) {
  i.addEventListener('mouseover', ()=> {
    i.classList.add('active');
  })
  i.addEventListener('mouseout', ()=> {
    i.classList.remove('active');
  })
}

// Upcoming class ui functionality
const dayBtn = document.querySelectorAll('.day-wrapper .day');
const dayClass = document.querySelectorAll('main #services .container2 .class-wrapper')
dayBtn[0].addEventListener('click', function() {
  dayBtn[0].classList.add('active');
  dayBtn[1].classList.remove('active');
  dayBtn[2].classList.remove('active');
  //....
  //....
  dayClass[0].classList.remove('hidden');
  dayClass[1].classList.add('hidden');
  dayClass[2].classList.add('hidden');
})
dayBtn[1].addEventListener('click', function() {
  dayBtn[1].classList.add('active');
  dayBtn[0].classList.remove('active');
  dayBtn[2].classList.remove('active');
  //....
  //....
  dayClass[0].classList.add('hidden');
  dayClass[1].classList.remove('hidden');
  dayClass[2].classList.add('hidden');
})
dayBtn[2].addEventListener('click', function() {
  dayBtn[2].classList.add('active');
  dayBtn[1].classList.remove('active');
  dayBtn[0].classList.remove('active');
  //....
  //....
  dayClass[0].classList.add('hidden');
  dayClass[1].classList.add('hidden');
  dayClass[2].classList.remove('hidden');
})
// console.log(dayBtn[0]);
// console.log(dayClass);



const logos2 = document.querySelectorAll('footer #contact > div:nth-child(1) svg path');
console.log(logos2);
for (const i of logos2) {
  console.log(i.getTotalLength());
};

