import { ArrowRight } from 'lucide-react';
import './Blog.css';

export default function Blog({ setPage }) {
  const articles = [
    {
      id: 1,
      title: '5 Tips Memilih Alat Tulis Kantor yang Awet dan Ergonomis',
      excerpt: 'Meningkatkan produktivitas kerja dengan kenyamanan optimal, dari pemilihan pulpen hingga perlengkapan pendukung.',
      date: '17 Mar 2026',
      author: 'Tim Montana',
      category: 'Tips & Trik',
      img: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&q=80',
      readTime: '5 menit'
    },
    {
      id: 2,
      title: 'Perjalanan Panjang Mengembangkan Lem Batang Bebas Residu',
      excerpt: 'Menilik di balik layar laboratorium Montana dalam menciptakan formula lem batang ramah lingkungan dan berdaya rekat tinggi.',
      date: '12 Mar 2026',
      author: 'Tim Montana',
      category: 'Inovasi',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80',
      readTime: '7 menit'
    },
    {
      id: 3,
      title: 'Panduan Grosir Alat Tulis: Menghemat Anggaran Sekolah',
      excerpt: 'Cara cerdas institusi pendidikan mengelola pengadaan alat tulis tanpa mengorbankan kualitas bagi peserta didiknya.',
      date: '05 Mar 2026',
      author: 'Tim Montana',
      category: 'Panduan',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
      readTime: '6 menit'
    }
  ];

  return (
    <main className="blog-page">
      
      {/* Hero */}
      <section className="blog-hero">
        <div className="container text-center">
          <span className="section-label">Blog</span>
          <h1>Jurnal Montana</h1>
          <p className="blog-hero-sub">
            Temukan wawasan terbaru, tips produktivitas, dan pembaruan inovatif seputar dunia alat tulis dan kebutuhan kantor.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          <div className="blog-grid stagger-children">
            {articles.map((article) => (
              <article className="blog-card hover-lift" key={article.id}>
                <div className="blog-img-wrapper">
                  <img src={article.img} alt={article.title} loading="lazy" />
                  <span className="blog-category-badge">{article.category}</span>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{article.date}</span>
                    <span className="blog-dot">·</span>
                    <span>{article.readTime}</span>
                  </div>
                  
                  <h2 className="blog-title">
                    <a href="#">{article.title}</a>
                  </h2>
                  
                  <p className="blog-excerpt">{article.excerpt}</p>
                  
                  <a href="#" className="blog-read-more">
                    Baca Selengkapnya
                    <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
