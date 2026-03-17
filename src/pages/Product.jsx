import { useState } from 'react';
import { Search, Filter, ShieldCheck, Tag } from 'lucide-react';
import './Product.css';

export default function Product({ setPage, addToCart }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [activeNeed, setActiveNeed] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Semua', 'Produk Baru', 'Paket Bundel', 'Kalkulator', 'Spidol', 'Pulpen', 'Gunting', 'Lem'];
  const needs = ['Semua', 'Sekolah', 'Kantor', 'Rumah', 'Bisnis'];

  const products = [
    { id: 1, name: 'MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P', img: '/MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P.png', price: 'Rp 0', tag: 'Terlaris', category: 'Kalkulator', needs: ['Kantor', 'Bisnis', 'Sekolah', 'Rumah'] },
    { id: 2, name: 'MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail', img: '/MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail.png', price: 'Rp 0', tag: 'Promo', category: 'Spidol', needs: ['Kantor', 'Sekolah', 'Bisnis', 'Rumah'] },
    { id: 3, name: 'MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail', img: '/MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail.webp', price: 'Rp 0', tag: 'Terbaru', category: 'Lem', needs: ['Sekolah', 'Kantor', 'Rumah'] },
    { id: 4, name: 'MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail', img: '/MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail.webp', price: 'Rp 0', tag: 'Promo', category: 'Gunting', needs: ['Kantor', 'Sekolah', 'Rumah', 'Bisnis'] },
  ];

  return (
    <main className="product-page bg-gray-50">
      
      {/* Proof Strip */}
      <div className="proof-strip bg-black text-white py-2 text-center text-sm">
        <span className="flex items-center justify-center gap-2">
           <ShieldCheck size={16} className="text-yellow" /> Kualitas Tahan Lama. Harga Terjangkau. Dibuat untuk Kemajuan Sehari-hari.
        </span>
      </div>

      <div className="container product-layout">
        
        {/* Sidebar Filters */}
        <aside className="product-sidebar">
          <div className="search-box mb-4">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Cari kebutuhan..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="filter-group mb-4">
            <h3 className="filter-header flex items-center gap-2"><Filter size={18} /> Kategori</h3>
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
            <h3 className="filter-header flex items-center gap-2"><Tag size={18} /> Belanja Sesuai Kebutuhan</h3>
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
          
          <div className="product-header flex justify-between items-center mb-4">
            <h2>{activeCategory === 'Semua' ? 'Semua Kebutuhan' : activeCategory}</h2>
            <div className="sort-dropdown">
              <select defaultValue="featured">
                <option value="featured">Urutkan: Unggulan</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
                <option value="new">Produk Terbaru</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 product-grid-catalog gap-3">
            {products
              .filter(p => activeCategory === 'Semua' || p.category === activeCategory)
              .filter(p => activeNeed === 'Semua' || p.needs.includes(activeNeed))
              .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.category.toLowerCase().includes(searchQuery.toLowerCase()))
              .map(product => (
              <div className="catalog-product-card" key={product.id}>
                {product.tag && <div className={`badge badge-${product.tag.toLowerCase().replace(' ', '-')}`}>{product.tag}</div>}
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info flex flex-col items-center text-center p-3">
                  <h4>{product.name}</h4>
                  <span className="price mb-2 text-yellow font-bold text-lg">{product.price}</span>
                  <button className="btn btn-outline" style={{width: '100%', padding: '0.5rem'}} onClick={() => addToCart(product)}>Tambah +</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="pagination flex justify-center mt-4">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn next">Selanjutnya &raquo;</button>
          </div>

        </section>
      </div>
    </main>
  );
}
