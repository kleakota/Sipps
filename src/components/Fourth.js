import React from 'react';
import './Fourth.css';
import { Link } from 'react-router-dom';

function Fourth(){
    return (
        <div className='fourth-container'>

            <div className='photo-container'>
            </div>

            <div className='text-container'>
                <h3> Find out what you like.</h3>
                <h6> We offer a wide range of options between beverages, depending on the different types of fruits you like. Starting from pineapple, oranges, blueberries and many more. We offer a wide range of options between beverages, depending on the different types of fruits you like. </h6>
                <Link to="/shop"><button> Check Out</button></Link>
            </div>

        </div>
    )
}

export default Fourth;