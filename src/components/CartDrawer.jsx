import { X, Trash2 } from 'lucide-react';
import './CartDrawer.css';

export default function CartDrawer({ isOpen, onClose, cartItems, removeFromCart, setPage }) {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate a mock total (since all items are currently Rp 0, we'll pretend they have base prices if needed, or just show 0)
  const totalAmount = cartItems.reduce((sum, item) => {
    // Basic number extraction if price is string like "Rp 25.000"
    const numPrice = parseInt(item.price.replace(/[^0-9]/g, ''), 10) || 0;
    return sum + (numPrice * item.quantity);
  }, 0);

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        
        <div className="cart-header">
          <h2>Keranjang Belanja ({totalItems})</h2>
          <button className="close-cart-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart flex flex-col items-center justify-center p-5 text-center h-full">
              <div className="text-gray-400 mb-2">
                {/* SVG Icon Placeholder */}
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
              <p className="text-gray-500">Keranjang Anda masih kosong.</p>
              <button className="btn btn-primary mt-4" onClick={() => { setPage('product'); onClose(); }}>Mulai Belanja</button>
            </div>
          ) : (
            <ul className="cart-list">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.img} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h4 className="cart-item-title line-clamp-2 text-sm">{item.name}</h4>
                    <span className="cart-item-price text-yellow font-bold text-sm block mt-1">{item.price}</span>
                    <div className="cart-item-actions mt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-500">Kuantitas: {item.quantity}</span>
                      <button className="remove-btn text-red" onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
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
            <div className="cart-total flex justify-between items-center mb-3">
              <span className="font-bold">Total Harga:</span>
              <span className="font-bold text-yellow text-lg">Rp {totalAmount.toLocaleString('id-ID')}</span>
            </div>
            <p className="text-xs text-gray-500 mb-3 text-center">Biaya pengiriman akan dihitung saat Checkout.</p>
            <button className="btn btn-primary" style={{width: '100%'}}>Checkout Sekarang</button>
          </div>
        )}

      </div>
    </>
  );
}
