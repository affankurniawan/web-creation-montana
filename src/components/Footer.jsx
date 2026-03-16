import './Footer.css';

export default function Footer({ setPage }) {
  return (
    <footer className="footer bg-black">
      <div className="container footer-container">
        <div className="footer-brand">
          <h2 className="text-white">MONTANA</h2>
          <p className="text-gray" style={{ color: '#ADB5BD', maxWidth: '300px' }}>
            Better tools for a smarter generation. Durable, practical essentials at smart prices.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Shop</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('product'); }}>All Products</a>
            <a href="#">Best Sellers</a>
            <a href="#">School Essentials</a>
            <a href="#">Office Supplies</a>
          </div>
          
          <div className="footer-column">
            <h3>Brand</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}>About Us</a>
            <a href="#">Our Mission</a>
            <a href="#">Blog</a>
          </div>
          
          <div className="footer-column">
            <h3>Support</h3>
            <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>Contact Us</a>
            <a href="#">Bulk Order Inquiry</a>
            <a href="#">FAQ & Returns</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} Montana. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
