/* ==========================================================================
   BOVA ADVENTURA - HUMAN-CENTRIC & HIGH-CONVERTING CORE LOGIC & DATASET
   ========================================================================== */

// 1. PRODUCT DATABASE WITH HIGH-CONVERTING & HUMAN-CENTRIC COPY
const PRODUCTS = [
  {
    id: 'bova-001',
    name: 'Raw African Black Soap (240g)',
    category: 'skincare',
    size: '240g Bar',
    priceNGN: 4500,
    origPriceNGN: 5500,
    priceUSD: 6.00,
    origPriceUSD: 7.50,
    image: 'Assets/African-Black-Soap-240g-BOVA-Aventura-1024x978.jpeg',
    rating: 5.0,
    reviews: 142,
    badge: '🔥 Customer Favorite',
    badgeType: 'sale',
    description: 'Handcrafted by West African women using an ancestral recipe of roasted cocoa pod ash, palm kernel oil, and raw shea butter. Naturally calms stubborn breakouts, fades dark spots, and reveals soft, radiant skin without stripping your moisture barrier.',
    ingredients: 'Roasted Cocoa Pod Ash, Plantain Peel, Palm Kernel Oil, Raw Unrefined Shea Butter, Distilled Spring Water',
    howToUse: 'Lather gently between wet palms into a creamy foam. Massage over face and body for 30-60 seconds, then rinse with cool water. Follow immediately with raw shea butter to lock in glow.',
    guarantee: '30-Day Clear Skin Guarantee • 100% Chemical-Free'
  },
  {
    id: 'bova-002',
    name: 'Unrefined Grade-A Shea Butter (120g)',
    category: 'skincare',
    size: '120g Jar',
    priceNGN: 3500,
    origPriceNGN: 4000,
    priceUSD: 4.50,
    origPriceUSD: 5.25,
    image: 'Assets/BOVA-Aventura-Unrefined-Shea-Butter-120g-1024x961.jpeg',
    rating: 4.9,
    reviews: 98,
    badge: '✨ 100% Pure & Raw',
    badgeType: 'new',
    description: 'Cold-pressed from wild shea nuts harvested in Oyo State. Free from chemical bleaching or deodorizers. Packed with vitamins A, E & F to heal dry patches, soothe eczema, erase stretch marks, and nourish your skin deeply.',
    ingredients: '100% Raw Unrefined Butyrospermum Parkii (Shea) Butter (Zero Additives)',
    howToUse: 'Melt a small pea-sized amount between your fingertips and smooth onto damp skin, lips, or hair ends after bathing.',
    guarantee: 'Fresh Harvest Promise • Zero Bleaching'
  },
  {
    id: 'bova-003',
    name: 'Pure Wild Harvest Raw Honey (250ml)',
    category: 'food',
    size: '250ml Glass Jar',
    priceNGN: 3500,
    origPriceNGN: 4200,
    priceUSD: 4.50,
    origPriceUSD: 5.50,
    image: 'Assets/Pure-Honey-250ml-Honey-Price-3500-709x1024.jpeg',
    rating: 5.0,
    reviews: 184,
    badge: '🐝 100% Raw Harvest',
    badgeType: 'best',
    description: 'Directly bottled from native forest hives in Nigeria. Never heated, never diluted with corn syrup. Loaded with active enzymes, natural antioxidants, and anti-inflammatory nutrients for immunity, throat relief, or a hydrating face mask.',
    ingredients: '100% Unfiltered Pure Wild Harvest Honey',
    howToUse: 'Take a spoonful daily for immune boost, drizzle over warm tea, or apply topically as a 15-minute soothing glow mask.',
    guarantee: '100% Purity Verified • Never Heated'
  },
  {
    id: 'bova-004',
    name: 'Unrefined Shea Butter Jumbo Pack (500g)',
    category: 'skincare',
    size: '500g Jumbo Jar',
    priceNGN: 6800,
    origPriceNGN: 8000,
    priceUSD: 9.00,
    origPriceUSD: 10.50,
    image: 'Assets/Unrefined-Shea-Butter-2.jpeg',
    rating: 4.9,
    reviews: 76,
    badge: '💰 Family Value (Save 15%)',
    badgeType: 'sale',
    description: 'Our generous family size jar of unrefined Grade-A Shea Butter. Essential for full-body moisture, baby skin care, pregnancy belly hydration, and DIY natural beauty blending.',
    ingredients: '100% Raw Unrefined Shea Butter',
    howToUse: 'Apply liberally all over the body, paying extra attention to dry elbows, knees, heels, and stretch-prone areas.',
    guarantee: 'Best Value Per Gram • Long-Lasting Moisture'
  },
  {
    id: 'bova-005',
    name: 'Ultimate Natural Radiance Trio',
    category: 'bundles',
    size: '3-Piece Set',
    priceNGN: 10500,
    origPriceNGN: 12500,
    priceUSD: 13.50,
    origPriceUSD: 16.00,
    image: 'Assets/African-Black-Soap-240g-BOVA-Aventura-1024x978.jpeg',
    rating: 5.0,
    reviews: 215,
    badge: '🏆 #1 Best Selling Bundle',
    badgeType: 'sale',
    description: 'The complete 3-step natural skin transformation: 240g Raw Black Soap to cleanse, 120g Shea Butter to lock in moisture, and 250ml Raw Honey for deep skin soothing. Everything your skin needs for a confident, healthy glow.',
    ingredients: 'Includes Black Soap (240g), Raw Shea Butter (120g), and Pure Wild Honey (250ml)',
    howToUse: 'Wash daily with Black Soap, apply Honey as a weekly mask, and lock in moisture daily with Shea Butter.',
    guarantee: 'Save ₦2,000 / $2.50 Instantly • Free Shipping Eligible'
  },
  {
    id: 'bova-006',
    name: 'Clear Skin Detox Combo',
    category: 'bundles',
    size: '2-Piece Set',
    priceNGN: 7200,
    origPriceNGN: 8700,
    priceUSD: 9.50,
    origPriceUSD: 11.50,
    image: 'Assets/Pure-Honey-250ml-Honey-Price-3500-709x1024.jpeg',
    rating: 4.9,
    reviews: 89,
    badge: '⭐ Blemish Control Duo',
    badgeType: 'new',
    description: 'Powerful anti-bacterial combination designed specifically for acne-prone skin and hyperpigmentation. Cleanses pores deeply without harsh chemical drying.',
    ingredients: 'Raw African Black Soap 240g + Pure Wild Honey 250ml',
    howToUse: 'Cleanse with soap morning and night. Apply honey mask twice weekly for 15 minutes before rinsing.',
    guarantee: 'Targeted Acne Care • Visible Glow in 14 Days'
  }
];

