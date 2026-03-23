import { ArrowRight, Star, ShieldCheck, CheckCircle2, Bookmark, Briefcase, Clock, Zap, Award } from 'lucide-react';
import './Home.css';

export default function Home({ setPage, addToCart, openProductDetail }) {
  const images = {
    hero: '/banner.webp',
    school: '/school-category.png',
    office: '/office-category.png',
  };

  const products = [
    {
      id: 1,
      name: 'MONTANA Kalkulator 8 Digit Big Display 2 Power MTC-200 P',
      img: '/katalog/kalkulator-mtc200p.png',
      images: ['/katalog/kalkulator-mtc200p.png'],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Terlaris',
      category: 'Kalkulator',
      variants: ['Standard'],
      description: 'Kalkulator desktop 8 digit dengan layar besar yang mudah dibaca. Dilengkapi sistem dual power (solar + baterai) sehingga tetap bisa digunakan di kondisi pencahayaan apa pun. Tombol responsif dengan feedback tekan nyaman untuk penghitungan cepat dan akurat. Bonus cover pelindung agar tetap awet.\n\n✅ Layar besar, angka jelas\n✅ Dual power: solar & baterai\n✅ Tombol responsif & nyaman\n✅ Bonus cover pelindung\n✅ Cocok untuk kantor, sekolah, dan bisnis'
    },
    {
      id: 2,
      name: 'MONTANA Spidol Permanen Round Tip Permanent Marker MP-12',
      img: '/katalog/spidol-mp12.png',
      images: ['/katalog/spidol-mp12.png'],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Promo',
      category: 'Spidol',
      variants: ['Standard'],
      description: 'Spidol permanen dengan ujung round tip yang menghasilkan garis tebal dan jelas di berbagai permukaan: kertas, plastik, kayu, kain, hingga logam. Tinta non-toxic, cepat kering, dan tahan air.\n\n✅ Tinta permanen, tahan air & anti luntur\n✅ Non-toxic, aman digunakan\n✅ Bisa di kertas, plastik, kayu, kain, logam\n✅ Cepat kering, tidak mudah pudar\n✅ Tersedia 3 warna pilihan'
    },
    {
      id: 3,
      name: 'MONTANA Glue Stick Lem Batang 25g Perekat Serbaguna GS-25',
      img: '/katalog/lem-gs25.webp',
      images: ['/katalog/lem-gs25.webp'],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      tag: 'Terbaru',
      category: 'Lem',
      variants: ['Standard'],
      description: 'Lem batang (glue stick) dengan formula excellent adhesive — daya rekat kuat namun tetap bersih, tanpa residu. Ideal untuk menempel kertas, karton, foto, dan kerajinan tangan.\n\n✅ Daya rekat kuat, hasil rapi\n✅ Tanpa residu, bersih di tangan\n✅ Aman untuk anak-anak (non-toxic)\n✅ Mudah dioleskan\n✅ Ideal untuk sekolah, kantor & kerajinan'
    },
    {
      id: 4,
      name: 'MONTANA Gunting Stainless Steel Multipurpose STI-165',
      img: '/katalog/gunting-sti165.webp',
      images: ['/katalog/gunting-sti165.webp'],
      price: 'Rp 0',
      originalPrice: 'Rp 0',
      category: 'Gunting',
      variants: ['Standard'],
      description: 'Gunting multipurpose berbahan stainless steel premium yang kuat, tajam, dan anti karat. Handle ergonomis dengan lapisan karet lembut untuk kenyamanan saat memotong kertas, kain, tali, hingga plastik.\n\n✅ Stainless steel anti karat\n✅ Tajam dan presisi tinggi\n✅ Handle ergonomis, nyaman di tangan\n✅ Multipurpose: kertas, kain, plastik, tali\n✅ Awet, ketajaman tahan lama'
    }
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

      {/* 3.5 Marketplace Official Store CTA */}
      <section className="marketplace-strip">
        <div className="container">
          <div className="mp-strip-content">
            <div className="mp-strip-text">
              <h3>Belanja di Official Store Kami</h3>
              <p>Tersedia di marketplace favorit Anda — produk resmi, harga terbaik.</p>
            </div>
            <div className="mp-strip-buttons">
              <a href="https://shopee.co.id/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-strip-btn mp-strip-shopee">
                <svg width="16" height="16" viewBox="0 0 48 48" fill="white"><path d="M24 4c-3.87 0-7 3.13-7 7h3c0-2.21 1.79-4 4-4s4 1.79 4 4h3c0-3.87-3.13-7-7-7zM8 14L4 44h40L40 14H8zm16 22c-5.52 0-10-4.48-10-10h3c0 3.87 3.13 7 7 7s7-3.13 7-7h3c0 5.52-4.48 10-10 10z"/></svg>
                Shopee
              </a>
              <a href="https://www.tokopedia.com/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-strip-btn mp-strip-tokopedia">
                <svg width="16" height="16" viewBox="0 0 48 48" fill="white"><path d="M24 2C12.95 2 4 10.95 4 22c0 11.05 8.95 20 20 20s20-8.95 20-20C44 10.95 35.05 2 24 2zm0 36c-8.84 0-16-7.16-16-16S15.16 6 24 6s16 7.16 16 16-7.16 16-16 16zm-6-18c0-1.66 1.34-3 3-3s3 1.34 3 3v8h-6v-8zm12 0c0-1.66 1.34-3 3-3s3 1.34 3 3v8h-6v-8zM24 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                Tokopedia
              </a>
              <a href="https://shop.tiktok.com/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-strip-btn mp-strip-tiktok">
                <svg width="16" height="16" viewBox="0 0 48 48" fill="white"><path d="M38.4 13.72A9.65 9.65 0 0130.21 8.3V4h-6.88v27.34a5.78 5.78 0 01-5.76 5 5.78 5.78 0 01-5.77-5.78 5.78 5.78 0 015.77-5.78c.55 0 1.08.08 1.58.2v-7a12.66 12.66 0 00-1.58-.1A12.68 12.68 0 004.9 30.56a12.68 12.68 0 0021.72 8.92V25.96a16.56 16.56 0 0011.16 4.3V23.4a9.7 9.7 0 01-7.54-2.5v-7.18h8.16z"/></svg>
                TikTok Shop
              </a>
              <a href="https://www.lazada.co.id/shop/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-strip-btn mp-strip-lazada">
                <svg width="16" height="16" viewBox="0 0 48 48" fill="white"><path d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 4.47L37.3 15 24 21.53 10.7 15 24 8.47zM10 18.3l12 6.67v16.06L10 34.36V18.3zm16 22.73V24.97l12-6.67v16.06L26 41.03z"/></svg>
                Lazada
              </a>
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
                    {product.originalPrice && <span className="price-original">{product.originalPrice}</span>}
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
            <img src="/why-montana.png" alt="Produk Montana di meja kerja" className="rounded-shadow" />
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
      <section className="section text-center cta-section cta-grosir">
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
