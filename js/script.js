const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  slidesPerView: 1,
});
const brandBarItem = document.querySelectorAll('.brand-bar--visibility');
const showAllText = document.querySelector('.show-all__text');
const showAll = document.querySelector('.show-all');
const hide = document.querySelector('.hide') 

showAll.addEventListener('click', function () {
  for (var i = 0; i <brandBarItem.length; i++) {
    brandBarItem[i].classList.remove('brand-bar--visibility');
  }
  showAllText.classList.add('show-all--visibility');
  hide.classList.remove('hide');
});

hide.addEventListener('click', function (evt) {
  for (var i = 0; i <brandBarItem.length; i++) {
    brandBarItem[i].classList.add('brand-bar--visibility');
  }
  evt.preventDefault();
  hide.classList.add('hide');
  showAllText.classList.remove('show-all--visibility');
});
