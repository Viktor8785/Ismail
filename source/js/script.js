// Get elements
/* -------------------- HEADER --------------------*/
const mainNavGroup = document.querySelector('.main-nav__group');
const mainNavToggle = document.querySelector('.main-nav__toggle');
const mainNavProjectButton = document.querySelector('#main-nav-project-button');
const mainNavSoc1Button = document.querySelector('#main-nav-soc1-button');
const mainNavSoc2Button = document.querySelector('#main-nav-soc2-button');
const mainNavSoc3Button = document.querySelector('#main-nav-soc3-button');
const mainNavPhoneButton = document.querySelector('#main-nav-phone-button');
const headerProjectButton = document.querySelector('#header-project-button');

/* -----------------  BUILDINGS  ----------------- */
const buttonLeft = document.querySelector('#button-left');
const buttonRight = document.querySelector('#button-right');
const buttonArrowLeft = document.querySelector('#button-arrow-left');
const buttonArrowRight = document.querySelector('#button-arrow-right');
const sliderContainer = document.querySelector('#slider-container');
const buildingsCard = document.querySelectorAll('.buildings__card');

/* -----------------  NOW  ----------------- */
const buttonNowMeet1 = document.querySelector('#now-meet1');
const buttonNowMeet2 = document.querySelector('#now-meet2');

/* -----------------  PRICE  ----------------- */
const buttonSquarePrev = document.querySelector('#button-square-prev');
const buttonSquareNext = document.querySelector('#button-square-next');
const buttonGaragePrev = document.querySelector('#button-garage-prev');
const buttonGarageNext = document.querySelector('#button-garage-next');
const buttonFlorsPrev = document.querySelector('#button-flors-prev');
const buttonFlorsNext = document.querySelector('#button-flors-next');
const buttonWallsPrev = document.querySelector('#button-walls-prev');
const buttonWallsNext = document.querySelector('#button-walls-next');
const buttonRoofPrev = document.querySelector('#button-roof-prev');
const buttonRoofNext = document.querySelector('#button-roof-next');
const buttonFrontPrev = document.querySelector('#button-front-prev');
const buttonFrontNext = document.querySelector('#button-front-next');

const buttonContacts = document.querySelector('#button-contacts');
const buttonConfirm = document.querySelector('#button-confirm');

const priceSquareForm = document.querySelectorAll('.price__square-form');

const priceCalc = document.querySelector('.price__calc');
const priceCalcGarage = document.querySelector('.price__calc-garage');
const priceCalcFlors = document.querySelector('.price__calc-flors');
const priceCalcWalls = document.querySelector('.price__calc-walls');
const priceCalcRoof = document.querySelector('.price__calc-roof');
const priceCalcFront = document.querySelector('.price__calc-front');
const priceCalcContacts = document.querySelector('.price__calc-contacts');
const priceCalcConfirm = document.querySelector('.price__calc-confirm');

/* -----------------  MODAL  ----------------- */
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__button');
const buttonModal = document.querySelector('#button-modal');
const formModal = document.querySelector('#form-modal');

/* -----------------  MODAL-project  ----------------- */
const modalProject = document.querySelector('.modal-project');
const modalProjectClose = document.querySelector('#modal-project-close');
const buttonModalProject = document.querySelector('#button-modal-project');
const formModalProject = document.querySelector('#form-modal-project');
const fileModalProject = document.querySelector('#file-modal-project');
const fileNameModalProject = document.querySelector('.modal-project__label-text');
const footerProjectButton = document.querySelector('#footer-project-button');

/* -----------------  MODAL-confirm  ----------------- */
const modalConfirm = document.querySelector('.modal-confirm');
const modalConfirmClose = document.querySelector('#modal-confirm-close');
const buttonModalConfirm = document.querySelector('#button-modal-confirm');

// Set initial state BUILDINGS
const sliderItemsLength = buildingsCard.length;
let leftXMax = -382;
let leftXs = [];
let currentIndexBuildings = 0;

