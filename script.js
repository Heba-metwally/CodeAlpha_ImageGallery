const imageSources = [
    "images/img_3.jpg",
    "images/img_5.jpg",
    "images/img_6.jpg",
    "images/img_1.jpg"
];

let currentIndex = 0;
const firstImg = document.getElementById('firstImg');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function updateImage() { 
    setTimeout(() => {
        firstImg.src = imageSources[currentIndex];
    }, 100);
}
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    updateImage();
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    updateImage();
});