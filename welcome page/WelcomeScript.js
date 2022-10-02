let header = document.getElementById('pocket-heading');
let image = document.querySelector('.image');
let mainLink = document.getElementById('main-link');

let welcome = document.querySelector('.Welcome');
image.addEventListener('mouseover', () => {
  header.style.transform = 'translateY(-20px)';
  header.style.visibility = 'visible';
  welcome.style.transform = 'translate(0)';
  welcome.style.opacity = '0';
});
image.addEventListener('mouseout', () => {
  header.style.transform = 'translateY(20px)';
  header.style.visibility = 'hidden';
  welcome.style.transform = 'translateY(-50px)';
  welcome.style.opacity = '1';
});
document.addEventListener('DOMContentLoaded', () => {
  header.style.visibility = 'hidden';
  welcome.style.fontSize = '3rem';
});
