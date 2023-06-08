// Get elements
/* ------------------   Profit  -------------------*/
const mediaQueryMobileOnly = window.matchMedia('(max-width: 767px');
const mediaQueryDesktop = window.matchMedia('(min-width: 1920px)');
const mediaQueryTabletOnly = window.matchMedia('(min-width: 768px) and (max-width: 1919px');
const cardIcons = document.querySelectorAll('.card__icon');
const cardTitles = document.querySelectorAll('.card__title');
const cardSubtitles = document.querySelectorAll('.card__subtitle');
const items = document.querySelector('.profit__container-card');
const menus = document.querySelector('.profit__container-menu');
const prevBtnDesktop = document.querySelector('.slider__toggles-left.slider__toggles-left--desktop');
const nextBtnDesktop = document.querySelector('.slider__toggles-right.slider__toggles-right--desktop');
const prevBtnTablet = document.querySelector('.slider__toggles-left.slider__toggles-left--tablet');
const nextBtnTablet = document.querySelector('.slider__toggles-right.slider__toggles-right--tablet');
const dots = document.querySelectorAll('.slider__dot');
const buttons = document.querySelectorAll('.profit__menu-item');
const buttonsText = document.querySelectorAll('.menu-item__text');
const buttonsIcon = document.querySelectorAll('.menu-item__icon');
const buttonAnalitic = document.querySelector('#analitic');
const buttonAdvertising = document.querySelector('#advertising');
const buttonTargeting = document.querySelector('#targeting');
const buttonCreating = document.querySelector('#creating');
const buttonSegmenting = document.querySelector('#segmenting');
const buttonVaryables = document.querySelector('#varyables');
const buttonTaktic = document.querySelector('#taktic');

/* ------------------- Targetolog ------------------*/
const targetologTitle = document.querySelector('.targetolog__title');
const targetologTitleAfter = document.querySelector('.targetolog__title-after');
const targetolog = document.querySelector('.targetolog');
const targetologWrapper = document.querySelector('.targetolog__wrapper');
const targetologWrapperAfter = document.querySelector('.targetolog__wrapper-after');

/* -------------------- Heroes --------------------*/
const heroesCard = document.querySelectorAll('.heroes__card');
const heroesCardFrame = document.querySelectorAll('.heroes__card-frame');
const heroes = document.querySelector('.heroes__container');
const prevBtnHeroesMobile = document.querySelector('.toggles__left.toggles__left--mobile');
const nextBtnHeroesMobile = document.querySelector('.toggles__right.toggles__right--mobile');
const prevBtnHeroesTablet = document.querySelector('.toggles__left.toggles__left--tablet');
const nextBtnHeroesTablet = document.querySelector('.toggles__right.toggles__right--tablet');
const counter = document.querySelector('.toggles__current-number');

/* -------------------- BENEFIT --------------------*/
const benefitNumberHours = document.querySelector('#benefit-number-hours');
const benefitHours = document.querySelector('#benefit-hours');
const benefitDays = document.querySelector('#benefit-days');

/* -------------------- FAQ --------------------*/
const faqQuestion = document.querySelectorAll('.faq__question-item');
const faqAnswer = document.querySelectorAll('.faq__answer-answer');
const faqArrowDownMobile = document.querySelectorAll('.faq__arrow-down.faq__arrow-down--mobile');
const faqArrowRightMobile = document.querySelectorAll('.faq__arrow-right.faq__arrow-right--mobile');
const faqArrowDownDesktop = document.querySelectorAll('.faq__arrow-down.faq__arrow-down--desktop');
const faqArrowRightDesktop = document.querySelectorAll('.faq__arrow-right.faq__arrow-right--desktop');

/* --------------------  MODAL  ----------------*/
const modalWindow = document.querySelector('#modal-window');
const menu = document.querySelector('#menu');
const modalMenu = document.querySelector('#modal-menu');
const modal = document.querySelector('.modal');
const fLink = document.querySelector('#f-link');
const tLink = document.querySelector('#t-link');
const cLink = document.querySelector('#c-link');
const faqLink = document.querySelector('#faq-link');

// Set initial state Profit
const sliderItemsLength = 7;
let leftXMax = -260;
let leftXMaxButton1 = -207;
let leftXMaxButton2 = -297;
let leftXs = [];
let buttonsRef = [];
let leftXsButton = [];
let currentIndex = 0;

for(i = 0; i < sliderItemsLength; i++) {
  leftXs[i] = leftXMax * i;
}

