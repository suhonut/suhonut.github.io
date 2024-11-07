document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelectorAll('.gallery-slide');
    const dotsContainer = document.querySelector('.gallery-dots');

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let currentIndex = 0;
    let animationID;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function updateDots() {
        const slideWidth = slides[0].offsetWidth + 15; // 15px is the gap
        const scrolled = slider.scrollLeft;
        const index = Math.round(scrolled / slideWidth);

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Scroll snap will handle the sliding
    slider.addEventListener('scroll', () => {
        window.requestAnimationFrame(updateDots);
    });

    // Touch events for mobile
    slider.addEventListener('touchstart', (e) => {
        startPos = e.touches[0].clientX;
        isDragging = true;
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentPosition = e.touches[0].clientX;
        const diff = startPos - currentPosition;
        slider.scrollLeft += diff;
        startPos = currentPosition;
    });

    slider.addEventListener('touchend', () => {
        isDragging = false;
    });

    // Mouse events for desktop
    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        startPos = e.clientX;
        isDragging = true;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const currentPosition = e.clientX;
        const diff = startPos - currentPosition;
        slider.scrollLeft += diff;
        startPos = currentPosition;
    });

    slider.addEventListener('mouseup', () => {
        isDragging = false;
    });

    slider.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // naver map
    loadMap();
});

const loadMap = () => {
    const mapOpts = {
        center: new naver.maps.LatLng(37.595732, 127.172496),
        zoom: 16,
    }

    // map
    const map = new naver.maps.Map(document.getElementById('map'), mapOpts);

    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(37.595732, 127.172496),
        map: map,
        animation: naver.maps.Animation.BOUNCE
    });
}