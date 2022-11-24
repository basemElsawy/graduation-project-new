const addToFavs = document.querySelectorAll('.add-schedule');
const exerciseContainer = document.querySelectorAll('.exercise-details');
const exerciseInformation = document.querySelectorAll('.exercise-inform');
const accessorieLifts = document.getElementById('accessorie-lifts');
const mainLifts = document.getElementById('main-lifts');

addToFavs.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    let containerClone = exerciseContainer[idx].cloneNode(true);
    accessorieLifts.append(containerClone);
    let cloneAddToFav = containerClone.querySelector('.add-schedule');
    cloneAddToFav.style.display = 'none';
    containerClone.style.transform = 'scale(0.9)';
    containerClone.style.width = '600px';
    containerClone.style.height = 'auto';
    containerClone.style.justifyContent = 'space-between';
    let removeFavBtn = document.createElement('button');
    removeFavBtn.innerText = 'Remove Exercise';
    removeFavBtn.style.position = 'absolute';

    removeFavBtn.style.bottom = '-15px';
    removeFavBtn.style.left = '10%';
    removeFavBtn.classList.add('Remove-Exercise');
    containerClone.append(removeFavBtn);
    removeFavBtn.addEventListener('click', () => {
      removeFavBtn.parentElement.remove();
    });

    localStorage.setItem('clone', JSON.stringify(containerClone.innerHTML));
  });
});

let cloneParse = JSON.parse(localStorage.getItem('clone'));
// tableContainerAll.insertAdjacentHTML('afterbegin', table);
accessorieLifts.insertAdjacentHTML('afterbegin', cloneParse);
