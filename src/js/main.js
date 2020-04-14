"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}




const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigationColumn--js');
    navigationList.classList.toggle('navigationColumn--visible');
});

const navigationNc1 = document.querySelector('.navigation__iteamColumn1--js');

navigationNc1.addEventListener('click', (e) => {
    const navigationListNc = document.querySelector('.navigationColumn--js');
    navigationListNc.classList.toggle('navigationColumn--visible');
});

const navigationNc2 = document.querySelector('.navigation__iteamColumn2--js');

navigationNc2.addEventListener('click', (e) => {
    const navigationListNc2 = document.querySelector('.navigationColumn--js');
    navigationListNc2.classList.toggle('navigationColumn--visible');
});

const navigationNc3 = document.querySelector('.navigation__iteamColumn3--js');

navigationNc3.addEventListener('click', (e) => {
    const navigationListNc3 = document.querySelector('.navigationColumn--js');
    navigationListNc3.classList.toggle('navigationColumn--visible');
});

const navigationNc4 = document.querySelector('.navigation__iteamColumn4--js');

navigationNc4.addEventListener('click', (e) => {
    const navigationListNc4 = document.querySelector('.navigationColumn--js');
    navigationListNc4.classList.toggle('navigationColumn--visible');
});