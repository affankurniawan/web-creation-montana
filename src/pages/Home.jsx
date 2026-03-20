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
      img: '/MONTANA Kalkulator Alat Hitung 8 Digit Calculator Big Display 2 Power MTC-200 P.png',
      price: 'Rp 0',
      tag: 'Terlaris',
      category: 'Kalkulator',
      variants: ['Standard'],
      description: 'Kalkulator desktop 8 digit dengan layar besar yang mudah dibaca. Dilengkapi sistem dual power (solar + baterai) sehingga tetap bisa digunakan di kondisi pencahayaan apa pun. Tombol responsif dengan feedback tekan nyaman untuk penghitungan cepat dan akurat. Bonus cover pelindung agar tetap awet.\n\n✅ Layar besar, angka jelas\n✅ Dual power: solar & baterai\n✅ Tombol responsif & nyaman\n✅ Bonus cover pelindung\n✅ Cocok untuk kantor, sekolah, dan bisnis'
    },
    {
      id: 2,
      name: 'MONTANA Spidol Permanen Round Tip Permanent Marker MP-12',
      img: '/MONTANA Spidol Permanen Round Tip Permanent Marker MP-12 Retail.png',
      price: 'Rp 0',
      tag: 'Promo',
      category: 'Spidol',
      variants: ['Standard'],
      description: 'Spidol permanen dengan ujung round tip yang menghasilkan garis tebal dan jelas di berbagai permukaan: kertas, plastik, kayu, kain, hingga logam. Tinta non-toxic, cepat kering, dan tahan air.\n\n✅ Tinta permanen, tahan air & anti luntur\n✅ Non-toxic, aman digunakan\n✅ Bisa di kertas, plastik, kayu, kain, logam\n✅ Cepat kering, tidak mudah pudar\n✅ Tersedia 3 warna pilihan'
    },
    {
      id: 3,
      name: 'MONTANA Glue Stick Lem Batang 25g Perekat Serbaguna GS-25',
      img: '/MONTANA Glue Stick Lem Batang 25g Excellent Adhesive Perekat Serbaguna GS-25Retail.webp',
      price: 'Rp 0',
      tag: 'Terbaru',
      category: 'Lem',
      variants: ['Standard'],
      description: 'Lem batang (glue stick) dengan formula excellent adhesive — daya rekat kuat namun tetap bersih, tanpa residu. Ideal untuk menempel kertas, karton, foto, dan kerajinan tangan.\n\n✅ Daya rekat kuat, hasil rapi\n✅ Tanpa residu, bersih di tangan\n✅ Aman untuk anak-anak (non-toxic)\n✅ Mudah dioleskan\n✅ Ideal untuk sekolah, kantor & kerajinan'
    },
    {
      id: 4,
      name: 'MONTANA Gunting Stainless Steel Multipurpose STI-165',
      img: '/MONTANA Scissors Gunting Stainless Steel Multipurpose Kuat Tajam Anti Karat STI-165Retail.webp',
      price: 'Rp 0',
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