// 2. STATE MANAGEMENT
let state = {
  currency: 'NGN',
  cart: JSON.parse(localStorage.getItem('bova_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('bova_wishlist')) || [],
  viewMode: 'grid',
  filters: {
    search: '',
    category: 'all',
    priceRange: 'all',
    size: 'all'
  },
  sortBy: 'featured',
  activeModalProduct: null
};

// 3. CURRENCY FORMATTER
function formatPrice(amountNGN, amountUSD) {
  if (state.currency === 'USD') {
    const val = amountUSD || (amountNGN / 750);
    return `$${val.toFixed(2)}`;
  } else {
    return `₦ ${amountNGN.toLocaleString()}`;
  }
}

// 4. INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderShop();
  updateHeaderCounts();
  setupEventListeners();
  setupBundleBuilder();
  initScrollReveal();
});


// 5. EVENT LISTENERS SETUP
function setupEventListeners() {
  const currencySelect = document.getElementById('currency-select');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      renderShop();
      renderCartDrawer();
      renderWishlistDrawer();
      setupBundleBuilder();
    });
  }

  const btnGrid = document.getElementById('btn-view-grid');
  const btnList = document.getElementById('btn-view-list');
  const container = document.getElementById('products-container');

  if (btnGrid && btnList && container) {
    btnGrid.addEventListener('click', () => {
      state.viewMode = 'grid';
      btnGrid.classList.add('active');
      btnList.classList.remove('active');
      container.classList.remove('list-view');
      container.classList.add('grid-view');
    });

    btnList.addEventListener('click', () => {
      state.viewMode = 'list';
      btnList.classList.add('active');
      btnGrid.classList.remove('active');
      container.classList.remove('grid-view');
      container.classList.add('list-view');
    });
  }

  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.filters.search = e.target.value.toLowerCase().trim();
      renderShop();
    });
  }

  document.querySelectorAll('input[name="filter-category"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.filters.category = e.target.value;
      renderShop();
    });
  });

  document.querySelectorAll('input[name="filter-price"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      state.filters.priceRange = e.target.value;
      renderShop();
    });
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderShop();
    });
  }

  const btnReset = document.getElementById('btn-reset-filters');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      state.filters = { search: '', category: 'all', priceRange: 'all', size: 'all' };
      if (searchInput) searchInput.value = '';
      document.querySelector('input[name="filter-category"][value="all"]').checked = true;
      document.querySelector('input[name="filter-price"][value="all"]').checked = true;
      renderShop();
    });
  }

  const backdrop = document.getElementById('overlay-backdrop');
  if (backdrop) backdrop.addEventListener('click', closeAllOverlays);

  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);

  const wishlistToggleBtn = document.getElementById('wishlist-toggle-btn');
  if (wishlistToggleBtn) wishlistToggleBtn.addEventListener('click', openWishlistDrawer);

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('.btn-close-drawer, .btn-close-modal').forEach(btn => {
    btn.addEventListener('click', closeAllOverlays);
  });
}



