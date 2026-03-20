import { useState } from 'react';
import { X, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import './ProductDetail.css';

export default function ProductDetail({ product, isOpen, onClose, addToCart }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const variants = product.variants || ['Standard'];
  const badge = product.tag;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `Halo Montana! Saya ingin membeli:\n\n` +
      `📦 *${product.name}*\n` +
      `📋 Varian: ${variants[selectedVariant]}\n` +
      `🔢 Jumlah: ${quantity}\n` +
      `💰 Harga: ${product.price}\n\n` +
      `Mohon konfirmasi ketersediaan. Terima kasih!`
    );
    window.open(`https://wa.me/6281234567890?text=${message}`, '_blank');
  };

  const changeQty = (delta) => {
    setQuantity(prev => Math.max(1, Math.min(99, prev + delta)));
  };

  return (
    <>
      <div className={`product-detail-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
      <div className={`product-detail-modal ${isOpen ? 'open' : ''}`}>
        <button className="pd-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="pd-layout">
          {/* Image */}
          <div className="pd-image-section">
            {badge && (
              <span className={`pd-badge pd-badge-${badge.toLowerCase()}`}>
                {badge}
              </span>
            )}
            <img src={product.img} alt={product.name} />
          </div>

          {/* Info */}
          <div className="pd-info-section">
            {product.category && (
              <span className="pd-category">{product.category}</span>
            )}
            
            <h2>{product.name}</h2>

            <div className="pd-price-row">
              <span className="pd-price">{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="pd-price-original">{product.originalPrice}</span>
                  <span className="pd-discount-badge">Sale</span>
                </>
              )}
            </div>

            <p className="pd-description">
              {product.description || 'Produk berkualitas tinggi dari Montana. Tahan lama, praktis, dan harga terjangkau untuk kebutuhan sehari-hari Anda.'}
            </p>

            {/* Variants */}
            {variants.length > 1 && (
              <div className="pd-variant-group">
                <span className="pd-variant-label">Pilih Varian</span>
                <div className="pd-variant-options">
                  {variants.map((variant, idx) => (
                    <button
                      key={idx}
                      className={`pd-variant-btn ${selectedVariant === idx ? 'active' : ''}`}
                      onClick={() => setSelectedVariant(idx)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="pd-quantity-group">
              <span className="pd-variant-label">Jumlah</span>
              <div className="pd-quantity-selector">
                <button className="pd-qty-btn" onClick={() => changeQty(-1)}>−</button>
                <input
                  className="pd-qty-value"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, Math.min(99, parseInt(e.target.value) || 1)))}
                  min="1"
                  max="99"
                />
                <button className="pd-qty-btn" onClick={() => changeQty(1)}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="pd-actions">
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                Tambah ke Keranjang
              </button>
              <button className="btn btn-secondary btn-lg" onClick={handleBuyNow}>
                Beli Sekarang via WhatsApp
              </button>
            </div>

            {/* Features */}
            <div className="pd-features">
              <div className="pd-feature">
                <ShieldCheck size={14} />
                <span>Kualitas Terjamin</span>
              </div>
              <div className="pd-feature">
                <Truck size={14} />
                <span>Siap Kirim</span>
              </div>
              <div className="pd-feature">
                <RotateCcw size={14} />
                <span>Bisa Retur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
