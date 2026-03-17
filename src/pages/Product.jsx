import { useState } from 'react';
import { Search, Filter, ShieldCheck, Tag } from 'lucide-react';
import './Product.css';

export default function Product() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeNeed, setActiveNeed] = useState('All');

  const categories = ['Semua', 'Produk Baru', 'Paket Bundel', 'Kalkulator', 'Spidol', 'Pulpen', 'Gunting', 'Lem'];
  const needs = ['Semua', 'Sekolah', 'Kantor', 'Rumah', 'Bisnis'];

  const products = [
    { id: 1, name: 'Montana Pro Pen Set', img: 'https://images.unsplash.com/photo-1583485088034-697b5a69fdd9?w=400&q=80', price: 'Rp 45.000', tag: 'Terlaris' },
    { id: 2, name: 'Durable A4 Notebook', img: 'https://images.unsplash.com/photo-1522881113591-baf82881eb50?w=400&q=80', price: 'Rp 32.000', tag: '' },
    { id: 3, name: 'Precision Desk Organizer', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=400&q=80', price: 'Rp 85.000', tag: 'Terbaru' },
    { id: 4, name: 'Everyday Highlighters', img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&q=80', price: 'Rp 28.000', tag: 'Promo' },
    { id: 5, name: 'Montana Heavy Duty Scissors', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', price: 'Rp 55.000', tag: '' },
    { id: 6, name: 'Standard Sticky Notes', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=400&q=80', price: 'Rp 22.000', tag: '' },
    { id: 7, name: 'Whiteboard Marker Box', img: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&q=80', price: 'Rp 65.000', tag: 'Hemat Grosir' },
    { id: 8, name: 'Premium Geometry Set', img: 'https://images.unsplash.com/photo-1583485088034-697b5a69fdd9?w=400&q=80', price: 'Rp 48.000', tag: '' },
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
            <input type="text" placeholder="Cari kebutuhan..." />
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
            {products.map(product => (
              <div className="catalog-product-card" key={product.id}>
                {product.tag && <div className={`badge badge-${product.tag.toLowerCase().replace(' ', '-')}`}>{product.tag}</div>}
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info flex flex-col items-center text-center p-3">
                  <h4>{product.name}</h4>
                  <span className="price mb-2 text-yellow font-bold text-lg">{product.price}</span>
                  <button className="btn btn-outline" style={{width: '100%', padding: '0.5rem'}}>Tambah +</button>
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
