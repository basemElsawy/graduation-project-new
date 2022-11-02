let mainPgsLnkOne = document.getElementById('page-link-one');
let mainPgsLnkTwo = document.getElementById('page-link-two');
let links = document.querySelector('.links');
let showLinks = document.querySelectorAll('.show-links');

let fitnessLvlBtns = document.querySelectorAll('.fitness-lvl');

let beginnerBtn = document.getElementById('Beginner-lvl');
let intermediateBtn = document.getElementById('Intermediate-lvl');
let advancedBtn = document.getElementById('Advanced-lvl');

beginnerBtn.addEventListener('click', () => {
  beginnerBtn.style.marginLeft = '100px';
  beginnerBtn.style.opacity = '0';

  setTimeout(() => {
    beginnerBtn.style.display = 'none';
  }, 500);

  setTimeout(() => {
    intermediateBtn.style.marginLeft = '100px';
    intermediateBtn.style.opacity = '0';
  }, 200);

  setTimeout(() => {
    intermediateBtn.style.display = 'none';
  }, 500);
  setTimeout(() => {
    advancedBtn.style.marginLeft = '100px';
    advancedBtn.style.opacity = '0';
  }, 300);
  setTimeout(() => {
    advancedBtn.style.display = 'none';
  }, 500);
  setTimeout(() => {
    lnksAppear();
  }, 650);
});
intermediateBtn.addEventListener('click', () => {
  beginnerBtn.style.marginLeft = '100px';
  beginnerBtn.style.opacity = '0';

  setTimeout(() => {
    beginnerBtn.style.display = 'none';
  }, 500);

  setTimeout(() => {
    intermediateBtn.style.marginLeft = '100px';
    intermediateBtn.style.opacity = '0';
  }, 200);

  setTimeout(() => {
    intermediateBtn.style.display = 'none';
  }, 500);
  setTimeout(() => {
    advancedBtn.style.marginLeft = '100px';
    advancedBtn.style.opacity = '0';
  }, 300);
  setTimeout(() => {
    advancedBtn.style.display = 'none';
  }, 500);
  setTimeout(() => {
    lnksAppear();
  }, 650);
});

let lnksAppear = () => {
  links.style.display = 'block';
  setTimeout(() => {
    links.style.left = '0px';
    links.style.opacity = '1';
  }, 150);
};
