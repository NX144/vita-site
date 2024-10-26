window.onload = function() {
    const prodSlides = document.querySelectorAll('.prod .swiper-slide'),
          prodView = document.querySelector('.prod .prod__img img');
        
    prodSlides.forEach(item => {
        item.addEventListener('click', () => {
            prodSlides.forEach(item => {
                item.classList.remove('active');
            });
            item.classList.add('active');
            prodView.setAttribute('src', item.querySelector('img').getAttribute('src'));
        })
    })
};