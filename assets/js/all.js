"use strict";

var navMobile = document.querySelector('.navbar-mobile');
var navIcon = document.querySelector('.navbar-icon');
var navIconGroup = document.querySelectorAll('.navbar-icon img');
var navMobileList = document.querySelectorAll('.navbar-mobile a');
navIcon.addEventListener('click', isActive);

function isActive(e) {
  navMobile.classList.toggle('navbar-mobile-active');
  navIconGroup.forEach(function (item) {
    return item.classList.toggle('d-none');
  });
  navMobileList.forEach(function (item) {
    if (item.classList.contains('page-now')) {
      item.classList.toggle('animate__animated');
      item.classList.toggle('animate__bounce');
    }
  });
}

var backTop = document.querySelector('.backtop');
backTop.addEventListener('click', scrollBack);

function scrollBack() {
  var timer = setInterval(function () {
    var unit = document.documentElement.scrollTop;
    var speed = unit / 15;
    document.documentElement.scrollTop = unit - speed;

    if (window.scrollY == 0) {
      clearInterval(timer);
    }
  }, 10);
}

var domNav = document.querySelector('.navbar');
window.addEventListener('scroll', showTop);

function showTop() {
  // console.log(domNav.offsetHeight, window.scrollY)
  if (window.scrollY > domNav.offsetHeight) {
    backTop.classList.remove('d-none');
  } else {
    backTop.classList.add('d-none');
  }
}

; // render data
//# sourceMappingURL=all.js.map