// 6. FILTER & SORT LOGIC
function getFilteredProducts() {
  return PRODUCTS.filter(product => {
    if (state.filters.search) {
      const matchName = product.name.toLowerCase().includes(state.filters.search);
      const matchDesc = product.description.toLowerCase().includes(state.filters.search);
      if (!matchName && !matchDesc) return false;
    }

    if (state.filters.category !== 'all') {
      if (product.category !== state.filters.category) return false;
    }

    if (state.filters.priceRange !== 'all') {
      const price = product.priceNGN;
      if (state.filters.priceRange === '0-4000' && price > 4000) return false;
      if (state.filters.priceRange === '4000-7000' && (price <= 4000 || price > 7000)) return false;
      if (state.filters.priceRange === '7000+' && price <= 7000) return false;
    }

    return true;
  }).sort((a, b) => {
    if (state.sortBy === 'price-low') return a.priceNGN - b.priceNGN;
    if (state.sortBy === 'price-high') return b.priceNGN - a.priceNGN;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });
}

// 7. RENDER SHOP PRODUCTS
function renderShop() {
  const container = document.getElementById('products-container');
  const resultsCount = document.getElementById('results-count');

  if (!container) return;

  const filtered = getFilteredProducts();

  if (resultsCount) {
    resultsCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} Natural Essentials`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #fff; border-radius: 8px; border: 1px solid var(--color-border);">
        <i class="fi ti-search" style="font-size: 2.5rem; color: var(--color-primary); margin-bottom: 12px; display: block;"></i>
        <h3 class="font-serif" style="font-size: 1.4rem; color: var(--color-dark);">No Products Match Your Search</h3>
        <p style="color: var(--color-text-muted); margin-top: 6px;">Try adjusting your filter search criteria or view all items.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    const isWishlisted = state.wishlist.some(item => item.id === product.id);
    const badgeClass = product.badgeType === 'sale' ? 'badge-sale' : (product.badgeType === 'new' ? 'badge-new' : 'badge-best');

    return `
      <div class="product-card" data-id="${product.id}">
        <div class="product-img-box">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <div class="product-badges">
            <span class="badge ${badgeClass}">${product.badge}</span>
          </div>
          <div class="product-actions-bar">
            <button class="action-btn btn-quick-view" onclick="openQuickView('${product.id}')" title="Quick Preview">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button class="action-btn btn-wishlist-toggle ${isWishlisted ? 'active' : ''}" onclick="toggleWishlist('${product.id}')" title="${isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>
        <div class="product-content">
          <span class="product-category">${product.category} • ${product.size}</span>
          <h3 class="product-title"><a href="javascript:void(0)" onclick="openQuickView('${product.id}')">${product.name}</a></h3>
          <div class="rating-stars">
            ${'★'.repeat(Math.floor(product.rating))} ${product.rating % 1 !== 0 ? '½' : ''}
            <span class="rating-count">(${product.reviews} verified reviews)</span>
          </div>
          <div class="product-price-box">
            <span class="current-price">${formatPrice(product.priceNGN, product.priceUSD)}</span>
            ${product.origPriceNGN ? `<span class="original-price">${formatPrice(product.origPriceNGN, product.origPriceUSD)}</span>` : ''}
          </div>
          <button class="btn-add-cart-card" onclick="addToCart('${product.id}', 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// 8. CART & WISHLIST LOGIC
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += qty;
  } else {
    state.cart.push({ ...product, qty });
  }

  saveCart();
  updateHeaderCounts();
  showToast(`Added <strong>${product.name}</strong> to your Cart!`);
  openCartDrawer();
}

