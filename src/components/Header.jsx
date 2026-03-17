import { useState } from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import './Header.css';

export default function Header({ setPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Mobile Menu Icon */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="logo" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>
          <img src="/logo.png" alt="Montana Logo" className="header-logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('home'); setIsMobileMenuOpen(false); }}>Beranda</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('about'); setIsMobileMenuOpen(false); }}>Tentang Kami</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('product'); setIsMobileMenuOpen(false); }}>Produk</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); }}>Blog</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setPage('contact'); setIsMobileMenuOpen(false); }}>Hubungi Kami</a>
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
