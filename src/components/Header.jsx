import { ShoppingCart, Menu, Search } from 'lucide-react';
import './Header.css';

export default function Header({ setPage }) {
  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Mobile Menu Icon */}
        <button className="mobile-menu-btn">
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="logo" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>
          <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            MONTANA
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); }}>Home</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); }}>About Us</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('product'); }}>Product</a>
          <a href="#">Blog</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>Contact Us</a>
        </nav>

        {/* Icons */}
        <div className="header-actions">
          <button className="icon-btn"><Search size={20} /></button>
          <button className="icon-btn cart-btn">
            <ShoppingCart size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>

      </div>
    </header>
  );
}
