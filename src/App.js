import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coats from './components/CollectionPages/A-Coat';
import Coord from './components/CollectionPages/B-Coord';
import Bottom from './components/CollectionPages/C-Pants_Short';
import Collection from './components/CollectionPages/Collection';
import Tops from './components/CollectionPages/D-Tops';
import Header from "./components/Header/header";
import Navbar from './components/Navbar/navbar';
import AboutUs from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Product from './pages/product';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Header/>} />
        <Route path='/collection' element={<Collection/>}/>
        {/* <Route path='/coords' element={<ShopCategory banner={coord_banner} category="coord"/>} /> */}
        <Route path='/coat' element={<Coats/>}/>
        <Route path='/coords' element={<Coord/>}/>
        <Route path='/bottoms' element={<Bottom/>} />
        <Route path='/tops' element={<Tops/>} />
        <Route path="/product" element={<Product/>}> 
          <Route path=':productId' element={<Product/>}/>
        </Route>
        
        <Route path='/aboutUs' element={<AboutUs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
library.add(fas);
