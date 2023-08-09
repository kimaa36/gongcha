// 햄버거 메뉴 클릭하면 #gnb-mo등장
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById('gnb-mo');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
  isHideMenu = !isHideMenu;
  if(isHideMenu){
    menuHide.classList.add('show');
    menuToggleBtn.classList.add('active');
  } else{
    menuHide.classList.remove('show');
    menuToggleBtn.classList.remove('active');
  }
});


// Main slide for Swiper-Slider
new Swiper('.main-slide .swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

//더보기 버튼을 클릭하면 보이게
function showMore(){
  const hide = document.querySelectorAll('.hide');
  console.log(hide);
  const first = Array.from(hide).slice(0, 5);
  first.forEach(item => {
    item.classList.remove('hide');
  });
  if(hide.length <= 5){
    hideMoreButton();
  }
}

//보일내용이 끝나면 더보기 버튼 숨기기
function hideMoreButton(){
  document.getElementById('moreBtn').classList.add('hide');
}

// banner
new Swiper(".banner-slide .swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: ".banner-slide .swiper-prev", // 이전 버튼 선택자
    nextEl: ".banner-slide .swiper-next", // 다음 버튼 선택자
  },
  breakpoints: { //반응형 조건 속성
    320: { //320 이상일 경우
      slidesPerView: 1, //레이아웃 2열
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }
});
