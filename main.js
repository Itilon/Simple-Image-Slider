const currentImg = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach((img) => {
    img.addEventListener('click', imgClick);
});

function imgClick(e) {
    imgs.forEach((img) => img.style.opacity = 1);
    currentImg.src = e.target.src;
    currentImg.classList.add('fade-in');

    setTimeout(() => {
        currentImg.classList.remove('fade-in');
    }, 500);

    e.target.style.opacity = opacity;
};