for(i = 0; i < sliderItemsLength; i++) {
  leftXs[i] = leftXMax * i;
}
let leftX = leftXs[currentIndexBuildings];
sliderContainer.style.left = leftX;

// Set initial state PRICE
const square = [75, 100, 125, 150, 175, 200, 250];
const garage = ['На 1 авто', 'На 2 авто', 'Без гаража'];
const flors = [1, 2];
const walls = ['Газобетон', 'Кирпич', 'Клеёный брус'];
const roof = ['Плоская', 'Металлочерепица', 'Гибкая черепица'];
const front = ['Штукатурка по утеплителю', 'Подмосковный кирпич', 'Комбинированный', 'Без фасада'];

let squareCurrent = 0;
let garageCurrent = '';
let florsCurrent = 0;
let wallsCurrent = '';
let roofCurrent = '';
let contactsNameCurrent = '';
let contactsPhoneCurrent = '';

// Set initial state MODAL
let modalNameCurrent = '';
let modalPhoneCurrent = '';

// Set initial state MODAL-project
let modalProjectNameCurrent = '';
let modalProjectPhoneCurrent = '';
let modalProjectCommentsCurrent = '';
let modalProjectFileCurrent = '';

//handleWidthChangeMobile(mediaQueryMobileOnly);
//handleWidthChangeDesktop(mediaQueryDesktop);

/* ----------------  HEADER  -------------- */
mainNavToggle.addEventListener('click', () => {
 if (mainNavToggle.classList.contains('main-nav__toggle--opened')){
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavGroup.classList.remove('main-nav__group--opened');
 } else {
  mainNavToggle.classList.add('main-nav__toggle--opened');
  mainNavGroup.classList.add('main-nav__group--opened');
 }
});
mainNavProjectButton.addEventListener('click', () => {
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavGroup.classList.remove('main-nav__group--opened');
  modalProject.classList.add('modal-project--active');
});
mainNavSoc1Button.addEventListener('click', () => {
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavGroup.classList.remove('main-nav__group--opened');
});
mainNavSoc2Button.addEventListener('click', () => {
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavGroup.classList.remove('main-nav__group--opened');
});
mainNavSoc3Button.addEventListener('click', () => {
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavGroup.classList.remove('main-nav__group--opened');
});
mainNavPhoneButton.addEventListener('click', () => {
  mainNavToggle.classList.remove('main-nav__toggle--opened');
  mainNavGroup.classList.remove('main-nav__group--opened');
});
headerProjectButton.addEventListener('click', () => {
  modalProject.classList.add('modal-project--active');
});

