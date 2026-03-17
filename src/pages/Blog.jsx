import './Blog.css';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: '5 Tips Memilih Alat Tulis Kantor yang Awet dan Ergonomis',
      excerpt: 'Meningkatkan produktivitas kerja dengan kenyamanan optimal, dari pemilihan pulpen hingga perlengkapan pendukung.',
      date: '17 Mar 2026',
      author: 'Tim Montana',
      category: 'Tips & Trik',
      img: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=600&q=80',
    },
    {
      id: 2,
      title: 'Perjalanan Panjang Mengembangkan Lem Batang Bebas Residu',
      excerpt: 'Menilik di balik layar laboratorium Montana dalam menciptakan formula lem batang ramah lingkungan dan berdaya rekat tinggi.',
      date: '12 Mar 2026',
      author: 'Tim Montana',
      category: 'Inovasi',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&q=80',
    },
    {
      id: 3,
      title: 'Panduan Grosir Alat Tulis: Menghemat Anggaran Sekolah',
      excerpt: 'Cara cerdas institusi pendidikan mengelola pengadaan alat tulis tanpa mengorbankan kualitas bagi peserta didiknya.',
      date: '05 Mar 2026',
      author: 'Tim Montana',
      category: 'Panduan',
      img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
    }
  ];

  return (
    <main className="blog-page bg-gray-50">
      
      {/* Blog Hero Section */}
      <section className="blog-hero bg-gray-50 text-black text-center pb-2 border-bottom">
        <div className="container">
          <h1 className="mb-2 text-black">Jurnal Montana</h1>
          <p className="text-gray-600 max-w-600 mx-auto">
            Temukan wawasan terbaru, tips produktivitas, dan pembaruan inovatif seputar dunia alat tulis dan kebutuhan kantor.
          </p>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="section">
        <div className="container">
          
          <div className="blog-grid">
            {articles.map((article) => (
              <article className="blog-card" key={article.id}>
                {/* Semantic Image tag with Alt text for SEO */}
                <div className="blog-img-wrapper">
                  <img src={article.img} alt={article.title} loading="lazy" />
                  <span className="blog-category badge bg-yellow text-black">{article.category}</span>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta text-sm text-gray-500 mb-2 flex justify-between">
                    <span>{article.date}</span>
                    <span>Oleh {article.author}</span>
                  </div>
                  
                  {/* Semantic Heading structure (H2 for post titles) */}
                  <h2 className="blog-title mb-2">
                    <a href="#" className="text-black hover:text-yellow transition-colors">{article.title}</a>
                  </h2>
                  
                  <p className="blog-excerpt text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  
                  <a href="#" className="btn-link inline-flex items-center gap-1 font-semibold">
                    Baca Selengkapnya →
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
