import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import './Header.css';

export default function Header({ page, setPage, cartCount, onCartClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const siteData = [
    { title: 'Beranda', type: 'Halaman', id: 'home' },
    { title: 'Tentang Kami', type: 'Halaman', id: 'about' },
    { title: 'Katalog Produk', type: 'Halaman', id: 'product' },
    { title: 'Hubungi Kami', type: 'Halaman', id: 'contact' },
    { title: 'Kalkulator MONTANA 8 Digit', type: 'Produk Unggulan', id: 'product' },
    { title: 'Spidol Permanen MONTANA', type: 'Produk Unggulan', id: 'product' },
    { title: 'Lem Batang Solid Glue MONTANA', type: 'Produk Unggulan', id: 'product' },
    { title: 'Gunting Stainless MONTANA', type: 'Produk Unggulan', id: 'product' },
    { title: 'Visi Misi dan Nilai Cerdas', type: 'Informasi', id: 'about' },
    { title: 'Pesanan Grosir & Kemitraan', type: 'Informasi', id: 'contact' }
  ];

  const defaultRecommendations = [
    { title: 'Kalkulator MONTANA 8 Digit', type: 'Produk Populer', id: 'product' },
    { title: 'Katalog Produk', type: 'Jelajahi', id: 'product' },
    { title: 'Promo & Paket Bundel', type: 'Spesial', id: 'product' }
  ];

  const searchResults = searchQuery.trim() === '' 
    ? defaultRecommendations 
    : siteData.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleSearchSelect = (pageId) => {
    setPage(pageId);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchResults.length > 0) {
      handleSearchSelect(searchResults[0].id);
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        Kualitas stabil dengan harga yang terjangkau, barang selalu ready —
        <a href="#" onClick={(e) => { e.preventDefault(); setPage('product'); }}>Belanja Sekarang →</a>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          
          {/* Mobile Menu Icon */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <div className="logo" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>
            <img src="/logo.png" alt="Montana Logo" className="header-logo" />
          </div>

          {/* Desktop Navigation */}
          <nav className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            <a href="#" className={page === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('home'); setIsMobileMenuOpen(false); }}>Beranda</a>
            <a href="#" className={page === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('about'); setIsMobileMenuOpen(false); }}>Tentang Kami</a>
            <a href="#" className={page === 'product' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('product'); setIsMobileMenuOpen(false); }}>Produk</a>
            <a href="#" className={page === 'blog' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('blog'); setIsMobileMenuOpen(false); }}>Blog</a>
            <a href="#" className={page === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); setPage('contact'); setIsMobileMenuOpen(false); }}>Hubungi Kami</a>
          </nav>

          {/* Icons */}
          <div className="header-actions">
            <button className="icon-btn" onClick={() => setIsSearchOpen(!isSearchOpen)}>
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
            <button className="icon-btn cart-btn" onClick={onCartClick}>
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>

        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="search-overlay">
            <div className="container">
              <div className="search-input-wrapper">
                <Search size={18} className="search-overlay-icon" />
                <input 
                  type="text" 
                  placeholder="Cari produk, kategori, atau halaman..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
              </div>
              
              <div className="search-results">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((result, idx) => (
                      <li key={idx} onClick={() => handleSearchSelect(result.id)}>
                        <div className="result-title">{result.title}</div>
                        <div className="result-type">{result.type}</div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="no-results">Tidak ada hasil untuk "{searchQuery}"</div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
