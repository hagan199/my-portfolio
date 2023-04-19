const details = [
  {
    id: 1,
    title: "Tonic",
    list: {
      list1: "CANOPY",
      list2: "Back End Dev",
      list3: "2015",
    },
    image: "static/imgs/three.png",
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    lang: {
      lang1: "html",
      lang2: "css",
      lang3: "js",
      lang4: "ruby",
    },
    category: "project1",
  },
  {
    id: 2,
    title: "Multi-Post Stories",
    list: {
      list1: "FACEBOOK",
      list2: "Full Stack Dev",
      list3: "2015",
    },
    image: "static/imgs/four.png",
    desc: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    lang: {
      lang1: "html",
      lang2: "Ruby",
      lang3: "css",
      lang4: "javaScript",
    },
    category: "project2",
  },
  {
    id: 3,
    title: "Facebook 360",
    list: {
      list1: "FACEBOOK",
      list2: "Full Stack Dev",
      list3: "2015",
    },
    image: "static/imgs/Snapshoot Portfolio.png",
    desc: "Exploring the future of media in Facebooks first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    lang: {
      lang1: "html",
      lang2: "Ruby",
      lang3: "css",
      lang4: "javaScript",
    },
    category: "project3",
  },
  {
    id: 4,
    title: "Uber",
    list: {
      list1: "Uber",
      list2: "Lead Developer",
      list3: "2015",
    },
    image: "static/imgs/two.png",
    desc: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    lang: {
      lang1: "html",
      lang2: "Ruby",
      lang3: "css",
      lang4: "javaScript",
    },
    category: "project4",
  },
];

// ==========================================================================

const burger = document.querySelector('.header__container__parhead__nav__ul__responsive');
const mobileNav = document.querySelector('.iwq');
const popupContainer = document.querySelector('.parpopup');
const popupContent = document.querySelector('.parpopup__popup');
const navLinks = document.querySelectorAll('.mobile-nav-links');
const email = document.querySelector('.form__control > input#email');
const form = document.querySelector('form');
const emailError = document.querySelector('#emailerror');
const projectDetail = document.querySelector('.pardetail');

burger.addEventListener('click', () => {
  burger.classList.toggle('change');
  mobileNav.classList.toggle('show');
});

function showDetails(category) {
  popupContainer.style.display = 'flex';
  const selectedProject = projectDetails.find((item) => item.category === category);
  // update popupContent.innerHTML with the selected project details
}

function closePopup() {
  popupContainer.style.display = 'none';
}

navLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.remove('show');
    burger.classList.remove('change');
  });
});

window.onclick = function(event) {
  if (event.target === popupContainer) {
    closePopup();
  }
};

// Form Validation
form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    emailError.style.opacity = '1';
  }
});

projectDetail.addEventListener('click', () => {
  showDetails();
  closePopup();
});