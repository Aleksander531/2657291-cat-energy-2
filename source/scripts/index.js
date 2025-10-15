const headerToggle = document.querySelector('.main-header__toggle');
const navList = document.querySelector('.navigation__list');

if (headerToggle && navList) {
  headerToggle.addEventListener('click', () => {
    headerToggle.classList.toggle('main-header__toggle--active');
    navList.classList.toggle('navigation__list--close');
  });
}
/* в этот файл добавляет скрипты*/
