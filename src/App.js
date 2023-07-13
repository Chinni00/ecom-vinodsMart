
import './App.css';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Components/Products';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { CartProvider } from './Pages/CartContext';
import { useSelector } from 'react-redux';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  const token = useSelector(state=>state.cart.token);
  return (
    <CartProvider>
    <Router>
    <div className="App">
    <Routes>
         {token && <Route path='/home' element={<Home />}/>}
         {token && <Route path='/products/:productName' element={<Products />} />}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
       </Routes>
    
    </div>
    </Router></CartProvider>
  );
}

export default App;
