import { useState } from 'react';
import { Mail, Phone, Clock, MessageCircle, Send, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waMessage = encodeURIComponent(
      `Halo Montana!\n\nNama: ${formData.name}\nEmail: ${formData.email}\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}`
    );
    window.open(`https://wa.me/6281234567890?text=${waMessage}`, '_blank');
  };

  return (
    <main className="contact-page">
      
      {/* Hero */}
      <section className="contact-hero">
        <div className="container text-center">
          <span className="section-label">Kontak</span>
          <h1>Hubungi Kami</h1>
          <p className="contact-hero-sub">
            Kami senang mendengar dari Anda. Kirimkan pertanyaan, saran, atau ajuan kerjasama melalui formulir di bawah ini.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container contact-grid">
          
          {/* Contact Form */}
          <div className="contact-form-wrap">
            <h2 className="mb-3">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Masukkan email Anda"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subjek</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="Tentang apa pesan Anda?"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg" style={{width: '100%'}}>
                <Send size={16} />
                Kirim via WhatsApp
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="mb-3">Informasi Kontak</h2>
            
            <div className="contact-info-card">
              <div className="info-block">
                <div className="info-icon-wrap">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+62 812 3456 7890</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon-wrap">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>admin@montanastationery.com</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon-wrap">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Jam Operasional</h4>
                  <p>Sen – Jum, 09:00 – 17:00 WIB</p>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Lokasi</h4>
                  <p>Indonesia</p>
                </div>
              </div>
            </div>

            {/* Bulk Order */}
            <div className="bulk-order-card">
              <h4>Pesanan Grosir</h4>
              <p>Ingin melengkapi seluruh kantor atau sekolah Anda? Kami menawarkan harga khusus untuk pesanan dalam jumlah besar.</p>
              <button className="btn btn-outline btn-sm" style={{width: '100%'}}>Unduh Katalog (PDF)</button>
            </div>

            {/* Quick Links */}
            <div className="quick-links-card">
              <h4>Tautan Cepat</h4>
              <ul>
                <li><a href="#">Kebijakan Pengiriman</a></li>
                <li><a href="#">Informasi Pengembalian & Penukaran</a></li>
                <li><a href="#">Pertanyaan yang Sering Diajukan</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
