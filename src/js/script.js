window.onload = function() {
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
};