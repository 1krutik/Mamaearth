import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import Login from './Components/Pages/Login';
import AllData from './Components/Pages/AllData';
import ProductDetail from './Components/Pages/ProductDetails';
import AddToCart from './Components/Pages/AddToCart';
import Buy from './Components/Pages/Buy';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/alldata/:category" element={<AllData />} />
          <Route path="/productdetails/:category/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<AddToCart />} />
          <Route path='/buy' element={<Buy/>}/>


          
          
            {/* <Route path="/cart" element={<Cart />} /> */}
            {/* <Route path="/category" element={<Category />} /> */}
            {/* <Route path="/alldata/:category" element={<Alldata />} />
            <Route path="/productdetails/:category/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy" element={<BuyPage />} /> */} 
          

        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
