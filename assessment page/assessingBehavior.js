'use strict';

let firstName = document.getElementById('Firstname');
let lastName = document.getElementById('Lastname');
let age = document.getElementById('Age');
let height = document.getElementById('Height');
let weight = document.getElementById('Weight');
let submitBtn = document.querySelector('.submit');
let resultsDiv = document.getElementById('results');
let gender = document.getElementById('Gender');
let resultsContainer = document.querySelector('.results-container');

//----------=========== new elements =======----------

// -------------======== Variables =======---------------

height.value = Number(height.value);

weight.value = Number(weight.value);

age.value = Number(age.value);

// -------------================= Event LISTENERS ===========--------------
submitBtn.addEventListener('click', function () {
  let bmi;
  let bmr;
  let results = ``;
  if (gender.value === 'male') {
    bmi = weight.value / height.value ** 2;

    bmi = parseFloat(Number(bmi)).toFixed(1);
    let weightCalc = weight.value * 10;
    let heightCalc = height.value * 6.25;
    heightCalc = heightCalc * 100;
    let ageCalc = age.value * 5;

    bmr = Number(weightCalc) + Number(heightCalc) - Number(ageCalc) + 5;
    bmr = parseFloat(Number(bmr)).toFixed(1);
    console.log(bmr);
    if (bmi <= 18.5) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and you're slightly underweight also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and your weight is normal also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 25 && bmi <= 29.9) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're slightly overweight also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }
    if (bmi >= 30) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're suffering obesity also your basal metabolic rate is ${bmr} keep that in mind cause it'll help alot with the diet plan soon on our website.`;
    }

    document.getElementById('results').append(results);
    document.getElementById('results-container').classList.remove('hidden');
    document.querySelector('.Next-page').classList.remove('hidden');
    document.querySelector('.submit').classList.add('hidden');
  } else if (gender.value === 'female') {
    bmi = weight.value / height.value ** 2;
    bmi = parseFloat(Number(bmi)).toFixed(1);
    let weightCalc = weight.value * 10;
    let heightCalc = height.value * 6.25;
    heightCalc = heightCalc * 100;
    let ageCalc = age.value * 5;

    bmr = Number(weightCalc) + Number(heightCalc) - Number(ageCalc) - 161;
    bmr = parseFloat(Number(bmr)).toFixed(1);
    if (bmi <= 18.5) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and you're slightly underweight`;
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
      results = `Hello ${firstName.value} ${lastName.value} Your body mass index is ${bmi} and your weight is normal`;
    }
    if (bmi >= 25 && bmi <= 29.9) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're slightly overweight`;
    }
    if (bmi >= 30) {
      results = `Hello ${firstName.value} ${lastName.value}  Your body mass index is ${bmi} and you're suffering obesity`;
    }
    document.getElementById('results').append(results);
    document.getElementById('results-container').classList.remove('hidden');
    document.querySelector('.Next-page').classList.remove('hidden');
    document.querySelector('.submit').classList.add('hidden');
  }
});
