import { Mail, Phone, Clock, MessageCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <main className="contact-page bg-gray-50">
      <section className="section bg-black text-white text-center pb-2">
        <div className="container">
          <h1 className="text-white mb-2">Hubungi Kami</h1>
          <p className="text-gray-300 mx-auto max-w-600">
            Bila Anda memiliki pertanyaan ritel, membutuhkan pesanan grosir untuk bisnis Anda, atau ingin bermitra dengan kami, kami siap membantu.
          </p>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container contact-grid">
          
          <div className="contact-info">
            <h2 className="mb-3">Informasi Kontak</h2>
            
            <div className="info-block">
              <MessageCircle className="info-icon text-yellow" size={24} />
              <div>
                <h4>Dukungan WhatsApp</h4>
                <p>+62 812 3456 7890</p>
              </div>
            </div>

            <div className="info-block">
              <Mail className="info-icon text-yellow" size={24} />
              <div>
                <h4>Email Kami</h4>
                <p>hello@montana-smart.com</p>
              </div>
            </div>

            <div className="info-block">
              <Clock className="info-icon text-yellow" size={24} />
              <div>
                <h4>Jam Operasional</h4>
                <p>Sen - Jum, 09:00 - 17:00 (WIB)</p>
              </div>
            </div>

            <div className="info-block mt-4 bg-white p-3 border-radius shadow-sm bulk-block">
              <h4 className="mb-1">Pertanyaan Pesanan Grosir</h4>
              <p className="text-sm mb-2 text-gray-500">Ingin melengkapi seluruh kantor atau sekolah Anda? Kami menawarkan harga khusus untuk pesanan dalam jumlah besar.</p>
              <button className="btn btn-outline" style={{width: '100%'}}>Unduh Katalog (PDF)</button>
            </div>
            
            <div className="faq-links mt-4">
              <h4 className="mb-2">Tautan Cepat</h4>
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
