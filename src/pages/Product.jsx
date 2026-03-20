import { useState } from 'react';
import { Search, Filter, ShieldCheck, Tag, SlidersHorizontal } from 'lucide-react';
import './Product.css';

export default function Product({ setPage, addToCart, openProductDetail }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeNeed, setActiveNeed] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Produk Baru', 'Paket Bundel', 'Kalkulator', 'Spidol', 'Pulpen', 'Gunting', 'Lem'];
  const needs = ['Semua', 'Sekolah', 'Kantor', 'Rumah', 'Bisnis'];

  const products = [
    { id: 1, name: 'MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P', img: '/MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P.png', price: 'Rp 0', tag: 'Terlaris', category: 'Kalkulator', needs: ['Kantor', 'Bisnis', 'Sekolah', 'Rumah'], variants: ['Standard'], description: 'Kalkulator 8 digit dengan layar besar dan dual power (solar + baterai).' },
    { id: 2, name: 'MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail', img: '/MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail.png', price: 'Rp 0', tag: 'Promo', category: 'Spidol', needs: ['Kantor', 'Sekolah', 'Bisnis', 'Rumah'], variants: ['Hitam', 'Merah', 'Biru'], description: 'Spidol permanen round tip dengan tinta tahan lama.' },
    { id: 3, name: 'MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail', img: '/MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail.webp', price: 'Rp 0', tag: 'Terbaru', category: 'Lem', needs: ['Sekolah', 'Kantor', 'Rumah'], variants: ['25g', '35g'], description: 'Lem batang dengan daya rekat kuat dan tidak meninggalkan residu.' },
    { id: 4, name: 'MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail', img: '/MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail.webp', price: 'Rp 0', tag: 'Promo', category: 'Gunting', needs: ['Kantor', 'Sekolah', 'Rumah', 'Bisnis'], variants: ['Standard'], description: 'Gunting stainless steel multipurpose yang kuat, tajam, dan anti karat.' },
  ];

  const filteredProducts = products
    .filter(p => activeCategory === 'Semua' || p.category === activeCategory)
    .filter(p => activeNeed === 'Semua' || p.needs.includes(activeNeed))
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 p.category.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <main className="product-page">
      
      {/* Proof Strip */}
      <div className="proof-strip">
        <span>
          🔥 Gratis Ongkir untuk Pembelian Grosir — Hubungi kami untuk penawaran spesial!
        </span>
      </div>

      {/* Promo Banner */}
      <div className="container mt-4 mb-2">
        <div className="promo-banner" onClick={() => setActiveCategory('Produk Baru')}>
          <img src="/produk-terbaru.png" alt="Promo Produk Terbaru Montana" />
        </div>
      </div>

      <div className="container product-layout">
        
        {/* Sidebar Filters */}
        <aside className="product-sidebar">
          <div className="sidebar-search mb-4">
            <Search size={16} className="sidebar-search-icon" />
            <input 
              type="text" 
              placeholder="Cari produk..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group mb-4">
            <h3 className="filter-header">
              <SlidersHorizontal size={16} />
              Kategori
            </h3>
            <ul className="filter-list">
              {categories.map(cat => (
                <li key={cat} 
                    className={activeCategory === cat ? 'active' : ''}
                    onClick={() => setActiveCategory(cat)}>
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3 className="filter-header">
              <Tag size={16} />
              Kebutuhan
            </h3>
            <ul className="filter-list">
              {needs.map(need => (
                <li key={need} 
                    className={activeNeed === need ? 'active' : ''}
                    onClick={() => setActiveNeed(need)}>
                  {need}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Product Grid */}
        <section className="product-main">
          
          <div className="product-header">
            <div>
              <h2 className="mb-0">{activeCategory === 'Semua' ? 'Semua Produk' : activeCategory}</h2>
              <p className="product-count">{filteredProducts.length} produk ditemukan</p>
            </div>
            <div className="sort-dropdown">
              <select defaultValue="featured">
                <option value="featured">Unggulan</option>
                <option value="price-low">Harga: Rendah → Tinggi</option>
                <option value="price-high">Harga: Tinggi → Rendah</option>
                <option value="new">Terbaru</option>
              </select>
            </div>
          </div>

          <div className="catalog-grid stagger-children">
            {filteredProducts.map(product => (
              <div className="catalog-card hover-lift" key={product.id} onClick={() => openProductDetail(product)}>
                {product.tag && <span className={`catalog-badge badge-${product.tag.toLowerCase()}`}>{product.tag}</span>}
                <div className="catalog-img">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="catalog-info">
                  <span className="catalog-category">{product.category}</span>
                  <h4>{product.name}</h4>
                  <div className="catalog-price-row">
                    <span className="catalog-price">{product.price}</span>
                  </div>
                  <button className="btn btn-outline btn-sm catalog-btn" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>
                    Tambah +
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn next">Selanjutnya »</button>
          </div>

        </section>
      </div>
    </main>
  );
}