function updateCartQty(productId, delta) {
  const index = state.cart.findIndex(item => item.id === productId);
  if (index > -1) {
    state.cart[index].qty += delta;
    if (state.cart[index].qty <= 0) {
      state.cart.splice(index, 1);
    }
    saveCart();
    updateHeaderCounts();
    renderCartDrawer();
  }
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCart();
  updateHeaderCounts();
  renderCartDrawer();
  showToast('Item removed from Cart');
}

function toggleWishlist(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const index = state.wishlist.findIndex(item => item.id === productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed <strong>${product.name}</strong> from Wishlist`);
  } else {
    state.wishlist.push(product);
    showToast(`Saved <strong>${product.name}</strong> to Wishlist!`);
  }

  saveWishlist();
  updateHeaderCounts();
  renderShop();
}

function saveCart() {
  localStorage.setItem('bova_cart', JSON.stringify(state.cart));
}

function saveWishlist() {
  localStorage.setItem('bova_wishlist', JSON.stringify(state.wishlist));
}

function updateHeaderCounts() {
  const cartCountEl = document.getElementById('cart-count');
  const wishlistCountEl = document.getElementById('wishlist-count');

  const totalCartQty = state.cart.reduce((acc, item) => acc + item.qty, 0);
  if (cartCountEl) cartCountEl.textContent = totalCartQty;

  if (wishlistCountEl) wishlistCountEl.textContent = state.wishlist.length;
}

// 9. OVERLAY & DRAWER RENDERERS
function openCartDrawer() {
  renderCartDrawer();
  document.getElementById('overlay-backdrop')?.classList.add('active');
  document.getElementById('cart-drawer')?.classList.add('active');
}

function openWishlistDrawer() {
  renderWishlistDrawer();
  document.getElementById('overlay-backdrop')?.classList.add('active');
  document.getElementById('wishlist-drawer')?.classList.add('active');
}

function closeAllOverlays() {
  document.getElementById('overlay-backdrop')?.classList.remove('active');
  document.querySelectorAll('.drawer, .modal').forEach(el => el.classList.remove('active'));
}

function renderCartDrawer() {
  const bodyEl = document.getElementById('cart-drawer-body');
  const subtotalEl = document.getElementById('cart-subtotal');

  if (!bodyEl) return;

  if (state.cart.length === 0) {
    bodyEl.innerHTML = `
      <div style="text-align: center; padding: 50px 0; color: var(--color-text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; color: var(--color-primary);"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        <p style="font-weight: 700; font-size: 1.05rem; color: var(--color-dark);">Your Shopping Bag is Empty</p>
        <p style="font-size: 0.88rem; margin-top: 6px; color: var(--color-text-muted);">Treat your skin to handcrafted Nigerian butter, black soap & raw honey.</p>
        <a href="shop.html" class="btn-checkout" style="margin-top: 20px; display: inline-flex; width: auto; padding: 12px 28px;">Browse Products →</a>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatPrice(0, 0);
    return;
  }

  let subtotalNGN = 0;
  let subtotalUSD = 0;

  bodyEl.innerHTML = `
    <div class="cart-items-list">
      ${state.cart.map(item => {
        subtotalNGN += item.priceNGN * item.qty;
        subtotalUSD += (item.priceUSD || (item.priceNGN / 750)) * item.qty;

        return `
          <div class="cart-item">
            <img class="cart-item-img" src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
              <span class="cart-item-title">${item.name}</span>
              <span class="cart-item-price">${formatPrice(item.priceNGN, item.priceUSD)}</span>
              <div class="cart-item-controls">
                <div class="qty-picker">
                  <button class="qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
                  <input class="qty-input" type="text" value="${item.qty}" readonly>
                  <button class="qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
                </div>
                <button class="btn-remove-item" onclick="removeFromCart('${item.id}')">Remove</button>
              </div>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(subtotalNGN, subtotalUSD);
  }
}

