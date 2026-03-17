import './Footer.css';

export default function Footer({ setPage }) {
  return (
    <footer className="footer bg-black">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src="/logo.png" alt="Montana Logo" style={{ height: '48px', marginBottom: '1rem' }} />
          <p className="text-gray" style={{ color: '#ADB5BD', maxWidth: '300px' }}>
            Alat yang lebih baik untuk generasi yang lebih cerdas. Kebutuhan yang tahan lama dan praktis dengan harga cerdas.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Belanja</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('product'); }}>Semua Produk</a>
            <a href="#">Produk Unggulan</a>
            <a href="#">Terlaris</a>
            <a href="#">Kebutuhan Sekolah</a>
            <a href="#">Perlengkapan Kantor</a>
          </div>
          
          <div className="footer-column">
            <h3>Brand</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}>Tentang Kami</a>
            <a href="#">Visi Misi Kami</a>
            <a href="#">Blog</a>
          </div>
          
          <div className="footer-column">
            <h3>Dukungan</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>Hubungi Kami</a>
            <a href="#">Pertanyaan Pesanan Grosir</a>
            <a href="#">FAQ & Pengembalian</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Montana. Hak cipta dilindungi undang-undang.</p>
        <div className="footer-bottom-links">
          <a href="#">Kebijakan Privasi</a>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