buttonsRef[0] = buttonAnalitic;
buttonsRef[1] = buttonAdvertising;
buttonsRef[2] = buttonTargeting;
buttonsRef[3] = buttonCreating;
buttonsRef[4] = buttonSegmenting;
buttonsRef[5] = buttonVaryables;
buttonsRef[6] = buttonTaktic;

leftXsButton[0] = 0;
leftXsButton[1] = leftXsButton[0] + leftXMaxButton1;
leftXsButton[2] = leftXsButton[1] + leftXMaxButton2;
leftXsButton[3] = leftXsButton[2] + leftXMaxButton2;
leftXsButton[4] = leftXsButton[3] + leftXMaxButton2;
leftXsButton[5] = leftXsButton[4] + leftXMaxButton1;
leftXsButton[6] = leftXsButton[5] + leftXMaxButton1;

let leftX = leftXs[currentIndex];
let leftXButton = leftXsButton[currentIndex];

items.style.left = leftX;
menus.style.left = leftXButton;

// Set initial state Heroes
const sliderHeroesLength = 4;
let leftXHeroesMax = -258;
let leftHeroesXs = [];
let currentHeroesIndex = 0;

for(i = 0; i < sliderHeroesLength; i++) {
  leftHeroesXs[i] = leftXHeroesMax * i;
}
let leftHeroesX = leftHeroesXs[currentHeroesIndex];

heroes.style.left = leftHeroesX + 'px';
counter.innerHTML = (currentHeroesIndex + 1) + '/4';

// Set initial state Modal
let menuActive = false;

handleWidthChangeMobile(mediaQueryMobileOnly);
handleWidthChangeTablet(mediaQueryTabletOnly);
handleWidthChangeDesktop(mediaQueryDesktop);

/* ----------------  Profit  -------------- */
// Handle previous button desktop
prevBtnDesktop.addEventListener('click', () => {
 dots[currentIndex].classList.remove('slider__dot--active');
 buttons[currentIndex].classList.remove('profit__menu-item--active');
 buttonsText[currentIndex].classList.remove('menu-item__text--active');
 buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
 currentIndex--;
 if (currentIndex < 0) {
  currentIndex = 0;
}
 leftX = leftXs[currentIndex];
 items.style.left = leftX + 'px';
 dots[currentIndex].classList.add('slider__dot--active');
 buttons[currentIndex].classList.add('profit__menu-item--active');
 buttonsText[currentIndex].classList.add('menu-item__text--active');
 buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
});

// Handle next button desktop
nextBtnDesktop.addEventListener('click', () => {
 dots[currentIndex].classList.remove('slider__dot--active');
 buttons[currentIndex].classList.remove('profit__menu-item--active');
 buttonsText[currentIndex].classList.remove('menu-item__text--active');
 buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
 currentIndex++;
 if (currentIndex >= sliderItemsLength) {
  currentIndex = sliderItemsLength - 1;
 }
 leftX = leftXs[currentIndex];
 items.style.left = leftX + 'px';
 dots[currentIndex].classList.add('slider__dot--active');
 buttons[currentIndex].classList.add('profit__menu-item--active');
 buttonsText[currentIndex].classList.add('menu-item__text--active');
 buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
});

// Handle previous button tablet
prevBtnTablet.addEventListener('click', () => {
  dots[currentIndex].classList.remove('slider__dot--active');
  buttons[currentIndex].classList.remove('profit__menu-item--active');
  buttonsText[currentIndex].classList.remove('menu-item__text--active');
  buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
  currentIndex--;
  if (currentIndex < 0) {
   currentIndex = 0;
 }
  leftX = leftXs[currentIndex];
  items.style.left = leftX + 'px';
  leftXButton = leftXsButton[currentIndex];
  menus.style.left = leftXButton + 'px';
  dots[currentIndex].classList.add('slider__dot--active');
  buttons[currentIndex].classList.add('profit__menu-item--active');
  buttonsText[currentIndex].classList.add('menu-item__text--active');
  buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
 });

 // Handle next button tablet
 nextBtnTablet.addEventListener('click', () => {
  dots[currentIndex].classList.remove('slider__dot--active');
  buttons[currentIndex].classList.remove('profit__menu-item--active');
  buttonsText[currentIndex].classList.remove('menu-item__text--active');
  buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
  currentIndex++;
  if (currentIndex >= sliderItemsLength) {
   currentIndex = sliderItemsLength - 1;
  }
  leftX = leftXs[currentIndex];
  items.style.left = leftX + 'px';
  leftXButton = leftXsButton[currentIndex];
  menus.style.left = leftXButton + 'px';
  dots[currentIndex].classList.add('slider__dot--active');
  buttons[currentIndex].classList.add('profit__menu-item--active');
  buttonsText[currentIndex].classList.add('menu-item__text--active');
  buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
 });

 // Handle dots
