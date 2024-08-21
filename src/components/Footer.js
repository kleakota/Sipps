import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <div className='footer-container'>

            <div className='brand-container'>
                <h3> SIPPS</h3>
                <h5> low-cal beverages</h5>
            </div>

            <div className='details-container'>
                <p> info@sipps.com</p>
                <p> +044 231 8677</p>
                <p> Blvd. Wilson Square</p>
            </div>

        </div>
    )
}

export default Footer;
