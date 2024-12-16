document.addEventListener('DOMContentLoaded', function() {
    // gallery
    loadGallery();

    // naver map
    loadMap();

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
});

const loadGallery = () => {
    const galleryBody = document.getElementById('gallery-body');
    // 1-20
    const numbers = Array.from({ length: 20 }, (_, i) => i + 1);
    numbers.forEach(num => {
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';

        const swiperImage = document.createElement('img');
        swiperImage.src = `images/g${num}.png`;

        swiperSlide.appendChild(swiperImage);
        galleryBody.appendChild(swiperSlide);
    });
}

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