dots.forEach((dot, index) => {
 dot.addEventListener('click', () => {
  dots[currentIndex].classList.remove('slider__dot--active');
  buttons[currentIndex].classList.remove('profit__menu-item--active');
  buttonsText[currentIndex].classList.remove('menu-item__text--active');
  buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
  cardIcons[currentIndex].classList.remove('card__icon--active');
  cardTitles[currentIndex].classList.remove('card__title--active');
  cardSubtitles[currentIndex].classList.remove('card__subtitle--active');
  currentIndex = index;
  leftX = leftXs[currentIndex];
  items.style.left = leftX + 'px';
  handleWidthChangeTabletLeft(mediaQueryTabletOnly);
  dots[currentIndex].classList.add('slider__dot--active');
  buttons[currentIndex].classList.add('profit__menu-item--active');
  buttonsText[currentIndex].classList.add('menu-item__text--active');
  buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
  cardIcons[currentIndex].classList.add('card__icon--active');
  cardTitles[currentIndex].classList.add('card__title--active');
  cardSubtitles[currentIndex].classList.add('card__subtitle--active');
 });
});

// Hadle buttons
buttonsRef.forEach((button, index) => {
  button.addEventListener('click', () => {
   dots[currentIndex].classList.remove('slider__dot--active');
   buttons[currentIndex].classList.remove('profit__menu-item--active');
   buttonsText[currentIndex].classList.remove('menu-item__text--active');
   buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
   currentIndex = index;
   leftX = leftXs[currentIndex];
   items.style.left = leftX + 'px';
   dots[currentIndex].classList.add('slider__dot--active');
   buttons[currentIndex].classList.add('profit__menu-item--active');
   buttonsText[currentIndex].classList.add('menu-item__text--active');
   buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
  });
 });

function handleWidthChangeDesktop(e) {
  if (e.matches) {
  // Profit
    leftXMax = -874;
    startSettings();

  // FAQ
    faqArrowDownDesktop.forEach((arrow) => {
      if (arrow.classList.contains('arrow-disactive')) {
        arrow.classList.remove('arrow-disactive');
      }
    });

    faqArrowRightMobile.forEach((arrow, index) => {
      if (arrow.classList.contains('arrow-active')) {
        arrow.classList.remove('arrow-active');
        faqArrowRightDesktop[index].classList.add('arrow-active');
        faqArrowDownDesktop[index].classList.add('arrow-disactive');
      }
    });
  // MODAL
    menuActive = false;
  }
}

function handleWidthChangeTablet(e) {
  if (e.matches) {
  // Profit
    leftXMax = -552;
    startSettings();

  // Heroes
    leftXHeroesMax = -290;
    startHeroesSettings();

  // FAQ
    faqArrowDownMobile.forEach((arrow) => {
      if (arrow.classList.contains('arrow-disactive')) {
        arrow.classList.remove('arrow-disactive');
      }
    });

    faqArrowRightMobile.forEach((arrow, index) => {
      if (arrow.classList.contains('arrow-active')) {
        faqArrowDownMobile[index].classList.add('arrow-disactive');
      }
    });

    faqArrowRightDesktop.forEach((arrow, index) => {
      if (arrow.classList.contains('arrow-active')) {
        arrow.classList.remove('arrow-active');
        faqArrowRightMobile[index].classList.add('arrow-active');
        faqArrowDownMobile[index].classList.add('arrow-disactive');
      }
    });
  // MODAL
    menuActive = false;
  }
}

function handleWidthChangeMobile(e) {
  if (e.matches) {
  // Profit
    leftXMax = -260;
    startSettings();

  // Heroes
    leftXHeroesMax = -258;
    startHeroesSettings();

  // FAQ
    faqArrowDownMobile.forEach((arrow) => {
      if (arrow.classList.contains('arrow-disactive')) {
        arrow.classList.remove('arrow-disactive');
      }
    });

    faqArrowRightMobile.forEach((arrow, index) => {
      if (arrow.classList.contains('arrow-active')) {
        faqArrowDownMobile[index].classList.add('arrow-disactive');
      }
    });

    faqArrowRightDesktop.forEach((arrow, index) => {
      if (arrow.classList.contains('arrow-active')) {
        arrow.classList.remove('arrow-active');
        faqArrowRightMobile[index].classList.add('arrow-active');
        faqArrowDownMobile[index].classList.add('arrow-disactive');
      }
    });

  // MODAL
    menuActive = true;
  }
}