function renderWishlistDrawer() {
  const bodyEl = document.getElementById('wishlist-drawer-body');
  if (!bodyEl) return;

  if (state.wishlist.length === 0) {
    bodyEl.innerHTML = `
      <div style="text-align: center; padding: 50px 0; color: var(--color-text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; color: var(--color-primary);"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <p style="font-weight: 700; font-size: 1.05rem; color: var(--color-dark);">Your Wishlist is Empty</p>
        <p style="font-size: 0.88rem; margin-top: 6px;">Tap the heart icon on any product to save your favorites!</p>
      </div>
    `;
    return;
  }

  bodyEl.innerHTML = `
    <div class="cart-items-list">
      ${state.wishlist.map(item => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.image}" alt="${item.name}">
          <div class="cart-item-details">
            <span class="cart-item-title">${item.name}</span>
            <span class="cart-item-price">${formatPrice(item.priceNGN, item.priceUSD)}</span>
            <div style="margin-top: 10px; display: flex; gap: 8px;">
              <button class="btn-add-cart-card" style="margin:0; padding:6px 12px; font-size:0.75rem;" onclick="addToCart('${item.id}', 1)">
                Add to Cart
              </button>
              <button class="btn-remove-item" onclick="toggleWishlist('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// 10. QUICK VIEW MODAL WITH CONVERSION TRUST SIGNALS
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeModalProduct = product;
  const modalEl = document.getElementById('quickview-modal');
  const modalContentEl = document.getElementById('quickview-modal-content');

  if (!modalEl || !modalContentEl) return;

  modalContentEl.innerHTML = `
    <div class="modal-grid">
      <div class="modal-img-area">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-details-area">
        <span class="product-category">${product.category} • ${product.size}</span>
        <h2 class="modal-title">${product.name}</h2>
        <div class="rating-stars">
          ${'★'.repeat(Math.floor(product.rating))} ${product.rating % 1 !== 0 ? '½' : ''}
          <span class="rating-count">(${product.reviews} verified customer reviews)</span>
        </div>
        <div class="modal-price-box">
          <span class="current-price" style="font-size: 1.6rem;">${formatPrice(product.priceNGN, product.priceUSD)}</span>
          ${product.origPriceNGN ? `<span class="original-price" style="font-size: 1.1rem;">${formatPrice(product.origPriceNGN, product.origPriceUSD)}</span>` : ''}
        </div>
        <p class="modal-description">${product.description}</p>
        
        <div style="margin-bottom: 16px; background: var(--color-bg-subtle); padding: 12px 16px; border-radius: 6px; border-left: 3px solid var(--color-primary);">
          <strong style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary); display: block; margin-bottom: 2px;">Pure Ingredients:</strong>
          <span style="font-size: 0.88rem; color: var(--color-text-main); font-weight: 500;">${product.ingredients}</span>
        </div>

        <div style="margin-bottom: 20px;">
          <strong style="font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-dark); display: block; margin-bottom: 4px;">How to Apply:</strong>
          <p style="font-size: 0.85rem; color: var(--color-text-muted);">${product.howToUse}</p>
        </div>

        <div style="font-size: 0.78rem; color: var(--color-success); font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 6px;">
          <span>✓ In Stock • Fresh Batch Harvest • Ships within 24 Hours</span>
        </div>

        <div style="display: flex; gap: 14px; align-items: center; margin-top: auto;">
          <div class="qty-picker" style="height: 48px; padding: 0 8px;">
            <button class="qty-btn" style="width: 32px; height: 32px; font-size: 1.1rem;" onclick="adjustModalQty(-1)">-</button>
            <input id="modal-qty-input" class="qty-input" type="text" value="1" readonly style="font-size: 1rem; width: 40px;">
            <button class="qty-btn" style="width: 32px; height: 32px; font-size: 1.1rem;" onclick="adjustModalQty(1)">+</button>
          </div>
          <button class="btn-checkout" style="height: 48px; margin: 0; flex: 1;" onclick="addModalItemToCart('${product.id}')">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('overlay-backdrop')?.classList.add('active');
  modalEl.classList.add('active');
}

function adjustModalQty(delta) {
  const input = document.getElementById('modal-qty-input');
  if (!input) return;
  let current = parseInt(input.value) || 1;
  current = Math.max(1, current + delta);
  input.value = current;
}

