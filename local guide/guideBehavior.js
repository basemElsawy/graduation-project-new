let lines = document.querySelectorAll('.side-line');
let circles = document.querySelectorAll('.circle');
let strengthLibraries = document.querySelectorAll('.strength-libraries');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('line-animate');
    } else {
      entry.target.classList.remove('line-animate');
    }
  });
});

lines.forEach((el) => {
  observer.observe(el);
});

const onscrollBehavior = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('circle-rotate');
    } else {
      entry.target.classList.remove('circle-rotate');
    }
  });
});

circles.forEach((el) => {
  onscrollBehavior.observe(el);
});

const librariesOnscroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('toRight-animation');
    } else {
      entry.target.classList.remove('toRight-animation');
    }
  });
});

strengthLibraries.forEach((el) => {
  librariesOnscroll.observe(el);
});
