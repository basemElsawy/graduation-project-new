let pageLinks = document.querySelectorAll('.pages-links');

let showLinks = document.querySelectorAll('.show-links');

let fitnessLvlBtns = document.querySelectorAll('.fitness-lvl');

let beginnerBtn = document.getElementById('Beginner-lvl');
let intermediateBtn = document.getElementById('Beginner-lvl');
let advancedBtn = document.getElementById('Advanced-lvl');

beginnerBtn.addEventListener('click', () => {
  beginnerBtn.style.marginLeft = '100px';
  beginnerBtn.style.opacity = '-1';
});
