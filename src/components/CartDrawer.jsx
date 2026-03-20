import { X, Trash2, ShoppingBag, MessageCircle, ExternalLink } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cartItems, removeFromCart, updateQuantity, setPage }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const totalAmount = cartItems.reduce((sum, item) => {
    const numPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
    return sum + (numPrice * item.quantity);
  }, 0);

  const handleCheckoutWA = () => {
    let message = `Halo Montana! Saya ingin memesan:\n\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name}\n   Jumlah: ${item.quantity}\n   Harga: ${item.price}\n\n`;
    });
    message += `Total: Rp ${totalAmount.toLocaleString('id-ID')}\n\nMohon konfirmasi ketersediaan. Terima kasih!`;
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
              <p>Keranjang Anda masih kosong.</p>
              <button className="btn btn-primary" onClick={() => { setPage('product'); onClose(); }}>Mulai Belanja</button>
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
            <div className="cart-total">
              <span className="total-label">Total</span>
              <span className="total-amount">Rp {totalAmount.toLocaleString('id-ID')}</span>
            </div>
            <p className="cart-note">Pengiriman dihitung saat checkout</p>
            
            <div className="checkout-options">
              <button className="checkout-btn checkout-btn-wa" onClick={handleCheckoutWA}>
                <MessageCircle size={16} />
                Checkout via WhatsApp
              </button>
              <button className="checkout-btn checkout-btn-marketplace" onClick={() => window.open('https://www.tokopedia.com/montanaofficial', '_blank')}>
                <ExternalLink size={16} />
                Beli di Tokopedia
              </button>
              <button className="checkout-btn checkout-btn-marketplace" onClick={() => window.open('https://shopee.co.id/montanaofficial', '_blank')}>
                <ExternalLink size={16} />
                Beli di Shopee
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
