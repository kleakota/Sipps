import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Navbar.css';

function Navbar({ backgroundImage, tabs, centeredText }) {
  const { cartItems } = useContext(CartContext);

  const handleScroll = (e, link) => {
    if (link.startsWith('/#')) {
      e.preventDefault();
      const sectionId = link.split('#')[1];
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className='navbar-container'>
        <div className='SIPPStext'><h2>SIPPS</h2></div>
        {tabs.map((tab, index) => (
          <div key={index} className={`${tab.name}Text`}>
            <Link to={tab.link} onClick={(e) => handleScroll(e, tab.link)}>
              <h4>
                {tab.label} 
                {tab.name === 'Cart' && cartItems.length > 0 && ` (${cartItems.length})`}
              </h4>
            </Link>
          </div>
        ))}
      </div>
      
      <div className='centered-text'>
        <h1>{centeredText}</h1>
      </div>
    </div>
  );
}

export default Navbar;




