document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        zoom: true,
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