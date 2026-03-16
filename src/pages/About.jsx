import { Target, Lightbulb, TrendingUp } from 'lucide-react';
import './About.css';

export default function About({ setPage }) {
  const heroImg = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80';
  const founderImg = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80';

  return (
    <main className="about-page">
      {/* Hero */}
      <section className="about-hero section bg-gray text-center">
        <div className="container">
          <h1 className="mb-2">Kami percaya alat yang baik tidak boleh sulit dijangkau.</h1>
          <p className="subtitle mx-auto text-black-80">
            Montana adalah merek bernilai cerdas yang dirancang untuk membuat produk sehari-hari berkualitas tinggi lebih mudah diakses oleh generasi ini.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="section">
        <div className="container grid grid-cols-2 gap-4 items-center">
          <div className="visual">
             <img src={heroImg} alt="Students studying" className="rounded-shadow" />
          </div>
          <div className="text-content">
            <h2 className="mb-2">Asal Usul Kami</h2>
            <p>Montana dibangun dengan keyakinan sederhana: alat yang lebih baik menciptakan kebiasaan yang lebih baik, dan kebiasaan yang lebih baik membangun generasi yang lebih cerdas.</p>
            <p>Di sekolah, di tempat kerja, di rumah, dan di usaha kecil, orang mengandalkan kebutuhan sehari-hari untuk menulis, mengatur, belajar, bersiap, dan terus bergerak. Kami menyadari bahwa pilihan berkualitas tinggi seringkali terlalu mahal, sementara pilihan yang terjangkau terlalu cepat rusak.</p>
            <p><strong>Montana hadir untuk menyelesaikan ini.</strong> Kami membuat kebutuhan dasar yang tahan lama, dapat diandalkan, dan terjangkau sehingga orang dapat membuat pilihan yang lebih cerdas setiap hari tanpa merasa harus memilih antara kualitas dan harga.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-black text-white">
        <div className="container grid grid-cols-3 gap-4 mobile-grid-cols-1">
          <div className="mission-card">
            <Target className="text-yellow mb-2" size={40} />
            <h3 className="text-white mt-2">Misi</h3>
            <p className="text-gray-300">Membuat kebutuhan sehari-hari yang dapat diandalkan lebih mudah dijangkau bagi generasi ini melalui harga yang wajar dan kualitas yang tahan lama.</p>
          </div>
          <div className="mission-card">
            <Lightbulb className="text-yellow mb-2" size={40} />
            <h3 className="text-white mt-2">Visi</h3>
            <p className="text-gray-300">Berkontribusi kepada generasi yang lebih cerdas dan mengembangkan dampak tersebut menuju inisiatif pembangunan pendidikan seperti sekolah di masa depan.</p>
          </div>
          <div className="mission-card">
            <TrendingUp className="text-yellow mb-2" size={40} />
            <h3 className="text-white mt-2">Janji</h3>
            <p className="text-gray-300">Alat yang baik tidak boleh sulit dijangkau. Merek praktis sehari-hari yang menghormati ambisi dan anggaran.</p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section bg-gray">
        <div className="container grid grid-cols-2 gap-4 items-center founder-section">
          <div className="text-content pr-4">
            <h2 className="mb-2">Perjalanan yang Lebih Besar</h2>
            <p>"Sebagian orang berpikir produk sehari-hari adalah hal kecil. Kami tidak. Setiap pena, spidol, gunting, dan kebutuhan sehari-hari dapat mendukung kebiasaan yang lebih baik, pembelajaran yang lebih baik, dan pekerjaan yang lebih baik."</p>
            <p>Ini adalah langkah pertama kami: membantu generasi ini membuat pilihan yang lebih cerdas setiap hari. Seiring berjalannya waktu, kami bermimpi untuk mengembangkan dampak tersebut menjadi sesuatu yang lebih besar untuk pendidikan—seperti mendanai sekolah dan membangun pusat pembelajaran.</p>
            <p className="founder-signoff mt-4"><strong>— Pendiri Montana</strong></p>
          </div>
          <div className="founder-visual">
            <img src={founderImg} alt="Montana Founder" className="founder-img" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center text-white pb-mb-0" style={{ backgroundColor: 'var(--color-blue)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <h2 className="mb-3" style={{ color: 'white' }}>Mulai Membuat Pilihan Lebih Cerdas</h2>
          <button className="btn btn-primary" onClick={() => setPage('product')}>Belanja Kebutuhan</button>
        </div>
      </section>
    </main>
  );
}
