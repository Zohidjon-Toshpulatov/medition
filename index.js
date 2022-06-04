window.addEventListener('load', function () {
    const mainImg = document.getElementById('light-box-main-img');
    const slides = document.getElementsByClassName('my-slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].addEventListener('click', (e) => {
            mainImg.setAttribute('src', e.target.src)
        })
    }
})
