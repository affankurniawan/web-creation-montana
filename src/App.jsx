import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

function App() {
  const [page, setPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  return (
    <>
      <Header page={page} setPage={setPage} cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} onCartClick={() => setIsCartOpen(true)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cartItems} removeFromCart={removeFromCart} setPage={setPage} />
      
      {page === 'home' && <Home setPage={setPage} addToCart={addToCart} />}
      {page === 'about' && <About setPage={setPage} />}
      {page === 'product' && <Product setPage={setPage} addToCart={addToCart} />}
      {page === 'contact' && <Contact />}
      {page === 'blog' && <Blog setPage={setPage} />}
      
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
