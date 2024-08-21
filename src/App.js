import './App.css';
import HomePage from './components/pages/HomePage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ShopPage from './components/pages/ShopPage';
import CartPage from './components/pages/CartPage';
import PayPage from './components/pages/PayPage';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/pay" element={<PayPage/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

