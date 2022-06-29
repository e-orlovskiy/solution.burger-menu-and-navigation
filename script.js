const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

// *-----------------ПЛАВНЫЙ СКРОЛЛ ПО РАЗДЕЛАМ-----------------*
let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', (e) => {
         const menuLink = e.target;
         // проверка на то, существует ли объект, на который ссылается goto
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            //расстояние от верха до бъекта - getBoundingClientRect, scrollY - сколько px было проскролено сверху
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
            //закрытия меню в мобильной версии по клику на разделы
            if (iconMenu.classList.contains('_active')) {
               document.body.classList.remove('_lock');
               iconMenu.classList.remove('_active');
               menuBody.classList.remove('_active');
            }
            //скролл
            window.scrollTo({
               top: gotoBlockValue,
               behavior: 'smooth'
            });
            e.preventDefault(); //отключение стандарных действий ссылки
         }
      })
   })
}

// *-----------------БУРГЕР-----------------*
if (iconMenu) {
   iconMenu.addEventListener('click', (e) => {
      document.body.classList.toggle('_lock'); //запрет скролла страницы
      iconMenu.classList.toggle('_active'); // анимация иконки бургера
      menuBody.classList.toggle('_active'); // мобильное меню бургера
   })
}