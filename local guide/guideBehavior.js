let lines = document.querySelectorAll('.side-line');
let circles = document.querySelectorAll('.circle');
let strengthLibraries = document.querySelectorAll('.strength-libraries');
let frstMainHeader = document.querySelector('.first-main-header');
let headingSection = document.querySelector('.heading-section');
let frstSideHeader = document.querySelector('.first-side-header');

let secondContentAnimation = document.querySelectorAll('.second-content');

let sideLogos = document.querySelectorAll('.logos');

const logosAnimation = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('logos-appear');
    } else {
      entry.target.classList.remove('logos-appear');
    }
  });
});

sideLogos.forEach((el) => {
  logosAnimation.observe(el);
});

const secondContentObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('content-to-right');
    } else {
      entry.target.classList.remove('content-to-right');
    }
  });
});

secondContentAnimation.forEach((el) => {
  secondContentObserver.observe(el);
});

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

window.onscroll = function () {
  if (
    document.documentElement.scrollTop >= 50 &&
    document.documentElement.scrollTop <= 900
  ) {
    frstMainHeader.classList.add('text-to-left');
  } else {
    console.log('reached');
    frstMainHeader.classList.remove('text-to-left');
  }
  if (
    document.documentElement.scrollTop >= 100 &&
    document.documentElement.scrollTop <= 1200
  ) {
    frstSideHeader.classList.add('text-to-right');
  } else {
    console.log('reached');
    frstSideHeader.classList.remove('text-to-right');
  }
};
