'use strict';
// -------------------================= HEADER VARIABLES ==================------------------
let header = document.querySelector('.header');
let logo = document.querySelector('.logo');
let navbar = document.querySelector('.navbar');
let logoImg = document.querySelector('.muscle-img');
let guideBtns = document.querySelectorAll('.guide-btn');
let sections = document.querySelectorAll('.section');
//--------========== collapse container variables======-----------
let moreInfo = document.querySelectorAll('.more-info');
let collapseMenu = document.querySelectorAll('.collapse-container');
let insideCollapse = document.querySelectorAll('.inside-collapse');
let closeArrow = document.querySelectorAll('.close-btn');
let lrnMore = document.querySelectorAll('.learn-more');
let closeLrnMore = document.querySelectorAll('.close-categorie');
let collapseCategorie = document.querySelectorAll('.categorie-collapse');
let collapseInsideCat = document.querySelectorAll('.categorie-inside');
// --------------------===================== EXERCISES PANEL VARIABLES ================--------------------
let moreExercsiesBtn = document.querySelectorAll('.more-exercises');
let closePanel = document.querySelectorAll('.turn-off');
let musclesPanel = document.querySelectorAll('.muscles');
let musclesContainer = document.querySelectorAll('.muscles-containing');
let mustDoExercises = document.querySelectorAll('.must-do');
let images = document.querySelectorAll('.image-select');
// ---------------======================= ADD TO TABLE VARIABLES ==========------------
let addWrkoutScheduleBtn = document.querySelectorAll('.add-schedule');
let addMainLftBtn = document.querySelectorAll('.add-schedule-main');
let chosenExerciseTitle = document.querySelectorAll('.chosen-exercise');
let chosenMainLftTitle = document.querySelectorAll('.chosen-main-exercise');
// -----------------============= WORKOUT TABLE VARIABLES
let tableContainer = document.querySelectorAll('.table-container');
let chooseScheduleBtn = document.querySelectorAll('.choose-schedule-btn');
let workoutSchedule = document.querySelector('.workout-schedule');
let organizeWeekBtn = document.querySelector('.organize-week-btn');
let scheduleChoice = document.querySelector('.schedule-choice');
let welcomeContainer = document.querySelector('.welcome-container');
let chooseAgainBtn = document.querySelector('.choose-again');
let notChosenTable = document.querySelectorAll('.not-chosen');
let chosenTable = document.querySelector('.chosen');
let tbodyEl = document.querySelectorAll('tbody');
let tableContainerAll = document.querySelector('.table-container-all');
// ---------------------------================= local variables ===============-----------------

// -----------========= FUNCTIONS & EVENT LISTENERS =======--------

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
// ----------------============= WORKOUTS FUNCTIONALITY ================-------------------

// ------------------================= TABLE FUNCTUONALITY ====================---------------

// ----------------================== MUSCLE PANEL FUNCTIONALITY ================--------------------------
moreExercsiesBtn.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    mustDoExercises[idx].classList.remove('not-selected');
    mustDoExercises[idx].classList.add('selected');
    images[idx].style.width = '60%';
    images[idx].style.height = '300px';
    images[idx].style.marginLeft = '20%';
    images[idx].style.border = '10px solid #2d4a62a9';
    images[idx].style.borderRadius = '20px';
    musclesPanel[idx].style.height = 'auto';
    musclesPanel[idx].style.visibitliy = 'visible';
    musclesPanel[idx].style.transform = 'translateY(0px)';
    musclesPanel[idx].style.margin = 'auto';
    musclesContainer[idx].style.height = 'auto';
    musclesContainer[idx].style.transform = 'translateY(0px)';
    musclesContainer[idx].style.margin = 'auto';
    setTimeout(() => {
      musclesPanel[idx].style.display = 'block';
    }, 200);

    let notSelected = document.querySelectorAll('.not-selected');

    for (let i in notSelected) {
      notSelected[i].style.display = 'none';
    }
  });
});

closePanel.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    musclesPanel[idx].style.height = '0px';
    musclesContainer[idx].style.height = '0px';
    musclesContainer[idx].style.transform = 'translateY(-50px)';
    musclesPanel[idx].style.visibitliy = 'hidden';
    musclesPanel[idx].style.transform = 'translateY(-2300px)';
    images[idx].style.height = '200px';

    setTimeout(() => {
      musclesPanel[idx].style.display = 'none';
      // musclesContainer[idx].style.display = 'none';
    }, 1000);
    images[idx].style.borderRadius = '0px';
    images[idx].style.width = '100%';
    images[idx].style.marginLeft = '0%';
    images[idx].style.border = 'none';

    document.querySelector('.selected').classList.add('not-selected');
    document.querySelector('.selected').classList.remove('selected');

    let notSelected = document.querySelectorAll('.not-selected');

    for (let i in notSelected) {
      notSelected[i].style.display = 'inline';
    }
  });
});

// --------------==================== COLLAPSE MENU FOR EACH MOVEMENT ============----------------

lrnMore.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseCategorie[idx].style.transform = 'translateY(0px)';
    collapseInsideCat[idx].style.display = 'block';
  });
});
closeLrnMore.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseCategorie[idx].style.transform = 'translateY(-100px)';
    collapseInsideCat[idx].style.display = 'none';
  });
});

moreInfo.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseMenu[idx].style.transform = 'translateY(0px)';
    insideCollapse[idx].style.display = 'block';
    collapseMenu[idx].style.marginBottom = '30px';
  });
});

closeArrow.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    collapseMenu[idx].style.transform = 'translateY(-100px)';
    insideCollapse[idx].style.display = 'none';
    collapseMenu[idx].style.marginBottom = '30px';
  });
});
//--------------=========== WORKOUT PAGE FUNCTIONALITY ====----------------

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

// -----------===================commented block of code =================------------
// function storingTable(idx) {
//   if (tableContainer[idx].classList.contains('chosen') === true) {
//     document.querySelector('.chosen');
//     localStorage.setItem(
//       'chosenTable',
//       JSON.stringify(document.querySelector('.chosen').innerHTML)
//     );
//   }
// }
// let table = JSON.parse(localStorage.getItem('chosenTable'));

// tableContainerAll.insertAdjacentHTML('afterbegin', table);
