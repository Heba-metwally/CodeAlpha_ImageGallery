const allImages = [
    { src: "images/img_4.jpg", category: "others",caption:"details matter"},
    { src: "images/1.png", category: "others",caption:"getting things done together"},
    { src: "images/portfolio-2.jpg", category: "others",caption:"another day, another deadline"},
    { src: "images/img_1.jpg", category: "others",caption:"grown slowly, shaped with patience"},
    { src: "images/2.png", category: "others",caption:"Code & Collaborate"},
    { src: "images/product4.jpg", category: "products",caption:"first thing of the day"},
    { src: "images/back.jpg", category: "others",caption:"best hours are the late ones"},
    { src: "images/services.jpg", category: "others",caption:"somewhere cold, somewhere quiet"},
    { src: "images/product2.png", category: "products",caption:"bubble tea"},
    { src: "images/3.png", category: "others",caption:"designing"},
    { src: "images/product1.jpg", category: "products",caption:"Morning Routine"},
    { src: "images/img_6.jpg", category: "others",caption:"she got to the coffee before me"},
    { src: "images/product6,8.jpg", category: "products",caption:"cheese cake"},
    { src: "images/startegy.jpg", category: "others",caption:"clean desk, clear mind"},
    { src: "images/hero.jpg", category: "products",caption:"ready to shoot"}
];
let imageSources = [...allImages];
let currentIndex = 0;

const firstImg = document.getElementById('firstImg');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dotsContainer = document.getElementById("dots");
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

function updateImage() {
    if(imageSources.length === 0) return;
    firstImg.style.opacity = 0;
    setTimeout(() => {
        firstImg.src = imageSources[currentIndex].src;
        firstImg.style.opacity = 1;
        document.getElementById('caption').textContent = imageSources[currentIndex].caption; 
        updateDots();
        }, 300);
}
nextBtn.addEventListener('click', () => {
    if(imageSources.length === 0) return;
    currentIndex = (currentIndex + 1) % imageSources.length;
    updateImage();
});

prevBtn.addEventListener('click', () => {
    if(imageSources.length === 0) return;
    currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
    updateImage();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") nextBtn.click();
    if (e.key === "ArrowLeft") prevBtn.click();
});

function createDots() {
    dotsContainer.innerHTML = "";
    imageSources.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateImage();
        });
        dotsContainer.appendChild(dot);
    });
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        
        const category = e.target.getAttribute('data-category');
        if (category === 'all') {
            imageSources = [...allImages];
        } else {
            imageSources = allImages.filter(img => img.category === category);
        }
        currentIndex = 0;
        updateImage();
        createDots();
    });
});

firstImg.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = firstImg.src;
});

document.getElementById('closeLightbox').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) lightbox.style.display = 'none';
});
createDots();
updateImage();