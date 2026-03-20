import { ArrowRight, Star, ShieldCheck, CheckCircle2, Bookmark, Briefcase, Clock, Zap, Award } from 'lucide-react';
import './Home.css';

export default function Home({ setPage, addToCart, openProductDetail }) {
  const images = {
    hero: '/banner.webp',
    school: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    office: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80',
  };

  const products = [
    { id: 1, name: 'MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P', img: '/MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P.png', price: 'Rp 0', tag: 'Terlaris', category: 'Kalkulator', variants: ['Standard'], description: 'Kalkulator 8 digit dengan layar besar dan dual power (solar + baterai). Cocok untuk kantor, sekolah, dan bisnis.' },
    { id: 2, name: 'MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail', img: '/MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail.png', price: 'Rp 0', tag: 'Promo', category: 'Spidol', variants: ['Hitam', 'Merah', 'Biru'], description: 'Spidol permanen round tip dengan tinta tahan lama. Cocok untuk menulis di berbagai permukaan.' },
    { id: 3, name: 'MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail', img: '/MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail.webp', price: 'Rp 0', tag: 'Terbaru', category: 'Lem', variants: ['25g', '35g'], description: 'Lem batang dengan daya rekat kuat dan tidak meninggalkan residu. Cocok untuk kertas, kain, dan karton.' },
    { id: 4, name: 'MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail', img: '/MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail.webp', price: 'Rp 0', category: 'Gunting', variants: ['Standard'], description: 'Gunting stainless steel multipurpose yang kuat, tajam, dan anti karat. Handle ergonomis untuk kenyamanan penggunaan.' }
  ];

  return (
    <main className="home-page">
      {/* 1. Hero */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }}></div>
        <div className="container hero-content">
          <div className="hero-text-box">
            <div className="hero-actions custom-cta-positioning">
              <button className="btn btn-primary cta-btn" onClick={() => setPage('product')}>
                Belanja Kebutuhan
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Markers — Sora Style */}
      <section className="trust-markers-section">
        <div className="container">
          <div className="trust-markers-grid stagger-children">
            <div className="trust-item">
              <div className="trust-icon-wrap"><ShieldCheck size={28} strokeWidth={1.5} /></div>
              <h4>Kualitas Tahan Lama</h4>
              <p>Produk yang dirancang untuk penggunaan jangka panjang dengan material premium.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrap"><Star size={28} strokeWidth={1.5} /></div>
              <h4>Harga Terjangkau</h4>
              <p>Kualitas tinggi dengan harga yang ramah di kantong untuk semua kalangan.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrap"><Zap size={28} strokeWidth={1.5} /></div>
              <h4>Desain Praktis</h4>
              <p>Dirancang ergonomis untuk kemudahan dan kenyamanan penggunaan sehari-hari.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrap"><Clock size={28} strokeWidth={1.5} /></div>
              <h4>Siap Setiap Hari</h4>
              <p>Stok selalu tersedia dan siap kirim ke seluruh Indonesia.</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon-wrap"><Award size={28} strokeWidth={1.5} /></div>
              <h4>Garansi Kepuasan</h4>
              <p>Jaminan kualitas dan layanan purna jual terbaik untuk pelanggan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Shop by Use — Clean Cards */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-intro text-center mb-5">
            <span className="section-label">Kategori</span>
            <h2>Belanja Berdasarkan Kebutuhan</h2>
            <p className="section-subtitle">Temukan produk yang tepat untuk setiap kebutuhan Anda.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="use-card" onClick={() => setPage('product')}>
              <div className="use-img" style={{ backgroundImage: `url(${images.school})` }}></div>
              <div className="use-info">
                <span className="use-label">Perlengkapan</span>
                <h3>Sekolah</h3>
                <p>Kebutuhan dasar yang dapat diandalkan untuk semester ini.</p>
              </div>
            </div>
            <div className="use-card" onClick={() => setPage('product')}>
              <div className="use-img" style={{ backgroundImage: `url(${images.office})` }}></div>
              <div className="use-info">
                <span className="use-label">Perlengkapan</span>
                <h3>Kantor</h3>
                <p>Rapi, dapat diandalkan, dan efisien.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products — Clean Grid */}
      <section className="section">
        <div className="container">
          <div className="section-intro text-center mb-5">
            <span className="section-label">Pilihan Terbaik</span>
            <h2>Produk Unggulan</h2>
            <p className="section-subtitle">Produk paling populer yang dipilih oleh pelanggan kami.</p>
          </div>
          
          <div className="grid grid-cols-4 gap-3 product-grid">
            {products.map(product => (
              <div className="product-card hover-lift" key={product.id} onClick={() => openProductDetail(product)}>
                {product.tag && <span className={`product-badge badge-${product.tag.toLowerCase()}`}>{product.tag}</span>}
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h4>{product.name}</h4>
                  <div className="product-price-row">
                    <span className="price">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="btn btn-outline" onClick={() => setPage('product')}>
              Lihat Semua Produk
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Why Montana — Clean 2-column */}
      <section className="section why-montana bg-off-white">
        <div className="container grid grid-cols-2 gap-4 items-center">
          <div className="why-visual">
            <img src={images.hero} alt="Montana stationery layout" className="rounded-shadow" />
          </div>
          <div className="why-text">
            <span className="section-label">Tentang Kami</span>
            <h2>Mengapa Montana?</h2>
            <p>Kami percaya alat yang baik tidak boleh sulit dijangkau. Montana adalah merek bernilai cerdas yang dirancang untuk membuat produk sehari-hari berkualitas tinggi lebih mudah diakses.</p>
            <ul className="why-list">
              <li>
                <CheckCircle2 className="why-icon" size={22} strokeWidth={2} />
                <div><strong>Tahan lama:</strong> Kebutuhan tahan lama untuk penggunaan sehari-hari.</div>
              </li>
              <li>
                <CheckCircle2 className="why-icon" size={22} strokeWidth={2} />
                <div><strong>Nilai cerdas:</strong> Kualitas yang sepadan dengan harganya.</div>
              </li>
              <li>
                <CheckCircle2 className="why-icon" size={22} strokeWidth={2} />
                <div><strong>Fungsional:</strong> Presentasi bersih dan kinerja tepercaya.</div>
              </li>
            </ul>
            <button className="btn btn-secondary mt-3" onClick={() => setPage('about')}>
              Pelajari Lebih Lanjut
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Purpose Strip */}
      <section className="section purpose-strip bg-yellow text-center">
        <div className="container">
          <h2 className="mb-2">Alat yang lebih baik untuk generasi yang lebih cerdas.</h2>
          <p className="purpose-text mb-0 text-black-80">
            Setiap pena, spidol, dan kebutuhan sehari-hari dapat mendukung kebiasaan yang lebih baik. 
            Dengan membuat alat cerdas secara lebih mudah diakses, kami membangun fondasi untuk kemajuan di dunia pendidikan maupun perkantoran.
          </p>
        </div>
      </section>

      {/* 7. Client Logo Ticker */}
      <section className="section-sm bg-white border-y overflow-hidden">
        <div className="container">
          <h3 className="text-center mb-3 text-gray-500" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 600 }}>Telah Dipercaya Oleh</h3>
        </div>
        <div className="logo-ticker">
          <div className="logo-track">
            {[...Array(6)].map((_, i) => (
              <div key={`logo-1-${i}`} className="client-logo-placeholder">
                <span>Perusahaan {i + 1}</span>
              </div>
            ))}
            {[...Array(6)].map((_, i) => (
              <div key={`logo-2-${i}`} className="client-logo-placeholder">
                <span>Perusahaan {i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-intro text-center mb-5">
            <span className="section-label">Testimoni</span>
            <h2>Kata Mereka</h2>
          </div>
          <div className="grid grid-cols-3 gap-3 stagger-children">
            {[
              { quote: "Akhirnya ada pena yang tintanya tidak tembus dan tahan satu semester. Sangat sepadan.", author: "Ayu T.", role: "Mahasiswa" },
              { quote: "Kami melengkapi seluruh kantor dengan Montana. Terlihat premium tanpa bikin kantong jebol.", author: "Budi P.", role: "Manajer Kantor" },
              { quote: "Sempurna untuk perlengkapan sekolah anak-anak. Cukup awet untuk dipakai setahun penuh.", author: "Siti K.", role: "Ibu" }
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="var(--color-yellow)" color="var(--color-yellow)" />
                  ))}
                </div>
                <p>"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.author.charAt(0)}</div>
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA Section */}
      <section className="section text-center cta-section bg-black">
        <div className="container">
          <Briefcase size={36} className="mb-3 mx-auto" strokeWidth={1.5} color="#ffd800" />
          <h2 className="text-white mb-2">Pesanan Grosir & Kemitraan Ritel</h2>
          <p className="text-gray-500 max-w-600 mx-auto mb-4">Sediakan Montana di toko Anda atau lengkapi seluruh kantor Anda dengan nilai yang cerdas.</p>
          <button className="btn btn-primary btn-lg" onClick={() => setPage('contact')}>
            Hubungi Kami
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