/* ----------------  BUILDINGS  -------------- */
buttonLeft.addEventListener('click', () => {
  currentIndexBuildings--;
  if (!buttonRight.classList.contains('buildings__button--active')) {
    buttonRight.classList.add('buildings__button--active');
    buttonArrowRight.classList.add('button__arrow-right--active')
  }
  if (currentIndexBuildings < 0) {
    currentIndexBuildings = 0;
  }
  if (currentIndexBuildings == 0){
    buttonLeft.classList.remove('buildings__button--active');
    buttonArrowLeft.classList.remove('button__arrow-left--active')
  }
  leftX = leftXs[currentIndexBuildings];
  sliderContainer.style.left = leftX + 'px';
 });

 buttonRight.addEventListener('click', () => {
  currentIndexBuildings++;
  if (!buttonLeft.classList.contains('buildings__button--active')) {
    buttonLeft.classList.add('buildings__button--active');
    buttonArrowLeft.classList.add('button__arrow-left--active')
  }
  if (currentIndexBuildings == sliderItemsLength - 1) {
    buttonRight.classList.remove('buildings__button--active');
    buttonArrowRight.classList.remove('button__arrow-right--active')
  }
  if (currentIndexBuildings == sliderItemsLength) {
    currentIndexBuildings = sliderItemsLength - 1;
  }
  leftX = leftXs[currentIndexBuildings];
  sliderContainer.style.left = leftX + 'px';
 });

  /* -----------------  NOW  ----------------- */
  buttonNowMeet1.addEventListener('click', () => {
    window.scrollTo(0,0);
    modal.classList.add('modal--active');
  });
  buttonNowMeet2.addEventListener('click', () => {
    window.scrollTo(0,0);
    modal.classList.add('modal--active');
  });
 /* -----------------  PRICE  ----------------- */
 buttonSquareNext.addEventListener('click', () => {
    Array.from(priceSquareForm[0].elements).forEach((element, index) => {
      if (element.checked) {
        squareCurrent = square[index];
        priceCalc.classList.remove('price__calc--active');
        priceCalcGarage.classList.add('price__calc-garage--active');
      }
    });
  });
  buttonGaragePrev.addEventListener('click', () => {
    priceCalc.classList.add('price__calc--active');
    priceCalcGarage.classList.remove('price__calc-garage--active');
  });
  buttonGarageNext.addEventListener('click', () => {
    Array.from(priceSquareForm[1].elements).forEach((element, index) => {
      if (element.checked) {
        garageCurrent = garage[index];
        priceCalcFlors.classList.add('price__calc-flors--active');
        priceCalcGarage.classList.remove('price__calc-garage--active');
      }
    });
  });
  buttonFlorsPrev.addEventListener('click', () => {
    priceCalcFlors.classList.remove('price__calc-flors--active');
    priceCalcGarage.classList.add('price__calc-garage--active');
  });
  buttonFlorsNext.addEventListener('click', () => {
    Array.from(priceSquareForm[2].elements).forEach((element, index) => {
      if (element.checked) {
        florsCurrent = flors[index];
        priceCalcFlors.classList.remove('price__calc-flors--active');
        priceCalcWalls.classList.add('price__calc-walls--active');
      }
    });
  });
  buttonWallsPrev.addEventListener('click', () => {
    priceCalcFlors.classList.add('price__calc-flors--active');
    priceCalcWalls.classList.remove('price__calc-walls--active');
  });
  buttonWallsNext.addEventListener('click', () => {
    Array.from(priceSquareForm[3].elements).forEach((element, index) => {
      if (element.checked) {
        wallsCurrent = walls[index];
        priceCalcRoof.classList.add('price__calc-roof--active');
        priceCalcWalls.classList.remove('price__calc-walls--active');
      }
    });
  });
  buttonRoofPrev.addEventListener('click', () => {
    priceCalcRoof.classList.remove('price__calc-roof--active');
    priceCalcWalls.classList.add('price__calc-walls--active');
  });
  buttonRoofNext.addEventListener('click', () => {
    Array.from(priceSquareForm[4].elements).forEach((element, index) => {
      if (element.checked) {
        roofCurrent = roof[index];
        priceCalcRoof.classList.remove('price__calc-roof--active');
        priceCalcFront.classList.add('price__calc-front--active');
      }
    });
  });
  buttonFrontPrev.addEventListener('click', () => {
    priceCalcRoof.classList.add('price__calc-roof--active');
    priceCalcFront.classList.remove('price__calc-front--active');
  });
  buttonFrontNext.addEventListener('click', () => {
    Array.from(priceSquareForm[5].elements).forEach((element, index) => {
      if (element.checked) {
        frontCurrent = front[index];
        priceCalcContacts.classList.add('price__calc-contacts--active');
        priceCalcFront.classList.remove('price__calc-front--active');
      }
    });
  });
  buttonContacts.addEventListener('click', () => {
    let formElements = Array.from(priceSquareForm[6].elements);
      if (formElements[0].validity.valid && formElements[1].validity.valid && formElements[2].validity.valid) {
        contactsNameCurrent = formElements[0].value;
        contactsPhoneCurrent = formElements[1].value;
        priceCalcContacts.classList.remove('price__calc-contacts--active');
        priceCalcConfirm.classList.add('price__calc-confirm--active');
      }
  });
  buttonConfirm.addEventListener('click', () => {
    let formElements = Array.from(priceSquareForm[6].elements);
    Array.from(priceSquareForm[0].elements).forEach(element => {
      element.checked = false
    });
    Array.from(priceSquareForm[1].elements).forEach(element => {
      element.checked = false
    });
    Array.from(priceSquareForm[2].elements).forEach(element => {
      element.checked = false
    });
    Array.from(priceSquareForm[3].elements).forEach(element => {
      element.checked = false
    });
    Array.from(priceSquareForm[4].elements).forEach(element => {
      element.checked = false
    });
    Array.from(priceSquareForm[5].elements).forEach(element => {
      element.checked = false
    });
    formElements[0].value = '';
    formElements[1].value = '';
    formElements[2].checked = false;
    priceCalc.classList.add('price__calc--active');
    priceCalcConfirm.classList.remove('price__calc-confirm--active');
  });

  /* -----------------  MODAL  ----------------- */
  modalCloseButton.addEventListener('click', () => {
    formModal.elements[0].value = '';
    formModal.elements[1].value = '';
    formModal.elements[2].checked = false;
    modal.classList.remove('modal--active');
  });
  buttonModal.addEventListener('click', () => {
    if (formModal.elements[0].validity.valid && formModal.elements[1].validity.valid && formModal.elements[2].validity.valid) {
      modalNameCurrent = formModal.elements[0].value;
      modalPhoneCurrent = formModal.elements[1].value;
      formModal.elements[0].value = '';
      formModal.elements[1].value = '';
      formModal.elements[2].checked = false;
      modal.classList.remove('modal--active');
    }
  });

  /* -----------------  MODAL-project  ----------------- */
  fileModalProject.addEventListener('change', () => {
    let file = fileModalProject.files[0].name;
    fileNameModalProject.innerHTML = file;
    fileNameModalProject.classList.add('modal-project__label-text--done');
  });
  modalProjectClose.addEventListener('click', () => {
    fileNameModalProject.innerHTML = 'Ваш проект';
    fileNameModalProject.classList.remove('modal-project__label-text--done');
    formModalProject.elements[1].value = '';
    formModalProject.elements[2].value = '';
    formModalProject.elements[3].value = '';
    formModalProject.elements[4].checked = false;
    modalProject.classList.remove('modal-project--active');
  });
  buttonModalProject.addEventListener('click', () => {
    if (formModalProject.elements[1].validity.valid &&
        formModalProject.elements[2].validity.valid &&
        formModalProject.elements[4].validity.valid) {
          modalProjectFileCurrent = fileModalProject.files[0].name;
          modalProjectNameCurrent = formModalProject.elements[1].value;
          modalProjectPhoneCurrent = formModalProject.elements[2].value;
          modalProjectCommentsCurrent = formModalProject.elements[3].value;
          fileNameModalProject.innerHTML = 'Ваш проект';
          fileNameModalProject.classList.remove('modal-project__label-text--done');
          formModalProject.elements[1].value = '';
          formModalProject.elements[2].value = '';
          formModalProject.elements[3].value = '';
          formModalProject.elements[4].checked = false;
          modalProject.classList.remove('modal-project--active');
          modalConfirm.classList.add('modal-confirm--active');
    }
  });
  footerProjectButton.addEventListener('click', () => {
    window.scrollTo(0,0);
    modalProject.classList.add('modal-project--active');
  });

  /* -----------------  MODAL-confirm  ----------------- */

  modalConfirmClose.addEventListener('click', () => {
    modalConfirm.classList.remove('modal-confirm--active');
  });
  buttonModalConfirm.addEventListener('click', () => {
    modalConfirm.classList.remove('modal-confirm--active');
  });
