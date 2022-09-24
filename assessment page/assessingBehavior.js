'use strict';

let firstName = document.getElementById('Firstname');
let lastName = document.getElementById('Lastname');
let age = document.getElementById('Age');
let height = document.getElementById('Height');
let weight = document.getElementById('Weight');
let submitBtn = document.querySelector('.submit');
let resultsDiv = document.getElementsByClassName('results');
let gender = document.getElementById('Gender');

// -------------======== Variables =======---------------

height.value = Number(height.value);

weight.value = Number(weight.value);

age.value = Number(age.value);

// -------------================= Event LISTENERS ===========--------------
submitBtn.addEventListener('click', function () {
  let bmi;
  let bmr;
  if (gender.value === 'male') {
    bmi = weight.value / height.value ** 2;
    bmi = parseFloat(Number(bmi)).toFixed(1);
    let weightCalc = weight.value * 10;
    let heightCalc = height.value * 6.25;
    let ageCalc = age.value * 5;

    bmr = Number(weightCalc) + Number(heightCalc) - Number(ageCalc) + 5;
    bmr = parseFloat(Number(bmr)).toFixed(1);
  } else if (gender.value === 'female') {
    bmi = weight.value / height.value ** 2;
    bmi = parseFloat(Number(bmi)).toFixed(1);
    let weightCalc = weight.value * 10;
    let heightCalc = height.value * 6.25;
    let ageCalc = age.value * 5;

    bmr = Number(weightCalc) + Number(heightCalc) - Number(ageCalc) - 161;
    bmr = parseFloat(Number(bmr)).toFixed(1);
  }
});
