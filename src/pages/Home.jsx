import { ArrowRight, Star, ShieldCheck, CheckCircle2, Bookmark, Briefcase } from 'lucide-react';
import './Home.css';

export default function Home({ setPage }) {
  const images = {
    hero: '/banner.webp',
    school: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    office: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80',
    prod1: '/pen-set.png',
    prod2: '/notebook.png',
    prod3: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80',
    prod4: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80'
  };

  return (
    <main className="home-page">
      {/* 1. Hero */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: `url(${images.hero})` }}></div>
        <div className="container hero-content">
          <div className="hero-text-box">
            <div className="hero-actions" style={{ marginTop: '410px', display: 'flex', justifyContent: 'center', width: '510px', marginLeft: '30px' }}>
              <button className="btn btn-primary" onClick={() => setPage('product')}>
                Belanja Kebutuhan <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Strip */}
      <section className="value-strip bg-black section py-md">
        <div className="container flex value-grid">
          <div className="value-item"><ShieldCheck className="value-icon" /> <span>Kualitas Tahan Lama</span></div>
          <div className="value-item"><Star className="value-icon" /> <span>Nilai Terjangkau</span></div>
          <div className="value-item"><CheckCircle2 className="value-icon" /> <span>Desain Praktis</span></div>
          <div className="value-item"><Bookmark className="value-icon" /> <span>Siap Setiap Hari</span></div>
        </div>
      </section>

      {/* 3. Shop by Use */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center mb-4">Belanja Berdasarkan Kebutuhan</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="use-card" onClick={() => setPage('product')}>
              <div className="use-img" style={{ backgroundImage: `url(${images.school})` }}></div>
              <div className="use-info">
                <h3>Sekolah</h3>
                <p>Kebutuhan dasar yang dapat diandalkan untuk semester ini.</p>
              </div>
            </div>
            <div className="use-card" onClick={() => setPage('product')}>
              <div className="use-img" style={{ backgroundImage: `url(${images.office})` }}></div>
              <div className="use-info">
                <h3>Kantor</h3>
                <p>Rapi, dapat diandalkan, dan efisien.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="section pb-0">
        <div className="container">
          <div className="section-header flex justify-between items-center mb-4">
            <h2>Produk Unggulan</h2>
            <button className="btn btn-outline" onClick={() => setPage('product')}>Lihat Semua</button>
          </div>
          
          <div className="grid grid-cols-4 gap-3 product-grid">
            {[
              { id: 1, name: 'Montana Pro Pen Set', img: images.prod1, price: 'Rp 45.000' },
              { id: 2, name: 'Durable A4 Notebook', img: images.prod2, price: 'Rp 32.000' },
              { id: 3, name: 'Precision Desk Organizer', img: images.prod3, price: 'Rp 85.000' },
              { id: 4, name: 'Everyday Highlighters', img: images.prod4, price: 'Rp 28.000' }
            ].map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span className="price">{product.price}</span>
                  <button className="btn btn-primary add-to-cart-btn btn-sm">Tambah ke Keranjang</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Montana */}
      <section className="section why-montana">
        <div className="container grid grid-cols-2 gap-4 items-center">
          <div className="why-text">
            <h2>Mengapa Montana?</h2>
            <p>Kami percaya alat yang baik tidak boleh sulit dijangkau. Montana adalah merek bernilai cerdas yang dirancang untuk membuat produk sehari-hari berkualitas tinggi lebih mudah diakses.</p>
            <ul className="why-list">
              <li><strong>Tahan lama:</strong> Kebutuhan tahan lama untuk penggunaan sehari-hari.</li>
              <li><strong>Nilai cerdas:</strong> Kualitas yang sepadan dengan harganya.</li>
              <li><strong>Fungsional:</strong> Presentasi bersih dan kinerja tepercaya.</li>
            </ul>
          </div>
          <div className="why-visual">
             <img src={images.hero} alt="Montana stationery layout" className="rounded-shadow" />
          </div>
        </div>
      </section>

      {/* 6. Purpose Strip */}
      <section className="section bg-yellow text-center purpose-strip">
        <div className="container">
          <h2 className="mb-2">Alat yang lebih baik untuk generasi yang lebih cerdas.</h2>
          <p className="purpose-text mb-3 text-black-80">
            Setiap pena, spidol, dan kebutuhan sehari-hari dapat mendukung kebiasaan yang lebih baik. 
            Dengan membuat alat cerdas lebih mudah diakses, kami membangun fondasi untuk dampak pendidikan yang lebih luas.
          </p>
          <button className="btn btn-secondary" onClick={() => setPage('about')}>Misi Kami</button>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="mb-4 text-center">Dipercaya Pengguna</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { quote: "Akhirnya ada pena yang tintanya tidak tembus dan tahan satu semester. Sangat sepadan.", author: "Ayu T., Mahasiswa" },
              { quote: "Kami melengkapi seluruh kantor dengan Montana. Terlihat premium tanpa bikin kantong jebol.", author: "Budi P., Manajer Kantor" },
              { quote: "Sempurna untuk perlengkapan sekolah anak-anak. Cukup awet untuk dipakai setahun penuh.", author: "Siti K., Ibu" }
            ].map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="stars"><Star size={16} fill="var(--color-yellow)" color="var(--color-yellow)" /><Star size={16} fill="var(--color-yellow)" color="var(--color-yellow)" /><Star size={16} fill="var(--color-yellow)" color="var(--color-yellow)" /><Star size={16} fill="var(--color-yellow)" color="var(--color-yellow)" /><Star size={16} fill="var(--color-yellow)" color="var(--color-yellow)" /></div>
                <p>"{t.quote}"</p>
                <span className="author">{t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact CTA */}
      <section className="section text-center cta-section">
        <div className="container">
          <Briefcase size={40} className="mb-2 mx-auto text-blue" />
          <h2>Pesanan Grosir & Kemitraan Ritel</h2>
          <p className="mb-3">Sediakan Montana di toko Anda atau lengkapi seluruh kantor Anda dengan nilai yang cerdas.</p>
          <button className="btn btn-primary" onClick={() => setPage('contact')}>Hubungi Kami</button>
        </div>
      </section>

    </main>
  );
}
