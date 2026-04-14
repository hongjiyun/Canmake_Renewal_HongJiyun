//img change 
const menuItems = document.querySelectorAll('.menu_img_title img');

menuItems.forEach(img => {
  const originalSrc = img.src; 
  const hoverSrc = originalSrc.replace('_img.png', '_img2.png'); 

  //mouse on
  img.parentElement.parentElement.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  // mouse off
  img.parentElement.parentElement.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});
const allProducts = {
  base: {
    1: [
      { name: "모이스트 프리즘 프라이머", price: "990", img: "img/product/basemakeup/base1.jpg", point: "NEW COLOR" },
      { name: "머메이드 스킨 젤 UV", price: "770", img: "img/product/basemakeup/base2.jpg", point: "" },
      { name: "포아레스 에어리베이스", price: "770", img: "img/product/basemakeup/base3.jpg", point: "" },
      { name: "커버 & 스트레치 컨실러 UV", price: "858", img: "img/product/basemakeup/concealer1.jpg", point: "NEW COLOR" },
      { name: "컬러 믹싱 컨실러", price: "825", img: "img/product/basemakeup/concealer2.jpg", point: "" },
      { name: "컬러 스틱 컨실러", price: "715", img: "img/product/basemakeup/concealer3.jpg", point: "" },
      { name: "아이백 컨실러", price: "715", img: "img/product/basemakeup/concealer4.jpg", point: "" },
      { name: "밀착 광채 쿠션", price: "1,650", img: "img/product/basemakeup/foundation.jpg", point: "" },
      { name: "마시멜로 피니시 파우더 미니", price: "880", img: "img/product/basemakeup/powder1.png", point: "" },
      { name: "일루미네이팅 피니시 파우더 ～Abloom～", price: "1,034", img: "img/product/basemakeup/powder2.jpg", point: "" },
      { name: "시크릿 뷰티 파우더", price: "935", img: "img/product/basemakeup/powder3.png", point: "" },
      { name: "마시멜로 피니시 파우더", price: "1,034", img: "img/product/basemakeup/powder4.jpg", point: "" },
      { name: "기름 제거 미네랄 파우더", price: "748", img: "img/product/basemakeup/powder5.jpg", point: "" },
      { name: "실키 루스 모이스트 파우더", price: "1,034", img: "img/product/basemakeup/powder6.jpg", point: "" },
      { name: "쉐이딩 파우더", price: "968", img: "img/product/basemakeup/powder7.jpg", point: "" },
      { name: "문 글로우 하이라이터", price: "880", img: "img/product/basemakeup/highlighter1.jpg", point: "선공개 COLOR" }
    ],
    2: [
      { name: "말랑 하이라이터", price: "638", img: "img/product/basemakeup/highlighter2.jpg", point: "" },
      { name: "쉐이딩 파우더", price: "748", img: "img/product/basemakeup/shading1.jpg", point: "" },
      { name: "노즈 섀도우 메이커", price: "748", img: "img/product/basemakeup/shading2.jpg", point: "" },
      { name: "마시멜로 피니시 파우더 교체용 퍼프", price: "330", img: "img/product/basemakeup/tool1.jpg", point: "" },
      { name: "마시멜로 피니시 파우더 브러쉬", price: "528", img: "img/product/basemakeup/tool2.jpg", point: "" }
    ]
  },
  cheeks: {
    1: [
      { name: "파우더 블러셔", price: "660", img: "img/product/cheeks/cheeks1.jpg", point: "NEW COLOR" },
      { name: "광채 플라워 블러셔", price: "770", img: "img/product/cheeks/cheeks2.jpg", point: "NEW COLOR" },
      { name: "크림 치크 (펄 타입)", price: "638", img: "img/product/cheeks/cheeks3.jpg", point: "" },
      { name: "크림 치크 (크림 블러셔)", price: "638", img: "img/product/cheeks/cheeks4.jpg", point: "선공개 COLOR" },
      { name: "글로우 플뢰르 치크스 (블렌드 타입)", price: "880", img: "img/product/cheeks/cheeks5.jpg", point: "" },
      { name: "크림 치크 (클리어 타입)", price: "638", img: "img/product/cheeks/cheeks6.jpg", point: "" }
    ]
  },
  eyes: {
    1: [
      { name: "라메 마니아", price: "770", img: "img/product/eyes/eyeshadow1.jpg", point: "NEW COLOR" },
      { name: "퍼펙트 멀티 아이즈", price: "858", img: "img/product/eyes/eyeshadow2.jpg", point: "" },
      { name: "쁘띠 팔레트 아이즈", price: "1,078", img: "img/product/eyes/eyeshadow3.jpg", point: "NEW COLOR" },
      { name: "플럼푸쿠 코디 아이즈 네오", price: "792", img: "img/product/eyes/eyeshadow4.jpg", point: "" },
      { name: "플럼푸쿠 코디 아이즈", price: "792", img: "img/product/eyes/eyeshadow5.jpg", point: "LIMITED COLOR" },
      { name: "라스팅 멀티 아이 베이스 WP", price: "550", img: "img/product/eyes/eyeshadow6.jpg", point: "" },
      { name: "주얼리 섀도우 베일", price: "660", img: "img/product/eyes/eyeshadow7.jpg", point: "" },
      { name: "아이섀도우 베이스", price: "550", img: "img/product/eyes/eyeshadow8.jpg", point: "" },
      { name: "쁘띠 팔레트 아이즈 (매트 타입)", price: "1,078", img: "img/product/eyes/eyeshadow9.jpg", point: "" },
      { name: "실키 수플레 아이즈 (매트 타입)", price: "825", img: "img/product/eyes/eyeshadow10.jpg", point: "" },
      { name: "실키 수플레 아이즈 ", price: "825", img: "img/product/eyes/eyeshadow11.jpg", point: "" },
      { name: "쥬시 퓨어 아이즈", price: "660", img: "img/product/eyes/eyeshadow12.jpg", point: "" },
      { name: "핏 스타일러 아이브로우", price: "880", img: "img/product/eyes/eyebrow1.jpg", point: "NEW ITEM" },
      { name: "스타일링 엣지 아이브로우", price: "770", img: "img/product/eyes/eyebrow2.jpg", point: "" },
      { name: "컨실러 브로우 마스카라", price: "748", img: "img/product/eyes/eyebrow3.jpg", point: "" },
      { name: "3in1 아이브로우", price: "990", img: "img/product/eyes/eyebrow4.jpg", point: "" }
    ],
    2: [
      { name: "퍼펙트 에어리 아이브로우", price: "495", img: "img/product/eyes/eyebrow5.jpg", point: "" },
      { name: "3way 슬림 쉐이드 라이너", price: "770", img: "img/product/eyes/eyebrow6.jpg", point: "" },
      { name: "스마트 미니 아이브로우 컬러", price: "660", img: "img/product/eyes/eyebrow7.jpg", point: "" },
      { name: "라스팅 멀티 브로우 코트", price: "550", img: "img/product/eyes/eyebrow8.jpg", point: "" },
      { name: "슬림 리퀴드 아이라이너", price: "990", img: "img/product/eyes/eyeliner1.jpg", point: "" },
      { name: "크리미 터치 라이너", price: "715", img: "img/product/eyes/eyeliner2.jpg", point: "PRE-SALE" },
      { name: "라스팅 리퀴드 라이너", price: "990", img: "img/product/eyes/eyeliner3.jpg", point: "" },
      { name: "3way 슬림 아이 루즈 라이너", price: "770", img: "img/product/eyes/eyeliner4.jpg", point: "" },
      { name: "크리미 터치 라이너 쉬어", price: "715", img: "img/product/eyes/eyeliner5.jpg", point: "NEW ITEM" },
      { name: "래쉬 세럼 케어&리페어", price: "825", img: "img/product/eyes/mascara1.jpg", point: "" },
      { name: "빗어내는 마스카라 리무버", price: "550", img: "img/product/eyes/mascara2.jpg", point: "PRE-SALE" },
      { name: "퀵 래쉬 컬러 리무버", price: "550", img: "img/product/eyes/mascara3.jpg", point: "" },
      { name: "메탈룩 마스카라 볼륨 룩", price: "990", img: "img/product/eyes/mascara4.jpg", point: "" },
      { name: "메탈룩 마스카라", price: "990", img: "img/product/eyes/mascara5.jpg", point: "" },
      { name: "퀵 래쉬 컬러", price: "748", img: "img/product/eyes/mascara6.jpg", point: "" }
    ],
    3: [
      { name: "퀵 래쉬 컬러 롱 마스카라", price: "748", img: "img/product/eyes/mascara6.jpg", point: "" },
      { name: "고쿠부토 마스카라", price: "660", img: "img/product/eyes/mascara7.jpg", point: "" },
      { name: "퀵 래쉬 컬러 세퍼레이트", price: "660", img: "img/product/eyes/mascara8.jpg", point: "" },
      { name: "퀵 래쉬 컬러 ER", price: "660", img: "img/product/eyes/mascara9.jpg", point: "" },
      { name: "컬 스나이퍼 마스카라", price: "660", img: "img/product/eyes/mascara10.jpg", point: "" }
    ]
  },
  lips: {
    1: [
      { name: "글래스 틴트 시럽", price: "1,078", img: "img/product/lips/gloss1.jpg", point: "" },
      { name: "멜로우 듀 립 에센스", price: "638", img: "img/product/lips/gloss2.jpg", point: "선공개 COLOR" },
      { name: "트윙클 주얼리 플럼퍼", price: "880", img: "img/product/lips/gloss3.jpg", point: "선공개 COLOR" },
      { name: "플럼프 립 케어 스크럽", price: "594", img: "img/product/lips/lipbase1.jpg", point: "" },
      { name: "멜로우 듀 립 마스크", price: "792", img: "img/product/lips/lipbase2.jpg", point: "" },
      { name: "무치 푸루 틴트", price: "770", img: "img/product/lips/rouge1.jpg", point: "" },
      { name: "스테이 온 밤 루즈", price: "638", img: "img/product/lips/rouge2.jpg", point: "" },
      { name: "러스터 베일 루즈", price: "1,298", img: "img/product/lips/rouge3.jpg", point: "NEW COLOR" }
    ]
  },
  nails: {
    1: [
      { name: "파운데이션 컬러", price: "396", img: "img/product/nails/nails1.jpg", point: "" },
      { name: "컬러풀 네일", price: "396", img: "img/product/nails/nails2.jpg", point: "LIMITED COLOR" },
      { name: "젤 봄률 탑코트", price: "638", img: "img/product/nails/nails3.jpg", point: "" },
      { name: "퀵 & 이지 리무버", price: "440", img: "img/product/nails/nails4.jpg", point: "" },
      { name: "보타니컬 네일 오일", price: "726", img: "img/product/nails/nails5.jpg", point: "NEW ITEM" }
    ]
  },
  fragrance: {
    1: [
      { name: "오드트알레", price: "770", img: "img/product/fragrance/fragrance1.jpg", point: "" },
      { name: "네일 오일", price: "770", img: "img/product/fragrance/fragrance2.jpg", point: "" },
      { name: "핸드 크림", price: "550", img: "img/product/fragrance/fragrance3.jpg", point: "LIMITED ITEM" }
    ]
  }
};

function ensureProductIdsAndMap() {
  const map = new Map();
  Object.entries(allProducts).forEach(([category, pages]) => {
    Object.entries(pages).forEach(([pageNo, items]) => {
      items.forEach((item, idx) => {
        if (!item.id) item.id = `${category}-${pageNo}-${idx + 1}`;
        if (map.has(item.id)) item.id = `${item.id}-${Math.random().toString(16).slice(2, 6)}`;
        map.set(item.id, item);
      });
    });
  });
  return map;
}

const productMap = ensureProductIdsAndMap();

window.allProducts = allProducts;
window.productMap = productMap;




document.addEventListener(
  "click",
  (e) => {
    const a = e.target.closest(".sub_menu_product a[data-category]");
    if (a) return;

    const li = e.target.closest("li.menu_img_title[data-category]");
    if (!li) return;

    const category = li.dataset.category;
    if (!category) return;

    location.href = `product.html?category=${encodeURIComponent(category)}`;
  },
  true
);