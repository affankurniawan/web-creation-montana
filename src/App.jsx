import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header page={page} setPage={setPage} />
      
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'about' && <About setPage={setPage} />}
      {page === 'product' && <Product setPage={setPage} />}
      {page === 'contact' && <Contact />}
      
      <Footer setPage={setPage} />
    </>
  );
}

export default App;
