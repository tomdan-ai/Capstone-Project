const menuBtn = document.querySelector('.menu-btn');
const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-right');
const guestList = document.querySelector('.guest-list');
const showMore = document.querySelector('.more-btn');
const userPopup = document.querySelector('.login-popup');
const loginBtn = document.querySelector('.login-btn');
const userPopupLayer = document.getElementById('pop-for-users');
const userPopupClose = document.querySelector('.pop-close');

// Feature data Object
const speakers = [
  {
    speaker: 'Yochai Benkler',
    role: 'Education Programs Lead',
    description:
      'Yochai is the PTC Education Partnerships and Outreach Programs Team Lead. ',
    quotation: 'better tomorrow, Chill of Food.',
    image: './images/image-1.png',
  },
  {
    speaker: 'SohYeong Noh',
    role: ' sustainability manager for Sodexo ',
    description:
      'Noh is the Director of ESG Metrics and Reporting at PTC.',
    quotation: 'Code Well, Save the tech.',
    image: './images/image-2.png',
  },
  {
    speaker: 'Lila Tretikov',
    role: 'Chief of Digital Manufacturing',
    description:
      'Lila is a leader who transforms complex organisations to be more competitive and sustainable through technology. ',
    quotation: 'Time saved is Energy generated.',
    image: './images/image-3.png',
  },
  {
    speaker: 'Kilman Chon',
    role: 'Cloud Infrastructure, Onshape',
    description:
      'Kilman Chon, Principal Technical Services Engineer is a Principal Technical Services Engineer.',
    quotation: 'Reduce, Reuse and Recycle all code',
    image: './images/image-4.png',
  },
  {
    speaker: 'Tom Daniel',
    role: 'Software Engineer',
    description:
      'Hello Im a software developer! I can help you build a product , feature or website Look through some of my work and experience!',
    quotation: 'Not all heroes wear capes some just code',
    image: './images/image-5.png',
  },
  {
    speaker: 'Ryan Dyrud',
    role: 'Business Development Associate',
    description:
      'Ryan Dyrud is a Business Development Associate from Amokwe Udi near Enugu.  She has been with Solar Sister since 2021.',
    quotation: 'Think. Code. Save.',
    image: './images/image-6.png',
  },
];

// Login user popup
loginBtn.addEventListener('click', () => {
  document.body.classList.add('no-scroll');
  userPopupLayer.classList.add('pop-for-users');
  userPopup.classList.add('hide-login-popup');
});

// Login user Popup close
userPopupClose.addEventListener('click', () => {
  document.body.classList.remove('no-scroll');
  userPopupLayer.classList.remove('pop-for-users');
  userPopup.classList.remove('hide-login-popup');
});

// burger menu action
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// glue navigation menu
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add('glue');
  } else {
    navbar.classList.remove('glue');
  }
};

// open menu on click
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle('show-menu');
});

// generate Dynamic guest list
for (let i = 0; i < speakers.length; i += 1) {
  const specialGuest = speakers[i];

  const guest = document.createElement('guest');
  guest.classList.add('guest');
  guest.innerHTML = `
    <div class="guest-item">
        <div class="guest-item-img">
            <img src="${specialGuest.image}" alt="">
        </div>
        <div class="guest-item-text">
            <h3>${specialGuest.speaker}</h3>
            <hr class = "guest-line">
            <span class="role">${specialGuest.role} </span>
            <p>
                ${specialGuest.description}
            </p>
            <q>${specialGuest.quotation}</q>
        </div>
    </div>
  `;
  guestList.appendChild(guest);
}

// unhide guest List on click
showMore.addEventListener('click', (e) => {
  e.preventDefault();
  guestList.classList.toggle('hide');
  showMore.textContent = showMore.textContent.includes('See More')
    ? 'See Less'
    : 'See More';
});
