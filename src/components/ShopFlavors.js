import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './ShopFlavors.css';

function ShopFlavors() {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

    const flavors = [
        {
            name: 'Peach Spritz Refresher',
            description: 'Peach Spritz Refresher contains a combination of peaches, grapes,  pomegranate and a hint of lime. This refreshing drink will keep you energized and cool all day long.Peach Spritz Refresher contains a combination of peaches, grapes,  pomegranate and a hint of lime. This refreshing drink will keep you energized and cool all day long.',
            imageClass: 'one-photo',
            textClass: 'one-text',
            containerClass: 'flavor-one-container'
        },
        {
            name: 'Cherry Red Dream',
            description: 'Cherry Red Dream contains only cherries and lemons, giving a sweet and powerful taste. Cherry Red Dream contains only cherries and lemons, giving a sweet and powerful taste to a summer day drink you won’t find anywhere else. Cherry Red Dream contains only cherries and lemons, giving a sweet and powerful taste. Cherry Red Dream contains only cherries and lemons, giving a sweet and powerful taste to a summer day drink you won’t find anywhere else.',
            textClass: 'two-text',
            imageClass: 'two-photo',
            containerClass: 'flavor-two-container'
        },
        {
            name: 'Strawberry Vanilla Drop',
            description: 'Strawberry Vanilla Drop contains only strawberries and a hint of vanilla to balance out the heat. Strawberry Vanilla Drop contains only strawberries and a hint of vanilla to balance out the heat on a summer day with the lovely sweetness of our unforgettable beverage, low on calories and delicious. Strawberry Vanilla Drop contains only strawberries and a hint of vanilla to balance out the heat.',
            imageClass: 'three-photo',
            textClass: 'three-text',
            containerClass: 'flavor-three-container'
        },
    ];

    const isInCart = (flavorName) => cartItems.includes(flavorName);

    return (
        <div className='flavors-container'>
            {flavors.map((flavor, index) => (
                <div key={index} className={flavor.containerClass}>
                    <div className={flavor.imageClass}></div>
                    <div className={flavor.textClass}>
                        <h3>{flavor.name}</h3>
                        <h5>FLAVORS</h5>
                        <p>{flavor.description}</p>
                        {isInCart(flavor.name) ? (
                            <button onClick={() => removeFromCart(flavor.name)}>Remove</button>
                        ) : (
                            <button onClick={() => addToCart(flavor.name)}>Add To Cart</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShopFlavors;

