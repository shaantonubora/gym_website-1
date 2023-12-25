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

//Curriculum slider Interaction
const classContainer = document.querySelector('.gym-classes-container');
const slider = document.querySelector('.gym-classes-container .slider');
const slideLeft = document.querySelector('.gym-classes-container .slide-btn-left');
const slideRight = document.querySelector('.gym-classes-container .slide-btn-right');

console.log(slideLeft);
console.log(slideRight);

let pressed = false;
let startX; 
let x;

classContainer.addEventListener('mousedown', (e) => {
  pressed = true;
  startX = e.offsetX - slider.offsetLeft;
  classContainer.style.cursor = 'grabbing';
  slider.style.transition = 'none';
  // console.log(slider.offsetLeft);
  // console.log(startX);
});

classContainer.addEventListener('mouseup', () => {
  classContainer.style.cursor = 'grab';
});

window.addEventListener('mouseup', () => {
  pressed = false;
});

classContainer.addEventListener('mousemove', (e) => {
  if(!pressed) return;
  e.preventDefault();

  x = e.offsetX;
  // console.log(x);
  slider.style.left = `${x - startX}px`;
  // console.log(e.offsetX);
  checkBoundary();
})

function checkBoundary() {
  let outer = classContainer.getBoundingClientRect();
  let inner = slider.getBoundingClientRect();

  // console.log(outer);
  // console.log(inner);
  if(!parseInt(inner.right > outer.right) > 0) {
    // slideLeft.style.opacity = '1.5';
    slideLeft.style.opacity = 1;
    slideLeft.style.pointerEvents = 'all';
  } 
  if(!inner.right < outer.right){
    slideRight.style.opacity = 1;
    slideRight.style.pointerEvents = 'all';
  }

  if(parseInt(slider.style.left) > 0) {
      slider.style.left = '0px';
      slideLeft.style.opacity = 0;
      slideLeft.style.pointerEvents = 'none';
  } else if (inner.right < outer.right) {
      slider.style.left = `-${inner.width - outer.width}px`;
      slideRight.style.opacity = 0;
      slideRight.style.pointerEvents = 'none';
  }
  // console.log(slider.style.left);
}

slideRight.addEventListener('click', () => {
  slider.style.transition = 'all 0.7s ease';
  slider.style.left = '-50%';
  slideLeft.style.opacity = 1;
  slideLeft.style.pointerEvents = 'all';
  slideRight.style.opacity = 0;
  slideRight.style.pointerEvents = 'none';
})
slideLeft.addEventListener('click', () => {
  slider.style.transition = 'all 0.7s ease';
  slider.style.left = '0%';
  slideRight.style.opacity = 1;
  slideRight.style.pointerEvents = 'all';
  slideLeft.style.opacity = 0;
  slideLeft.style.pointerEvents = 'none';
});

const logos1 = document.querySelectorAll('#text-svg1 path');
console.log(logos1);
for (const i of logos1) {
  
  console.log(i.getTotalLength());
};

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

