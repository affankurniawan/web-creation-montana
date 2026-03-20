import { useState } from 'react';
import { X, ShieldCheck, Truck, RotateCcw, ShoppingCart } from 'lucide-react';
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

  const handleBuyWA = () => {
    const message = encodeURIComponent(
      `Halo Montana! Saya tertarik untuk pembelian grosir:\n\n` +
      `📦 *${product.name}*\n` +
      `🔢 Estimasi Jumlah: ${quantity} pcs (atau lebih)\n` +
      `💰 Harga satuan: ${product.price}\n\n` +
      `Mohon infokan:\n` +
      `• Harga grosir / harga partai\n` +
      `• Minimum order quantity (MOQ)\n` +
      `• Estimasi pengiriman\n\n` +
      `Terima kasih!`
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
          <X size={18} />
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

            <p className="pd-description" style={{whiteSpace: 'pre-line'}}>
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

            {/* Actions — Cart + WhatsApp */}
            <div className="pd-actions">
              <button className="pd-cta-btn pd-cta-cart" onClick={handleAddToCart}>
                <ShoppingCart size={15} />
                Tambah ke Keranjang
              </button>
              <button className="pd-cta-btn pd-cta-wa" onClick={handleBuyWA}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Grosir via WhatsApp
              </button>
            </div>

            {/* Marketplace CTAs */}
            <div className="pd-marketplace-section">
              <span className="pd-variant-label">Beli di Marketplace</span>
              <div className="pd-marketplace-grid">
                <a href="https://shopee.co.id/montanaofficial" target="_blank" rel="noopener noreferrer" className="pd-mp-btn pd-mp-shopee">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="white"><path d="M24 4c-3.87 0-7 3.13-7 7h3c0-2.21 1.79-4 4-4s4 1.79 4 4h3c0-3.87-3.13-7-7-7zM8 14L4 44h40L40 14H8zm16 22c-5.52 0-10-4.48-10-10h3c0 3.87 3.13 7 7 7s7-3.13 7-7h3c0 5.52-4.48 10-10 10z"/></svg>
                  Shopee
                </a>
                <a href="https://www.tokopedia.com/montanaofficial" target="_blank" rel="noopener noreferrer" className="pd-mp-btn pd-mp-tokopedia">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="white"><path d="M24 2C12.95 2 4 10.95 4 22c0 11.05 8.95 20 20 20s20-8.95 20-20C44 10.95 35.05 2 24 2zm0 36c-8.84 0-16-7.16-16-16S15.16 6 24 6s16 7.16 16 16-7.16 16-16 16zm-6-18c0-1.66 1.34-3 3-3s3 1.34 3 3v8h-6v-8zm12 0c0-1.66 1.34-3 3-3s3 1.34 3 3v8h-6v-8zM24 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                  Tokopedia
                </a>
                <a href="https://shop.tiktok.com/montanaofficial" target="_blank" rel="noopener noreferrer" className="pd-mp-btn pd-mp-tiktok">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="white"><path d="M38.4 13.72A9.65 9.65 0 0130.21 8.3V4h-6.88v27.34a5.78 5.78 0 01-5.76 5 5.78 5.78 0 01-5.77-5.78 5.78 5.78 0 015.77-5.78c.55 0 1.08.08 1.58.2v-7a12.66 12.66 0 00-1.58-.1A12.68 12.68 0 004.9 30.56a12.68 12.68 0 0021.72 8.92V25.96a16.56 16.56 0 0011.16 4.3V23.4a9.7 9.7 0 01-7.54-2.5v-7.18h8.16z"/></svg>
                  TikTok Shop
                </a>
                <a href="https://www.lazada.co.id/shop/montanaofficial" target="_blank" rel="noopener noreferrer" className="pd-mp-btn pd-mp-lazada">
                  <svg width="14" height="14" viewBox="0 0 48 48" fill="white"><path d="M24 4L6 14v20l18 10 18-10V14L24 4zm0 4.47L37.3 15 24 21.53 10.7 15 24 8.47zM10 18.3l12 6.67v16.06L10 34.36V18.3zm16 22.73V24.97l12-6.67v16.06L26 41.03z"/></svg>
                  Lazada
                </a>
              </div>
            </div>

            {/* Features */}
            <div className="pd-features">
              <div className="pd-feature">
                <ShieldCheck size={13} />
                <span>Kualitas Terjamin</span>
              </div>
              <div className="pd-feature">
                <Truck size={13} />
                <span>Siap Kirim</span>
              </div>
              <div className="pd-feature">
                <RotateCcw size={13} />
                <span>Bisa Retur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
