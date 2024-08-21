import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './PayList.css';

function PayList() {
    const { cartItems } = useContext(CartContext);

    // Define prices for the flavors
    const flavorPrices = {
        'Peach Spritz Refresher': 10,
        'Cherry Red Dream': 12,
        'Strawberry Vanilla Drop': 15,
    };

    // Initialize quantities state with 1 for each cart item
    const [quantities, setQuantities] = useState(
        cartItems.reduce((acc, item) => ({ ...acc, [item.name]: 1 }), {})
    );

    // Calculate the total price
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, flavor) => {
            return total + (flavorPrices[flavor.name] * quantities[flavor.name]);
        }, 0);
    };

    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phoneNumber: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, such as sending data to a server
        console.log('Form submitted:', formData);
    };

    return (
        <div className='pay-container'>
            <form onSubmit={handleSubmit} className='payment-form'>
                <h2>Payment Information</h2>
                <div className='form-group'>
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
            </form>

            <div className='order-container'>
                <h3>Order Summary</h3>
                <div className='order-summary'>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((flavor, index) => (
                            <div key={index} className='order-item'>
                                <span>{quantities[flavor.name]} x </span>
                                <span>{flavor.name}</span>
                                <span> ${flavorPrices[flavor.name] * quantities[flavor.name]}</span>
                            </div>
                        ))
                    )}
                    <hr />
                    <div className='total-price'>
                        <strong>Total Price:</strong> ${calculateTotalPrice()}
                    </div>
                </div>
                <button type="submit" className='submit-button'>Submit Payment</button>
            </div>
        </div>
    );
}

export default PayList;

