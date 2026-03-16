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
          <h1 className="mb-2">We believe good tools should not be out of reach.</h1>
          <p className="subtitle mx-auto text-black-80">
            Montana is a smart-value brand designed to make high-quality everyday products more accessible to this generation.
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
            <h2 className="mb-2">Our Origin</h2>
            <p>Montana was built on a simple belief: better tools create better habits, and better habits build a smarter generation.</p>
            <p>In school, at work, at home, and in small businesses, people rely on everyday essentials to write, organize, learn, prepare, and keep moving. We noticed that high-quality options were often too expensive, while affordable options broke too quickly.</p>
            <p><strong>Montana exists to solve this.</strong> We make essentials durable, reliable, and affordable so people can make smarter choices every day without feeling forced to choose between quality and price.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-black text-white">
        <div className="container grid grid-cols-3 gap-4 mobile-grid-cols-1">
          <div className="mission-card">
            <Target className="text-yellow mb-2" size={40} />
            <h3 className="text-white mt-2">Mission</h3>
            <p className="text-gray-300">Make reliable everyday essentials more reachable for this generation through fair pricing and quality that lasts.</p>
          </div>
          <div className="mission-card">
            <Lightbulb className="text-yellow mb-2" size={40} />
            <h3 className="text-white mt-2">Vision</h3>
            <p className="text-gray-300">Contribute to a smarter generation and grow that impact toward education-building initiatives such as schools in the future.</p>
          </div>
          <div className="mission-card">
            <TrendingUp className="text-yellow mb-2" size={40} />
            <h3 className="text-white mt-2">Promise</h3>
            <p className="text-gray-300">Good tools should not be out of reach. A practical daily brand that respects both ambition and budget.</p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section bg-gray">
        <div className="container grid grid-cols-2 gap-4 items-center founder-section">
          <div className="text-content pr-4">
            <h2 className="mb-2">The Bigger Journey</h2>
            <p>"Some people think everyday products are small things. We do not. Every pen, marker, scissor, and daily essential can support better habits, better learning, and better work."</p>
            <p>This is our first step: helping this generation make smarter choices every day. Over time, we dream of growing that impact into something even bigger for education—like funding schools and building learning centers.</p>
            <p className="founder-signoff mt-4"><strong>— The Montana Founders</strong></p>
          </div>
          <div className="founder-visual">
            <img src={founderImg} alt="Montana Founder" className="founder-img" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section text-center text-white pb-mb-0" style={{ backgroundColor: 'var(--color-blue)', padding: 'var(--spacing-3xl) 0' }}>
        <div className="container">
          <h2 className="mb-3" style={{ color: 'white' }}>Start Making Smarter Choices</h2>
          <button className="btn btn-primary" onClick={() => setPage('product')}>Shop Essentials</button>
        </div>
      </section>
    </main>
  );
}
