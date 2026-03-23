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
    {
      id: 1,
      name: 'MONTANA Kalkulator 8 Digit Big Display 2 Power MTC-200 P',
      img: '/katalog/kalkulator-mtc200p.png',
      images: [
        '/katalog/kalkulator-mtc200p.png'
      ],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Terlaris',
      category: 'Kalkulator',
      needs: ['Kantor', 'Bisnis', 'Sekolah', 'Rumah'],
      variants: ['Standard'],
      description: 'Kalkulator desktop 8 digit dengan layar besar yang mudah dibaca. Dilengkapi sistem dual power (solar + baterai) sehingga tetap bisa digunakan di kondisi pencahayaan apa pun. Tombol responsif dengan feedback tekan nyaman untuk penghitungan cepat dan akurat. Bonus cover pelindung agar tetap awet di dalam tas atau meja kerja.\n\n✅ Layar besar, angka jelas\n✅ Dual power: solar & baterai\n✅ Tombol responsif & nyaman\n✅ Bonus cover pelindung\n✅ Cocok untuk kantor, sekolah, dan bisnis'
    },
    {
      id: 2,
      name: 'MONTANA Spidol Permanen Round Tip Permanent Marker MP-12',
      img: '/katalog/spidol-mp12.png',
      images: [
        '/katalog/spidol-mp12.png'
      ],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Promo',
      category: 'Spidol',
      needs: ['Kantor', 'Sekolah', 'Bisnis', 'Rumah'],
      variants: ['Standard'],
      description: 'Spidol permanen dengan ujung round tip yang menghasilkan garis tebal dan jelas di berbagai permukaan: kertas, plastik, kayu, kain, hingga logam. Tinta non-toxic, cepat kering, dan tahan air — tidak luntur walau terkena hujan atau basah. Tersedia dalam 3 warna: Hitam, Merah, dan Biru. Dijual satuan (retail) maupun per box (12 pcs).\n\n✅ Tinta permanen, tahan air & anti luntur\n✅ Non-toxic, aman digunakan\n✅ Bisa di kertas, plastik, kayu, kain, logam\n✅ Cepat kering, tidak mudah pudar\n✅ Tersedia 3 warna pilihan'
    },
    {
      id: 3,
      name: 'MONTANA Glue Stick Lem Batang 25g Perekat Serbaguna GS-25',
      img: '/katalog/lem-gs25.webp',
      images: [
        '/katalog/lem-gs25.webp'
      ],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Terbaru',
      category: 'Lem',
      needs: ['Sekolah', 'Kantor', 'Rumah'],
      variants: ['Standard'],
      description: 'Lem batang (glue stick) dengan formula excellent adhesive yang memberikan daya rekat kuat namun tetap bersih — tidak meninggalkan residu atau bekas lengket di tangan. Ideal untuk menempel kertas, karton, foto, dan kerajinan tangan. Tekstur lembut dan mudah dioleskan, cocok untuk anak-anak maupun pekerjaan kantor. Tersedia ukuran 25g dan 35g.\n\n✅ Daya rekat kuat, hasil rapi\n✅ Tanpa residu, bersih di tangan\n✅ Aman untuk anak-anak (non-toxic)\n✅ Mudah dioleskan, tidak kering cepat\n✅ Ideal untuk sekolah, kantor & kerajinan'
    },
    {
      id: 4,
      name: 'MONTANA Gunting Stainless Steel Multipurpose STI-165',
      img: '/katalog/gunting-sti165.webp',
      images: [
        '/katalog/gunting-sti165.webp'
      ],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Promo',
      category: 'Gunting',
      needs: ['Kantor', 'Sekolah', 'Rumah', 'Bisnis'],
      variants: ['Standard'],
      description: 'Gunting multipurpose berbahan stainless steel premium yang kuat, tajam, dan anti karat. Handle ergonomis dengan lapisan karet lembut memberikan genggaman nyaman saat memotong dalam waktu lama. Mampu memotong kertas, karton, kain, tali, hingga plastik dengan presisi. Tahan lama dengan ketajaman yang konsisten walau digunakan berulang kali.\n\n✅ Stainless steel anti karat\n✅ Tajam dan presisi tinggi\n✅ Handle ergonomis, nyaman di tangan\n✅ Multipurpose: kertas, kain, plastik, tali\n✅ Awet, ketajaman tahan lama'
    },
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
                    {product.originalPrice && <span className="catalog-price-original">{product.originalPrice}</span>}
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
