import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { Link } from 'react-router-dom';
import headerImage from '../Assets/model-removebg.png';
import './headers.css';

const Header = () => {
    return (
        <div className="header">

            <img src={headerImage} alt=""/>
  
            <div className="left">
            <h1>Timeless Elegance Modern Comfort</h1>
    
            <p id="desc">
                Experience the perfect fusion of Timeless Elegance and Modern Comfort in every stitch, creating clothing that transcends trends and brings you lasting style and unmatched coziness.
            </p>
    
                <Link to='/collection' className="button">Browse Collection</Link>
            
            <div className="socmed">
                {/* <a href="#"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a> */}
            </div>
            </div>
  
            <div className="right">
            
            <div className="content">
                <h1>" NURTURE NATURE, FLAUNT YOUR FASHION." </h1>
    
                <p id="desc">Earn one point for every kilogram of plastic bottles you bring to our designated collection points. Once you've accumulated enough points, you can exchange them for any clothing items made from recycled materials available in our collection.</p>
            </div>
    
            <div className="location">
                <div className="address">
                <p>
                    <span> <FontAwesomeIcon icon="fa-solid fa-location-dot" /> &nbsp; Main Plastic Bottles Collection Point </span> <br/>
                    1119 Downtown Bulacan Jones Ave. Quezon City
                </p>
                </div>
            </div>

            </div>
    
        </div>
    )
}

export default Header;