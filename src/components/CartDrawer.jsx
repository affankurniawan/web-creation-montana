import { X, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cartItems, removeFromCart, updateQuantity, setPage }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalAmount = cartItems.reduce((sum, item) => {
    const numPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
    return sum + (numPrice * item.quantity);
  }, 0);

  const handleInquiryWA = () => {
    let message = `Halo Montana! Saya tertarik untuk memesan produk berikut:\n\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.name}*\n   Jumlah: ${item.quantity} pcs\n   Harga satuan: ${item.price}\n\n`;
    });
    message += `Total: ${totalItems} item\n\n`;
    message += `Mohon infokan:\n`;
    message += `• Konfirmasi harga & ketersediaan stok\n`;
    message += `• Opsi pengiriman & ongkir\n`;
    message += `• Harga grosir (jika ada)\n\n`;
    message += `Terima kasih! 🙏`;
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        
        <div className="cart-header">
          <h2>Keranjang ({totalItems})</h2>
          <button className="close-cart-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} color="#CED4DA" strokeWidth={1.5} />
              <p className="empty-cart-title">Keranjang kosong</p>
              <p className="empty-cart-desc">Tambahkan produk yang Anda minati untuk melanjutkan pemesanan.</p>
              <button className="btn btn-primary" onClick={() => { setPage('product'); onClose(); }}>Lihat Produk</button>
            </div>
          ) : (
            <ul className="cart-list">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <span className="cart-item-price">{item.price}</span>
                    <div className="cart-item-actions">
                      <div className="cart-qty-controls">
                        <button 
                          className="cart-qty-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >−</button>
                        <span className="cart-qty-num">{item.quantity}</span>
                        <button 
                          className="cart-qty-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary">
              <span className="summary-label">Total</span>
              <span className="summary-value">Rp {totalAmount.toLocaleString('id-ID')}</span>
            </div>
            <p className="cart-note">Harga & ongkir dikonfirmasi saat checkout via WhatsApp</p>
            
            <button className="checkout-btn checkout-btn-wa" onClick={handleInquiryWA}>
              <MessageCircle size={16} />
              Pesan via WhatsApp
            </button>

            <div className="cart-mp-links">
              <span className="mp-links-label">Atau beli langsung di:</span>
              <div className="mp-links-row">
                <a href="https://shopee.co.id/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-link mp-shopee">
                  <svg width="11" height="11" viewBox="0 0 48 48" fill="white"><path d="M24 4c-3.87 0-7 3.13-7 7h3c0-2.21 1.79-4 4-4s4 1.79 4 4h3c0-3.87-3.13-7-7-7zM8 14L4 44h40L40 14H8zm16 22c-5.52 0-10-4.48-10-10h3c0 3.87 3.13 7 7 7s7-3.13 7-7h3c0 5.52-4.48 10-10 10z"/></svg>
                  Shopee
                </a>
                <a href="https://www.tokopedia.com/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-link mp-tokopedia">
                  <svg width="11" height="11" viewBox="0 0 48 48" fill="white"><path d="M24 2C12.95 2 4 10.95 4 22c0 11.05 8.95 20 20 20s20-8.95 20-20C44 10.95 35.05 2 24 2zm0 36c-8.84 0-16-7.16-16-16S15.16 6 24 6s16 7.16 16 16-7.16 16-16 16zm-6-18c0-1.66 1.34-3 3-3s3 1.34 3 3v8h-6v-8zm12 0c0-1.66 1.34-3 3-3s3 1.34 3 3v8h-6v-8zM24 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                  Tokopedia
                </a>
                <a href="https://shop.tiktok.com/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-link mp-tiktok">
                  <svg width="11" height="11" viewBox="0 0 48 48" fill="white"><path d="M38.4 13.72A9.65 9.65 0 0130.21 8.3V4h-6.88v27.34a5.78 5.78 0 01-5.76 5 5.78 5.78 0 01-5.77-5.78 5.78 5.78 0 015.77-5.78c.55 0 1.08.08 1.58.2v-7a12.66 12.66 0 00-1.58-.1A12.68 12.68 0 004.9 30.56a12.68 12.68 0 0021.72 8.92V25.96a16.56 16.56 0 0011.16 4.3V23.4a9.7 9.7 0 01-7.54-2.5v-7.18h8.16z"/></svg>
                  TikTok
                </a>
                <a href="https://www.lazada.co.id/shop/montanaofficial" target="_blank" rel="noopener noreferrer" className="mp-link mp-lazada">
                  <svg width="11" height="11" viewBox="0 0 48 48" fill="white"><path d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 4.47L37.3 15 24 21.53 10.7 15 24 8.47zM10 18.3l12 6.67v16.06L10 34.36V18.3zm16 22.73V24.97l12-6.67v16.06L26 41.03z"/></svg>
                  Lazada
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