function handleWidthChangeTabletLeft(e) {
  if (e.matches) {
    leftXButton = leftXsButton[currentIndex];
    menus.style.left = leftXButton + 'px';
  }
}

function startSettings() {
  dots[currentIndex].classList.remove('slider__dot--active');
  buttons[currentIndex].classList.remove('profit__menu-item--active');
  buttonsText[currentIndex].classList.remove('menu-item__text--active');
  buttonsIcon[currentIndex].classList.remove('menu-item__icon--active');
  cardIcons[currentIndex].classList.remove('card__icon--active');
  cardTitles[currentIndex].classList.remove('card__title--active');
  cardSubtitles[currentIndex].classList.remove('card__subtitle--active');

  currentIndex = 0;

  for(i = 0; i < sliderItemsLength; i++) {
    leftXs[i] = leftXMax * i;
  }

  leftX = leftXs[currentIndex];
  leftXButton = leftXsButton[currentIndex];

  items.style.left = leftX;
  menus.style.left = leftXButton;

  dots[currentIndex].classList.add('slider__dot--active');
  buttons[currentIndex].classList.add('profit__menu-item--active');
  buttonsText[currentIndex].classList.add('menu-item__text--active');
  buttonsIcon[currentIndex].classList.add('menu-item__icon--active');
  cardIcons[currentIndex].classList.add('card__icon--active');
  cardTitles[currentIndex].classList.add('card__title--active');
  cardSubtitles[currentIndex].classList.add('card__subtitle--active');
}

mediaQueryDesktop.addEventListener('change', handleWidthChangeDesktop);
mediaQueryTabletOnly.addEventListener('change', handleWidthChangeTablet);
mediaQueryTabletOnly.addEventListener('change', handleWidthChangeTabletLeft);
mediaQueryMobileOnly.addEventListener('change', handleWidthChangeMobile);

/* ------------------ Targetolog  ---------------------------*/
targetologTitle.addEventListener('click', () => {
  if (targetolog.classList.contains('targetolog--after')) {
    targetolog.classList.remove('targetolog--after');
    targetologWrapper.classList.remove('targetolog__wrapper--after');
    targetologWrapperAfter.classList.remove('targetolog__wrapper-after--after');
  } else {
    targetolog.classList.add('targetolog--after');
    targetologWrapper.classList.add('targetolog__wrapper--after');
    targetologWrapperAfter.classList.add('targetolog__wrapper-after--after');
  }
});

targetologTitleAfter.addEventListener('click', () => {
  if (targetolog.classList.contains('targetolog--after')) {
    targetolog.classList.remove('targetolog--after');
    targetologWrapper.classList.remove('targetolog__wrapper--after');
    targetologWrapperAfter.classList.remove('targetolog__wrapper-after--after');
  } else {
    targetolog.classList.add('targetolog--after');
    targetologWrapper.classList.add('targetolog__wrapper--after');
    targetologWrapperAfter.classList.add('targetolog__wrapper-after--after');
  }
});

