document.addEventListener('DOMContentLoaded', function() {
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

	// LightGallery 초기화
	lightGallery(document.getElementById('gallery'), {
		selector: 'a',
		thumbnail: true,
		download: false,
		mobileSettings: {
			closable: true,
			showCloseIcon: true,
			controls: false
		}
	});

	// 더블클릭 동작 방지
	document.getElementById('gallery').addEventListener('dblclick', (event) => {
		event.preventDefault(); // 기본 더블클릭 동작 방지
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