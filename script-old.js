'use strict';
//--------------------------DOM objects---------------
const toggleButton = document.getElementById('toggle-button');
const navBarLinks = document.getElementById('navbar-links');
let navBar = document.getElementById('navbar');
let header = document.querySelector('.header');
let logo = document.getElementById('Logo');
let logoImg = document.querySelector('.logo-muscle');
let listItems = document.querySelector('#un-orderedlist');

//-------------------------------Variables----------

let counter = 1;
//---------------------------functions and eventlisteners------------------------\
document.addEventListener('DOMContentLoaded', function (event) {
  scrollFunction();
  window.onscroll = function () {
    scrollFunction();
  };
});

let scrollFunction = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    logo.style.transform = 'scale(1)';
    header.style.marginRight = '10px';
    logoImg.style.width = '100px';
    logoImg.style.height = '100px';
    header.style.marginLeft = '10px';
    header.style.boxShadow = '0px 2px 40px 2px black';
    header.style.borderRadius = '0px 0px 10px 10px';
    listItems.style.transform = 'scale(1)';
  } else {
    header.style.boxShadow = 'none';
    header.style.marginRight = '0px';
    logoImg.style.width = '130px';
    logoImg.style.height = '100px';
    header.style.marginLeft = '0px';
    navBar.style.borderRadius = '0%';
    // logoImg.style.transform = 'translateY(2px)';
    logo.style.transform = 'scale(1.3)';
    header.style.borderRadius = '0px';
    listItems.style.transform = 'scale(1.1)';
  }
};

//--------------slider functionality----------

setInterval(() => {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
});
