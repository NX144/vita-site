document.addEventListener('DOMContentLoaded', () => {
    const prodSlides = document.querySelectorAll('.prod .swiper-slide'),
          prodView = document.querySelector('.prod .prod__img img'),
          modal = document.querySelector(".modal"),
          modalBack = document.querySelector(".modal-back"),
          modalOpen = document.querySelectorAll(".sellers__item button"),
          modalClose = document.querySelector(".modal__close");
        
    if(prodSlides) {
        prodSlides.forEach(item => {
            item.addEventListener('click', () => {
                prodSlides.forEach(item => {
                    item.classList.remove('active');
                });
                item.classList.add('active');
                prodView.setAttribute('src', item.querySelector('img').getAttribute('src'));
            })
        })
    }

    if(modalOpen) {
        modalOpen.forEach(item => {
            item.addEventListener("click", () => {
                modal.classList.add("active");
                modalBack.classList.add("active");
            })
        })
        modalClose.addEventListener("click", () => {
            modal.classList.remove("active");
            modalBack.classList.remove("active");
        })
        modalBack.addEventListener("click", () => {
            modal.classList.remove("active");
            modalBack.classList.remove("active");
        })
    }



    const burgerBtn = document.querySelector('.burger');
    const burgerIcon = document.querySelector('.burger__icon');
    const burgerClose = document.querySelector('.burger__close');
    const headerNav = document.querySelector('.header__nav');

    if(burgerBtn) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('burger-active');
            if(burgerBtn.classList.contains('burger-active')) {
                burgerIcon.style.display = 'none';
                burgerClose.style.display = 'block';
                headerNav.style.left = "0"
            } else {
                burgerIcon.style.display = 'block';
                burgerClose.style.display = 'none';
                headerNav.style.left = "-100%"
            }
        });
    }

    const details = document.querySelector(".header__megamenu");
    const summary = document.querySelector(".header__megamenu-item");
    const headerMenuNav = document.querySelector(".header__nav");

    summary.addEventListener("click", () => {
        if(window.screen.width < 1200 && burgerBtn) {
            if(details.hasAttribute("open")) {
                headerMenuNav.classList.remove("header__menu-active");
            } else {
                headerMenuNav.classList.add("header__menu-active");
            }
        }
     })

});