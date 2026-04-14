let currentCategory = 'base';
let currentPage = 1;
let itemsPerPage = 16;

const enabledDetailPids = [
  "base-1-1",
  "cheeks-1-1",
  "eyes-1-1",
  "lips-1-1",
  "nails-1-1",
  "fragrance-1-1"
];

function updateItemsPerPage() {
  if (window.innerWidth <= 670) itemsPerPage = 8;
  else if (window.innerWidth <= 910) itemsPerPage = 12;
  else itemsPerPage = 16;
}

function render() {
  const listEl = document.getElementById('product-list');
  const titleEl = document.getElementById('category-title');
  const pageLinks = document.querySelectorAll('.page-link');

  if (!listEl || !titleEl) return;

  updateItemsPerPage();
  titleEl.innerText = currentCategory.toUpperCase().replace('_', ' ');
  listEl.innerHTML = "";

  const categoryData = window.allProducts[currentCategory] || {};
  const allItems = Object.values(categoryData).flat();
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  if (currentPage > totalPages) currentPage = totalPages || 1;

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = allItems.slice(start, end);

  currentItems.forEach(item => {
    const isClickable = enabledDetailPids.includes(item.id);

    listEl.innerHTML += `
      <li class="product_img ${isClickable ? 'is-clickable' : 'is-disabled'}" data-pid="${item.id}">
        <div><img src="${item.img}" alt="${item.name}" /></div>
        <div class="product_name">${item.name}</div>
        <div class="product_price">
          ¥${item.price} <span style="font-size: 12px">(세금 포함)</span>
        </div>
        <div class="product_point">${item.point}</div>
      </li>
    `;
  });

  pageLinks.forEach((link, index) => {
    const pageNum = index + 1;
    link.style.display = pageNum <= totalPages ? "inline-block" : "none";
    link.classList.toggle('active', pageNum === currentPage);
  });
}

document.querySelectorAll('.sub_menu_product a, .menu_img_title').forEach(link => {
  link.addEventListener('click', function(e) {
    const category = this.dataset.category;
    if (!category) return;

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
    const categoryData = window.allProducts[currentCategory] || {};
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

document.addEventListener('click', (e) => {
  const li = e.target.closest('li.product_img');
  if (!li) return;

  const pid = li.dataset.pid;
  if (!pid) return;

  if (!enabledDetailPids.includes(pid)) {
    e.preventDefault();
    return;
  }

  window.location.href = `product_detail.html?pid=${encodeURIComponent(pid)}`;
});

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const categoryParam = params.get('category');
  if (categoryParam && window.allProducts[categoryParam]) currentCategory = categoryParam;
  render();
});