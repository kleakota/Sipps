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
                <h6> We offer a wide range of options between <br></br>beverages, depending on the different types <br></br>of fruits you like. Starting from pineapple, <br></br>oranges, blueberries and many more. <br></br>We offer a wide range of options between <br></br>beverages, depending on the different types <br></br>of fruits you like. Starting from pineapple, <br></br>oranges, blueberries and many more.</h6>
                <Link to="/shop"><button> Check Out</button></Link>
            </div>

        </div>
    )
}

export default Fourth;