function addModalItemToCart(productId) {
  const input = document.getElementById('modal-qty-input');
  const qty = parseInt(input?.value) || 1;
  addToCart(productId, qty);
  closeAllOverlays();
}

// 11. SIGNATURE BUNDLE BUILDER
function setupBundleBuilder() {
  const container = document.getElementById('bundle-grid');
  if (!container) return;

  const bundleItems = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]];

  container.innerHTML = bundleItems.map((item) => `
    <div class="bundle-item-card selected" data-id="${item.id}" onclick="toggleBundleItem(this)">
      <input type="checkbox" class="bundle-checkbox" checked onclick="event.stopPropagation(); recalculateBundle();">
      <img class="bundle-img" src="${item.image}" alt="${item.name}">
      <div class="bundle-info">
        <div class="bundle-name">${item.name}</div>
        <div class="bundle-price">${formatPrice(item.priceNGN, item.priceUSD)}</div>
      </div>
    </div>
  `).join('');

  recalculateBundle();
}

function toggleBundleItem(cardEl) {
  const checkbox = cardEl.querySelector('.bundle-checkbox');
  checkbox.checked = !checkbox.checked;
  cardEl.classList.toggle('selected', checkbox.checked);
  recalculateBundle();
}

function recalculateBundle() {
  const selectedCards = document.querySelectorAll('.bundle-item-card.selected');
  let totalNGN = 0;
  let totalUSD = 0;

  selectedCards.forEach(card => {
    const id = card.getAttribute('data-id');
    const p = PRODUCTS.find(prod => prod.id === id);
    if (p) {
      totalNGN += p.priceNGN;
      totalUSD += (p.priceUSD || (p.priceNGN / 750));
    }
  });

  // Apply 10% Bundle Discount
  totalNGN = Math.round(totalNGN * 0.9);
  totalUSD = totalUSD * 0.9;

  const priceEl = document.getElementById('bundle-total-price');
  if (priceEl) {
    priceEl.textContent = formatPrice(totalNGN, totalUSD);
  }
}

function addBundleToCart() {
  const selectedCards = document.querySelectorAll('.bundle-item-card.selected');
  if (selectedCards.length === 0) {
    showToast('Please select at least 1 item for your bundle.');
    return;
  }

  selectedCards.forEach(card => {
    const id = card.getAttribute('data-id');
    addToCart(id, 1);
  });

  showToast('Custom Bundle added to Cart with 10% Discount!');
}

