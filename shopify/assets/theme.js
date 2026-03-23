/**
 * Montana Shopify Theme - Main JavaScript
 */

(function() {
  'use strict';

  /* =============================
   * Header: Scroll Effect
   * ============================= */
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  /* =============================
   * Mobile Menu Toggle
   * ============================= */
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const desktopNav = document.querySelector('.desktop-nav');
  if (mobileMenuBtn && desktopNav) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = desktopNav.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', isOpen);
      const icon = mobileMenuBtn.querySelector('.menu-icon');
      const closeIcon = mobileMenuBtn.querySelector('.close-icon');
      if (icon && closeIcon) {
        icon.style.display = isOpen ? 'none' : 'block';
        closeIcon.style.display = isOpen ? 'block' : 'none';
      }
    });

    desktopNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        desktopNav.classList.remove('open');
      });
    });
  }

  /* =============================
   * Search Overlay
   * ============================= */
  const searchBtn = document.querySelector('.search-toggle-btn');
  const searchOverlay = document.querySelector('.search-overlay');
  const searchClose = document.querySelector('.search-close-btn');
  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.toggle('active');
      const input = searchOverlay.querySelector('input');
      if (input && searchOverlay.classList.contains('active')) {
        setTimeout(() => input.focus(), 100);
      }
    });
    if (searchClose) {
      searchClose.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
      });
    }
  }

  /* =============================
   * Cart Drawer
   * ============================= */
  const cartBtns = document.querySelectorAll('[data-cart-toggle]');
  const cartDrawer = document.querySelector('.cart-drawer');
  const cartOverlay = document.querySelector('.cart-overlay');
  const cartCloseBtn = document.querySelector('.close-cart-btn');

  function openCart() {
    if (cartDrawer) cartDrawer.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartDrawer) cartDrawer.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cartBtns.forEach(btn => btn.addEventListener('click', openCart));
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  /* =============================
   * Quantity Selectors
   * ============================= */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-qty-change]');
    if (!btn) return;
    const wrapper = btn.closest('[data-qty-wrapper]');
    if (!wrapper) return;
    const input = wrapper.querySelector('input[type="number"], .cart-qty-num, .pd-qty-value');
    if (!input) return;
    const delta = parseInt(btn.dataset.qtyChange, 10);
    let current = parseInt(input.value || input.textContent, 10) || 1;
    current = Math.max(1, Math.min(99, current + delta));
    if (input.tagName === 'INPUT') {
      input.value = current;
    } else {
      input.textContent = current;
    }
  });

  /* =============================
   * Product Detail Modal
   * ============================= */
  const pdModal = document.querySelector('.product-detail-modal');
  const pdOverlay = document.querySelector('.product-detail-overlay');
  const pdCloseBtn = document.querySelector('.pd-close-btn');

  function openProductModal() {
    if (pdModal) pdModal.classList.add('open');
    if (pdOverlay) pdOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeProductModal() {
    if (pdModal) pdModal.classList.remove('open');
    if (pdOverlay) pdOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (pdOverlay) pdOverlay.addEventListener('click', closeProductModal);
  if (pdCloseBtn) pdCloseBtn.addEventListener('click', closeProductModal);

  /* Image gallery navigation */
  document.addEventListener('click', (e) => {
    const navBtn = e.target.closest('.pd-nav-btn');
    if (!navBtn) return;
    const gallery = navBtn.closest('.pd-gallery');
    const mainImg = gallery ? gallery.querySelector('.pd-main-img') : null;
    const thumbs = document.querySelectorAll('.pd-thumb');
    if (!mainImg || !thumbs.length) return;

    let activeIdx = 0;
    thumbs.forEach((t, i) => { if (t.classList.contains('active')) activeIdx = i; });

    if (navBtn.classList.contains('pd-nav-prev')) {
      activeIdx = activeIdx === 0 ? thumbs.length - 1 : activeIdx - 1;
    } else {
      activeIdx = activeIdx === thumbs.length - 1 ? 0 : activeIdx + 1;
    }

    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[activeIdx].classList.add('active');
    const newSrc = thumbs[activeIdx].querySelector('img').src;
    mainImg.src = newSrc;
  });

  document.addEventListener('click', (e) => {
    const thumb = e.target.closest('.pd-thumb');
    if (!thumb) return;
    const mainImg = document.querySelector('.pd-main-img');
    const thumbs = document.querySelectorAll('.pd-thumb');
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    if (mainImg) mainImg.src = thumb.querySelector('img').src;
  });

  /* =============================
   * Add to Cart (Shopify AJAX API)
   * ============================= */
  document.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (!addBtn) return;
    e.preventDefault();
    const variantId = addBtn.dataset.variantId;
    const qtyInput = addBtn.closest('form')?.querySelector('[name="quantity"]');
    const quantity = qtyInput ? parseInt(qtyInput.value, 10) : 1;

    fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: parseInt(variantId, 10), quantity: quantity })
    })
    .then(res => res.json())
    .then(() => {
      updateCartDrawer();
      openCart();
    })
    .catch(err => console.error('Add to cart error:', err));
  });

  function updateCartDrawer() {
    fetch('/cart.js')
      .then(res => res.json())
      .then(cart => {
        const badge = document.querySelector('.cart-badge');
        if (badge) {
          badge.textContent = cart.item_count;
          badge.style.display = cart.item_count > 0 ? 'flex' : 'none';
        }
      });
  }

  /* =============================
   * WhatsApp Order Message Builder
   * ============================= */
  const waOrderBtn = document.querySelector('.checkout-btn-wa');
  if (waOrderBtn) {
    waOrderBtn.addEventListener('click', () => {
      fetch('/cart.js')
        .then(res => res.json())
        .then(cart => {
          let msg = 'Halo Montana! Saya tertarik untuk memesan produk berikut:\n\n';
          cart.items.forEach((item, idx) => {
            msg += `${idx + 1}. *${item.product_title}*\n   Jumlah: ${item.quantity} pcs\n   Harga satuan: Rp ${item.price / 100}\n\n`;
          });
          msg += `Total: ${cart.item_count} item\n\nMohon infokan:\n• Konfirmasi harga & ketersediaan stok\n• Opsi pengiriman & ongkir\n• Harga grosir (jika ada)\n\nTerima kasih! 🙏`;
          const waNumber = document.body.dataset.waNumber || '6281234567890';
          window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank');
        });
    });
  }

})();
