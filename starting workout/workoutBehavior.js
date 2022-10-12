'use strict';

let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let guideBtns = document.querySelectorAll('.guide-btn');
let sections = document.querySelectorAll('.section');

const currentLocation = Array.location;
// -----------========= FUNCTIONS & EVENT LISTENERS =======--------

//--------------=========== WORKOUT PAGE FUNCTIONALITY ====----------------

guideBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    let activeSection = document.querySelector('.active');
    activeSection.classList.remove('active');
    sections[idx].classList.add('active');

    let activeBtn = document.querySelector('.clicked');
    activeBtn.classList.remove('clicked');
    guideBtns[idx].classList.add('clicked');
  });
});

//-------------------========== SCROLLING FUNCTIONALITY ===========-----------

document.addEventListener('DOMContentLoaded', function (event) {
  window.onscroll = function () {
    scrollFunction();
  };
});

let scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.boxShadow = '0px 2px 40px 2px black';
    logo.style.transform = 'scale(1)';
    navbar.style.transform = 'scale(1)';
  } else {
    navbar.style.transform = 'scale(1.2)';
    logo.style.transform = 'scale(1.2)';
    header.style.boxShadow = 'none';
  }
  if (
    document.body.scrollTop > 750 ||
    document.documentElement.scrollTop > 750
  ) {
    header.style.borderRadius = '0px 0px 10px 10px';
    header.style.marginRight = '10px';
    header.style.marginLeft = '10px';
  } else {
    header.style.borderRadius = '0px 0px 0px 0px';
    header.style.marginRight = '0px';
    header.style.marginLeft = '0px';
  }
};