// 12. CHECKOUT & ORDER BUMP FLOW
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast('Your Cart is empty!');
    return;
  }

  closeAllOverlays();

  const modalEl = document.getElementById('checkout-modal');
  const modalContentEl = document.getElementById('checkout-modal-content');
  if (!modalEl || !modalContentEl) return;

  let totalNGN = state.cart.reduce((acc, i) => acc + i.priceNGN * i.qty, 0);
  let totalUSD = state.cart.reduce((acc, i) => acc + (i.priceUSD || i.priceNGN / 750) * i.qty, 0);

  modalContentEl.innerHTML = `
    <div class="checkout-modal">
      <h2 class="font-serif" style="font-size: 1.8rem; color: var(--color-dark); margin-bottom: 4px;">Express Direct Checkout</h2>
      <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 20px;">Review your items and complete your order for fast nationwide dispatch.</p>

      <div style="background: var(--color-bg-subtle); padding: 18px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--color-border);">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 12px; color: var(--color-dark);">Items in Your Order</h4>
        ${state.cart.map(item => `
          <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 6px;">
            <span>${item.name} x ${item.qty}</span>
            <strong style="color: var(--color-dark);">${formatPrice(item.priceNGN * item.qty, item.priceUSD * item.qty)}</strong>
          </div>
        `).join('')}
        <div style="border-top: 1px solid var(--color-border); padding-top: 10px; margin-top: 10px; display: flex; justify-content: space-between; font-size: 1.15rem; font-weight: 800;">
          <span>Total:</span>
          <span style="color: var(--color-primary);">${formatPrice(totalNGN, totalUSD)}</span>
        </div>
      </div>

      <!-- High Converting Order Bump -->
      <div class="order-bump-box">
        <div class="order-bump-title">⚡ Special One-Time Offer: Add Pure Honey (250ml) for 20% Off!</div>
        <p style="font-size: 0.82rem; color: #d1d5db;">Boost your skin glow from the inside out with unpasteurized wild harvest honey.</p>
        <div class="order-bump-item">
          <img src="Assets/Pure-Honey-250ml-Honey-Price-3500-709x1024.jpeg" alt="Honey">
          <div style="flex: 1;">
            <div style="font-size: 0.88rem; font-weight: 700;">Pure Natural Honey (250ml)</div>
            <div style="font-size: 0.85rem; color: var(--color-primary-light);">₦ 2,800 (Reg ₦ 3,500)</div>
          </div>
          <button style="padding: 8px 14px; background: var(--color-primary); color: #fff; border-radius: 4px; font-weight: 700; font-size: 0.78rem;" onclick="addToCart('bova-003', 1); openCheckoutModal();">
            + Add to Order
          </button>
        </div>
      </div>

      <!-- Shipping Form -->
      <form onsubmit="handlePlaceOrder(event)" style="display: flex; flex-direction: column; gap: 14px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <input type="text" placeholder="First Name" required style="padding: 12px; border: 1px solid var(--color-border); border-radius: 4px;">
          <input type="text" placeholder="Last Name" required style="padding: 12px; border: 1px solid var(--color-border); border-radius: 4px;">
        </div>
        <input type="email" placeholder="Email Address" required style="padding: 12px; border: 1px solid var(--color-border); border-radius: 4px;">
        <input type="text" placeholder="Delivery Address & City (e.g. Lagos, Abuja, Ibadan)" required style="padding: 12px; border: 1px solid var(--color-border); border-radius: 4px;">
        <button type="submit" class="btn-checkout" style="margin-top: 10px; height: 50px;">
          Confirm Order (${formatPrice(totalNGN, totalUSD)})
        </button>
      </form>
    </div>
  `;

  document.getElementById('overlay-backdrop')?.classList.add('active');
  modalEl.classList.add('active');
}

function handlePlaceOrder(event) {
  event.preventDefault();
  closeAllOverlays();

  const modalEl = document.getElementById('quickview-modal');
  const modalContentEl = document.getElementById('quickview-modal-content');
  if (!modalEl || !modalContentEl) return;

  const orderNum = 'BOVA-' + Math.floor(100000 + Math.random() * 900000);

  modalContentEl.innerHTML = `
    <div style="padding: 60px 40px; text-align: center;">
      <div style="width: 70px; height: 70px; background: var(--color-primary-light); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 2.2rem; font-weight: 800;">
        ✓
      </div>
      <h2 class="font-serif" style="font-size: 2.2rem; color: var(--color-dark); margin-bottom: 8px;">Order Confirmed!</h2>
      <p style="color: var(--color-text-muted); font-size: 0.98rem; margin-bottom: 16px;">Thank you for trusting <strong>BOVA Adventura</strong>. Your journey to pure, healthy skin starts today!</p>
      
      <div style="background: var(--color-bg-subtle); padding: 18px; border-radius: 8px; max-width: 420px; margin: 0 auto 24px; font-size: 0.92rem; border: 1px solid var(--color-border);">
        <strong>Order Reference:</strong> <span style="color: var(--color-primary); font-weight: 800;">${orderNum}</span><br>
        <strong>Status:</strong> Preparing for dispatch 📦
      </div>

      <button class="btn-checkout" style="max-width: 240px; margin: 0 auto;" onclick="clearCartAndClose()">
        Back to Store
      </button>
    </div>
  `;

  document.getElementById('overlay-backdrop')?.classList.add('active');
  modalEl.classList.add('active');
}

function clearCartAndClose() {
  state.cart = [];
  saveCart();
  updateHeaderCounts();
  closeAllOverlays();
}

// 13. TOAST NOTIFICATIONS
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--color-primary); flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// 14. FAQ ACCORDION TOGGLE
function toggleFaq(buttonEl) {
  const item = buttonEl.closest('.faq-item');
  if (!item) return;
  const isAlreadyActive = item.classList.contains('active');
  
  // Close all open items
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('active'));
  
  // If wasn't active, open it
  if (!isAlreadyActive) {
    item.classList.add('active');
  }
}

// 15. SCROLL TRIGGER REVEAL ANIMATIONS

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-scale');
  if (!revealElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}