/* -----------------  Heroes  -----------------------------*/
// Handle previous button mobile
prevBtnHeroesMobile.addEventListener('click', () => {
  heroesCard[currentHeroesIndex].classList.remove('heroes__card--active');
  heroesCardFrame[currentHeroesIndex].classList.remove('heroes__card-frame--active');
  currentHeroesIndex--;
  if (currentHeroesIndex < 0) {
    currentHeroesIndex = 0;
 }
  leftHeroesX = leftHeroesXs[currentHeroesIndex];
  heroes.style.left = leftHeroesX + 'px';
  counter.innerHTML = (currentHeroesIndex + 1) + '/4';
  heroesCard[currentHeroesIndex].classList.add('heroes__card--active');
  heroesCardFrame[currentHeroesIndex].classList.add('heroes__card-frame--active');
});

 // Handle next button mobile
 nextBtnHeroesMobile.addEventListener('click', () => {
  heroesCard[currentHeroesIndex].classList.remove('heroes__card--active');
  heroesCardFrame[currentHeroesIndex].classList.remove('heroes__card-frame--active');
  currentHeroesIndex++;
  if (currentHeroesIndex >= sliderHeroesLength) {
    currentHeroesIndex = sliderHeroesLength - 1;
  }
  leftHeroesX = leftHeroesXs[currentHeroesIndex];
  heroes.style.left = leftHeroesX + 'px';
  counter.innerHTML = (currentHeroesIndex + 1) + '/4';
  heroesCard[currentHeroesIndex].classList.add('heroes__card--active');
  heroesCardFrame[currentHeroesIndex].classList.add('heroes__card-frame--active');
 });

 // Handle previous button tablet
 prevBtnHeroesTablet.addEventListener('click', () => {
  heroesCard[currentHeroesIndex].classList.remove('heroes__card--active');
  heroesCardFrame[currentHeroesIndex].classList.remove('heroes__card-frame--active');
  currentHeroesIndex--;
  if (currentHeroesIndex < 0) {
    currentHeroesIndex = 0;
  }
  leftHeroesX = leftHeroesXs[currentHeroesIndex];
  heroes.style.left = leftHeroesX + 'px';
  counter.innerHTML = (currentHeroesIndex + 1) + '/4';
  heroesCard[currentHeroesIndex].classList.add('heroes__card--active');
  heroesCardFrame[currentHeroesIndex].classList.add('heroes__card-frame--active');
 });

  // Handle next button tablet
  nextBtnHeroesTablet.addEventListener('click', () => {
    heroesCard[currentHeroesIndex].classList.remove('heroes__card--active');
    heroesCardFrame[currentHeroesIndex].classList.remove('heroes__card-frame--active');
    currentHeroesIndex++;
    if (currentHeroesIndex >= sliderHeroesLength) {
      currentHeroesIndex = sliderHeroesLength - 1;
    }
    leftHeroesX = leftHeroesXs[currentHeroesIndex];
    heroes.style.left = leftHeroesX + 'px';
    counter.innerHTML = (currentHeroesIndex + 1) + '/4';
    heroesCard[currentHeroesIndex].classList.add('heroes__card--active');
    heroesCardFrame[currentHeroesIndex].classList.add('heroes__card-frame--active');
  });

  function startHeroesSettings() {
    currentHeroesIndex = 0;
    for(i = 0; i < sliderHeroesLength; i++) {
      leftHeroesXs[i] = leftXHeroesMax * i;
    }
    leftHeroesX = leftHeroesXs[currentHeroesIndex];
    heroes.style.left = leftHeroesX;
  }

  /* ----------------- BENEFIT  ----------------*/
  benefitHours.addEventListener('input', () => {
    if (benefitHours.value <= 1) {
      benefitHours.value = 1;
    }
  });
  benefitDays.addEventListener('input', () => {
    if (benefitDays.value <= 1) {
      benefitDays.value = 1;
    }
  });


  /* ----------------  FAQ  -------------- */
  faqArrowDownMobile.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      arrow.classList.add('arrow-disactive');
      faqArrowDownDesktop[index].classList.add('arrow-disactive');
      faqArrowRightMobile[index].classList.add('arrow-active');
      faqAnswer[index].classList.add('arrow-active');
      faqQuestion[index].classList.add('faq__question-item--active');
    });
   });

   faqArrowRightMobile.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      arrow.classList.remove('arrow-active');
      faqArrowDownMobile[index].classList.remove('arrow-disactive');
      faqAnswer[index].classList.remove('arrow-active');
      faqQuestion[index].classList.remove('faq__question-item--active');
    });
   });

   faqArrowDownDesktop.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      arrow.classList.add('arrow-disactive');
      faqArrowDownMobile[index].classList.add('arrow-disactive');
      faqArrowRightDesktop[index].classList.add('arrow-active');
      faqAnswer[index].classList.add('arrow-active');
      faqQuestion[index].classList.add('faq__question-item--active');
    });
   });

   faqArrowRightDesktop.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      arrow.classList.remove('arrow-active');
      faqArrowDownDesktop[index].classList.remove('arrow-disactive');
      faqAnswer[index].classList.remove('arrow-active');
      faqQuestion[index].classList.remove('faq__question-item--active');
    });
  });

  /* ----------------  MODAL  --------------*/
  menu.addEventListener('click', () => {
    if (menuActive) {
      modal.classList.add('modal--active');
    }
  });

  modalMenu.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  fLink.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  tLink.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  cLink.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  faqLink.addEventListener('click', () => {
    modal.classList.remove('modal--active');
  });

  window.addEventListener('click', (ev) => {
    if (!ev.composedPath().includes(menu) && !ev.composedPath().includes(modalWindow)) {
      modal.classList.remove('modal--active');
    }
  });
