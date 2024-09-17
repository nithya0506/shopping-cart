
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginComponent from './auth/login';
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/" element={<LoginComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
