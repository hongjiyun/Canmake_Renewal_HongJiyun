const allProducts = {
  news: {
    1: [

{ date: "2026.03.23", name: " <span class='title-center'>～Abloom～</span><br>시리즈로부터 mini사이즈 등장!", img: "img/news/img22.jpg" },
{ date: "2026.03.23", name: "그라데이션 블러셔로 부드럽게 생기있게", img: "img/news/img21.jpg" },
{ date: "2026.03.02", name: "2026년 봄 신상품 , 단종 상품 안내", img: "img/news/img20.jpg" },
{ date: "2026.02.21", name: "<span class='title-center'>「캔메이크×리락쿠마」</span><br>체리 컬러로 도톰한 애교살과 보송보송한 볼♡ 오리지널 배경화면 선물도!", img: "img/news/img1.jpg" },
{ date: "2026.02.21", name: "<span class='title-center'>「캔메이크×리락쿠마」</span><br>볼과 입술을 물들이는 반짝반짝 귀여운 체리 컬러♪ &nbsp;오리지널 배경화면 선물도!", img: "img/news/img2.jpg" },
{ date: "2026.01.30", name: "혈색을 살려주는 브라운 아이라이너 출시!", img: "img/news/img3.jpg" },
{ date: "2026.01.21", name: "메탈룩 마스카라 시리즈에 클리어 타입 등장!", img: "img/news/img4.jpg" },
{ date: "2026.01.21", name: "펄이 들어간 플럼퍼 글로스로 설레는 입술 완성♡", img: "img/news/img5.jpg" },
{ date: "2025.12.22", name: "캔메이크의 새로운 이미지 모델이 결정됐어요!", img: "img/news/img6.jpg" },

    ],
    2: [
{ date: "2025.12.22", name: "파우더 치크 신상 컬러로 심쿵 윤기 볼 완성!", img: "img/news/img7.jpg" },
{ date: "2025.12.22", name: "MmH 오 드 뚜왈렛의 새로운 향을 소개합니다", img: "img/news/img8.jpg" },
{ date: "2025.11.21", name: "최고로 귀여운 매력을 만날 수 있는 초특급 귀여운 팔레트!", img: "img/news/img9.jpg" },
{ date: "2025.11.21", name: "고급스러운 윤기의 하이라이터에서! 투명감 × 혈색 컬러 출시", img: "img/news/img10.jpg" },
{ date: "2025.11.18", name: "멜로우 듀 립 에센스에 레드 톤 컬러가 새롭게 추가되었습니다", img: "img/news/img11.jpg" },
{ date: "2025.10.21", name: "이번 한정 패키지는 퀼팅 스타일입니다", img: "img/news/img12.jpg" },
{ date: "2025.10.21", name: "Make me Happy에서 핸드크림이 한정 재출시", img: "img/news/img13.jpg" },
{ date: "2025.10.03", name: "♡캔메이크 마스카라 한눈에 보기표♡", img: "img/news/img14.jpg" },
{ date: "2025.10.03", name: "캔메이크 네일 각 컬러의 '비침감(투명감)'을 자세히 알고 싶어요~!", img: "img/news/img15.jpg" }

    ],
    3: [
{ date: "2025.09.04", name: "2025년 가을 신상품 · 단종 상품 안내", img: "img/news/img16.jpg" },
{ date: "2025.08.23", name: "Make me Happy에서 투명감 넘치는 머스캣 티 향 출시", img: "img/news/img17.jpg" },
{ date: "2025.07.22", name: "바닥이 보일 정도로 쓰게 되는! 쉐딩 파우더가 정말 유능해요♡", img: "img/news/img18.jpg" },
{ date: "2025.06.01", name: "2025년 여름 신상품 · 단종 상품 안내", img: "img/news/img19.jpg" }
    ]
  }
};

let currentCategory = 'news';
let currentPage = 1;
let itemsPerPage = 9;

function updateItemsPerPage() {
  if (window.innerWidth <= 670) {
    itemsPerPage = 3;
  } else if (window.innerWidth <= 910) {
    itemsPerPage = 6;
  } else {
    itemsPerPage = 9;
  }
}

function render() {
  const listEl = document.getElementById('product-list');
  const titleEl = document.getElementById('category-title');
  const pageLinks = document.querySelectorAll('.page-link');

  if (!listEl || !titleEl) return;

  updateItemsPerPage();
  titleEl.innerText = currentCategory.toUpperCase().replace('_', ' ');
  listEl.innerHTML = "";

  const categoryData = allProducts[currentCategory] || {};
  const allItems = Object.values(categoryData).flat();
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  if (currentPage > totalPages) {
    currentPage = totalPages || 1;
  }

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = allItems.slice(start, end);

  currentItems.forEach(item => {
    listEl.innerHTML += `
      <li class="product_img">
        <div><img src="${item.img}" alt="${item.date}" /></div>
        <div class="product_name">${item.date}</div>
        <div class="product_price">
          ${item.name} 
        </div>
      </li>
    `;
  });

  pageLinks.forEach((link, index) => {
    const pageNum = index + 1;
    if (pageNum <= totalPages) {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
    link.classList.remove('active');
    if (pageNum === currentPage) {
      link.classList.add('active');
    }
  });
}

document.querySelectorAll('.sub_menu_product a, .menu_img_title').forEach(link => {
  link.addEventListener('click', function(e) {
    const category = this.dataset.category;
    if (!window.location.pathname.includes('product.html')) {
      window.location.href = `product.html?category=${category}`;
    } else {
      e.preventDefault();
      currentCategory = category;
      currentPage = 1;
      render();
    }
  });
});

document.querySelectorAll('.page-link').forEach((link, index) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    currentPage = index + 1;
    render();
  });
});

const prevBtn = document.getElementById('prev-btn');
if (prevBtn) {
  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });
}

const nextBtn = document.getElementById('next-btn');
if (nextBtn) {
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const categoryData = allProducts[currentCategory] || {};
    const allItems = Object.values(categoryData).flat();
    const totalPages = Math.ceil(allItems.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      render();
    }
  });
}

window.addEventListener('resize', () => {
  if (document.getElementById('product-list')) {
    currentPage = 1;
    render();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  if (categoryParam && allProducts[categoryParam]) {
    currentCategory = categoryParam;
  }
  render();
});