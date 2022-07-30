const navMobile = document.querySelector('.navbar-mobile');
const navIcon = document.querySelector('.navbar-icon');
const navIconGroup = document.querySelectorAll('.navbar-icon img');
const navMobileList = document.querySelectorAll('.navbar-mobile a');

navIcon.addEventListener('click', isActive)
function isActive(e) {
  
  navMobile.classList.toggle('navbar-mobile-active');
  
  navIconGroup.forEach(item => item.classList.toggle('d-none'));
  
  navMobileList.forEach(item => {
    if(item.classList.contains('page-now')) {

      item.classList.toggle('animate__animated');
      item.classList.toggle('animate__bounce');
    }
    
  })
}

const backTop = document.querySelector('.backtop');
backTop.addEventListener('click', scrollBack);
function scrollBack() {
  let timer = setInterval(() => {

    let unit = document.documentElement.scrollTop;
    let speed = unit / 15;

    document.documentElement.scrollTop = unit - speed;

    if(window.scrollY == 0) {
      clearInterval(timer);
    }
  }, 10)
}

const domNav = document.querySelector('.navbar');
window.addEventListener('scroll', showTop);
function showTop() {
  // console.log(domNav.offsetHeight, window.scrollY)
  if(window.scrollY > domNav.offsetHeight) {
    backTop.classList.remove('d-none');

  }else {
    backTop.classList.add('d-none');
  }
};


// render data