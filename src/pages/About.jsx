import { Target, Lightbulb, TrendingUp, ArrowRight, Users, BookOpen, Heart } from 'lucide-react';
import './About.css';

export default function About({ setPage }) {
  const heroImg = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80';
  const founderImg = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80';

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content text-center">
            <span className="section-label">Tentang Montana</span>
            <h1>Kami percaya alat yang baik tidak boleh sulit dijangkau.</h1>
            <p className="about-hero-sub">
              Montana adalah merek bernilai cerdas yang dirancang untuk membuat produk sehari-hari berkualitas tinggi lebih mudah diakses oleh generasi ini.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats bg-black">
        <div className="container">
          <div className="stats-grid stagger-children">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Produk SKU</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Pelanggan</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Kota Terjangkau</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">Rating Pelanggan</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="section">
        <div className="container grid grid-cols-2 gap-4 items-center">
          <div className="about-visual">
            <img src={heroImg} alt="Students studying" className="rounded-shadow" />
          </div>
          <div className="about-text-content">
            <span className="section-label">Asal Usul</span>
            <h2>Cerita Kami</h2>
            <p>Montana dibangun dengan keyakinan sederhana: alat yang lebih baik menciptakan kebiasaan yang lebih baik, dan kebiasaan yang lebih baik membangun generasi yang lebih cerdas.</p>
            <p>Di sekolah, di tempat kerja, di rumah, dan di usaha kecil, orang mengandalkan kebutuhan sehari-hari untuk menulis, mengatur, belajar, bersiap, dan terus bergerak.</p>
            <p><strong>Montana hadir untuk menyelesaikan ini.</strong> Kami membuat kebutuhan dasar yang tahan lama, dapat diandalkan, dan terjangkau.</p>
          </div>
        </div>
      </section>

      {/* Values — Prinsip 3A Style */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="section-intro text-center mb-5">
            <span className="section-label">Nilai Kami</span>
            <h2>Prinsip Montana</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 stagger-children">
            <div className="value-card">
              <div className="value-card-icon"><Users size={36} strokeWidth={1.5} /></div>
              <h3>Accessible</h3>
              <p>Alat berkualitas yang mudah dijangkau oleh semua kalangan—karena setiap orang berhak mendapatkan yang terbaik.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><Heart size={36} strokeWidth={1.5} /></div>
              <h3>Reliable</h3>
              <p>Produk yang bisa diandalkan setiap hari, dari pagi hingga malam, dari sekolah hingga kantor.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><BookOpen size={36} strokeWidth={1.5} /></div>
              <h3>Smart Value</h3>
              <p>Kualitas premium tanpa harga premium. Investasi cerdas untuk kebutuhan sehari-hari Anda.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-black">
        <div className="container">
          <div className="section-intro text-center mb-5">
            <span className="section-label" style={{color: 'var(--color-yellow)'}}>Arah Kami</span>
            <h2 className="text-white">Misi, Visi & Janji</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mobile-grid-cols-1 stagger-children">
            <div className="mission-card">
              <Target className="text-yellow mb-3" size={36} strokeWidth={1.5} />
              <h3 className="text-white">Misi</h3>
              <p className="text-gray-500">Membuat kebutuhan sehari-hari yang dapat diandalkan lebih mudah dijangkau bagi generasi ini melalui harga yang wajar dan kualitas yang tahan lama.</p>
            </div>
            <div className="mission-card">
              <Lightbulb className="text-yellow mb-3" size={36} strokeWidth={1.5} />
              <h3 className="text-white">Visi</h3>
              <p className="text-gray-500">Berkontribusi kepada generasi yang lebih cerdas dan mengembangkan dampak tersebut menuju inisiatif pembangunan pendidikan.</p>
            </div>
            <div className="mission-card">
              <TrendingUp className="text-yellow mb-3" size={36} strokeWidth={1.5} />
              <h3 className="text-white">Janji</h3>
              <p className="text-gray-500">Alat yang baik tidak boleh sulit dijangkau. Merek praktis sehari-hari yang menghormati ambisi dan anggaran.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section">
        <div className="container grid grid-cols-2 gap-4 items-center founder-section">
          <div className="about-text-content">
            <span className="section-label">Dari Pendiri</span>
            <h2>Perjalanan yang Lebih Besar</h2>
            <blockquote className="founder-quote">
              "Sebagian orang berpikir produk sehari-hari adalah hal kecil. Kami tidak. Setiap pena, spidol, gunting, dan kebutuhan sehari-hari dapat mendukung kebiasaan yang lebih baik, pembelajaran yang lebih baik, dan pekerjaan yang lebih baik."
            </blockquote>
            <p>Ini adalah langkah pertama kami: membantu generasi ini membuat pilihan yang lebih cerdas setiap hari.</p>
            <p className="founder-signoff"><strong>— Pendiri Montana</strong></p>
          </div>
          <div className="founder-visual">
            <img src={founderImg} alt="Montana Founder" className="founder-img" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center bg-yellow cta-about">
        <div className="container">
          <h2 className="text-black mb-2">Mulai Membuat Pilihan Lebih Cerdas</h2>
          <p className="text-black-80 mb-4 max-w-600 mx-auto">Jelajahi katalog lengkap Montana dan temukan produk yang tepat untuk kebutuhan Anda.</p>
          <button className="btn btn-secondary btn-lg" onClick={() => setPage('product')}>
            Belanja Kebutuhan
            <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
}
