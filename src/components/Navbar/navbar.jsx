import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import logo from '../Assets/Logo.png';
import './navbar.css';

export default function Navbar(props){
    const [menu, setMenu] = useState("Home")
    const {getTotalCartItems} = useContext(ShopContext);
    const currentPath = window.location.pathname;

    const getNavbarColor = () => {
      // Define colors based on pages
      const colorMap = {
        '/': 'linear-gradient(to right, #B67E34 50.01%, #325219 50%)',
        '/collection': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/aboutUs': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/contact': 'linear-gradient(to right, #B67E34 50.01%, #325219 50%)',
        '/login': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/signup': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/cart': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/coords': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/tops': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        '/bottoms': 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
        [`/product/${props.id}`]: 'linear-gradient(to right, #325219 50.01%, #325219 50%)',
      };

      
  
      // Use the current path to get the corresponding color
      return colorMap[currentPath] || 'default-color';
    };
  
    
    return (
        <nav style={{ background: getNavbarColor() }} className='flex justify-between px-[1.2em] md:flex-row flex-row-reverse'>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </label>
        
        <a href="/"> <img src={logo} className="md:w-[180px] md:h-[60px] w-[150px] h-[40px] md:pt-1 pt-3 cursor-pointer" alt="ecochic apparel logo" /> </a>
        
        <ul className='flex list-none text-white space-x-4 font-content justify-around'> 
          <li onClick={() => {setMenu("home")}} style={{color: menu === "home" ? "#B67E34" : "#ffffff"}}> <Link to='/'> Home </Link> </li>
          <li onClick={() => {setMenu("collection")}} style={{color: menu === "collection" ? "#B67E34" : "#ffffff"}}> <Link to='/collection'> Collections </Link> </li>
          <li onClick={() => {setMenu("contact")}} style={{color: menu === "contact" ? "#B67E34" : "#ffffff"}}> <Link to='/contact'> Contact Us </Link> </li> 
          <li onClick={() => {setMenu("login")}} style={{color: menu === "login" ? "#B67E34" : "#ffffff"}}>  <Link to='/login'> Login </Link> </li>
          <li className='relative' onClick={() => {setMenu("cart")}} style={{color: menu === "cart" ? "#B67E34" : "#ffffff"}}>  <Link to='/cart'> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className="cart-icon"/> 
            <div className="absolute top-6 left-6 bg-red-500 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs">
               {getTotalCartItems()}
            </div>
          </Link>
          </li>
        </ul>
      </nav>
      
    );
};