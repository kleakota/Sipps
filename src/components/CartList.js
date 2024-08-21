import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './CartList.css';
import { Link } from 'react-router-dom';

// Define a price for each flavor. This could be moved to CartContext if needed.
const flavorPrices = {
    'Peach Spritz Refresher': 10,
    'Cherry Red Dream': 12,
    'Strawberry Vanilla Drop': 15,
};

function CartList() {
    
    const { cartItems, removeFromCart } = useContext(CartContext);

    // Initialize quantities state with 1 for each cart item
    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => ({ ...acc, [item.name]: 1 }), {})
    );

    // Increase the quantity of the specified flavor
    const increaseQuantity = (flavorName) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [flavorName]: prevQuantities[flavorName] + 1,
        }));
    };

    // Decrease the quantity of the specified flavor and remove from cart if quantity is zero
    const decreaseQuantity = (flavorName) => {
        setQuantities((prevQuantities) => {
            const newQuantity = prevQuantities[flavorName] > 1 ? prevQuantities[flavorName] - 1 : 0;
            if (newQuantity === 0) {
                removeFromCart(flavorName);
            }
            return {
                ...prevQuantities,
                [flavorName]: newQuantity,
            };
        });
    };

    // Calculate the total price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, flavor) => {
            return total + (flavorPrices[flavor.name] * quantities[flavor.name]);
        }, 0);
    };

    return (
        <div className='cart-container'>
            {cartItems.length === 0 ? (
                <div className='empty-cart-message'>
                    <h3>There are currently no items in your cart.</h3>
                </div>
            ) : (
                <>
                    {cartItems.map((flavor, index) => (
                        <div key={index} className='cart-item'>
                            <div className={`cart-photo ${flavor.className}`}></div>
                            <div className='cart-text'>
                                <h4>{flavor.name}</h4>
                                <h6>${flavorPrices[flavor.name] * quantities[flavor.name]}</h6>
                                <div className='quantity-control'>
                                    <button onClick={() => decreaseQuantity(flavor.name)}>-</button>
                                    <span>{quantities[flavor.name]}</span>
                                    <button onClick={() => increaseQuantity(flavor.name)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className='line-cont'>
                    <hr></hr>
                    </div>

                    <div className='total-price'>
                        <h3>Total Price: ${calculateTotalPrice()}</h3>
                        <Link to="/pay"><button> Check Out</button></Link>
                    </div>

                    <div className='line-cont'>
                    <hr></hr>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartList;
