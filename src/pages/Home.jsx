import { ArrowRight, Star, ShieldCheck, CheckCircle2, Bookmark, Briefcase } from 'lucide-react';
import './Home.css';

export default function Home({ setPage }) {
  const images = {
    hero: 'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1200&q=80',
    school: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
    office: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80',
    prod1: 'https://images.unsplash.com/photo-1583485088034-697b5a69fdd9?w=600&q=80',
    prod2: 'https://images.unsplash.com/photo-1522881113591-baf82881eb50?w=600&q=80',
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
            <h1>Be Smart with <span className="text-yellow">Montana</span></h1>
            <p className="hero-subtitle">Quality that works. Value that makes sense. Durable essentials at smart prices.</p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => setPage('product')}>
                Shop Essentials <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Strip */}
      <section className="value-strip bg-black section py-md">
        <div className="container flex value-grid">
          <div className="value-item"><ShieldCheck className="value-icon" /> <span>Durable Quality</span></div>
          <div className="value-item"><Star className="value-icon" /> <span>Affordable Value</span></div>
          <div className="value-item"><CheckCircle2 className="value-icon" /> <span>Practical Design</span></div>
          <div className="value-item"><Bookmark className="value-icon" /> <span>Everyday-ready</span></div>
        </div>
      </section>

      {/* 3. Shop by Use */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="text-center mb-4">Shop by Use</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="use-card" onClick={() => setPage('product')}>
              <div className="use-img" style={{ backgroundImage: `url(${images.school})` }}></div>
              <div className="use-info">
                <h3>School</h3>
                <p>Reliable basics for the semester.</p>
              </div>
            </div>
            <div className="use-card" onClick={() => setPage('product')}>
              <div className="use-img" style={{ backgroundImage: `url(${images.office})` }}></div>
              <div className="use-info">
                <h3>Office</h3>
                <p>Neat, dependable, and efficient.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Products */}
      <section className="section pb-0">
        <div className="container">
          <div className="section-header flex justify-between items-center mb-4">
            <h2>Featured Essentials</h2>
            <button className="btn btn-outline" onClick={() => setPage('product')}>View All</button>
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
                  <button className="btn btn-primary add-to-cart-btn btn-sm">Add to Cart</button>
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
            <h2>Why Montana?</h2>
            <p>We believe good tools should not be out of reach. Montana is a smart-value brand designed to make high-quality everyday products more accessible.</p>
            <ul className="why-list">
              <li><strong>Built to last:</strong> Durable essentials for real daily use.</li>
              <li><strong>Smart value:</strong> Quality that makes sense for the price.</li>
              <li><strong>Functional:</strong> Clean presentation and trustworthy performance.</li>
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
          <h2 className="mb-2">Better tools for a smarter generation.</h2>
          <p className="purpose-text mb-3 text-black-80">
            Every pen, marker, and daily essential can support better habits. 
            By making smart tools accessible, we are building a foundation for a broader educational impact.
          </p>
          <button className="btn btn-secondary" onClick={() => setPage('about')}>Our Mission</button>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="section bg-gray">
        <div className="container">
          <h2 className="mb-4 text-center">Loved by Doers</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { quote: "Finally a pen that doesn't bleed through and lasts all semester. Amazing value.", author: "Ayu T., Student" },
              { quote: "We stocked our entire accounting office with Montana. Look premium, doesn't break the bank.", author: "Budi P., Office Manager" },
              { quote: "Perfect for my kids' back-to-school list. Durable enough to survive a whole year.", author: "Siti K., Mother of two" }
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
          <h2>Bulk Orders & Retail Partnerships</h2>
          <p className="mb-3">Stock Montana in your store or supply your entire office with smart value.</p>
          <button className="btn btn-primary" onClick={() => setPage('contact')}>Get in Touch</button>
        </div>
      </section>

    </main>
  );
}
