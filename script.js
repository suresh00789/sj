
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
      header.classList.toggle('sticky', window.scrollY > 0);
    });

    const menu = document.querySelector('#menu-icon');
    const navigation = document.querySelector('.navigation');

    menu.addEventListener('click', () => {
      menu.classList.toggle('bx-x');
      navigation.classList.toggle('open');
    });
  });

