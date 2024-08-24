import Navbar from "../Navbar";
import React from "react";
import cartBackground from '../images/nineImg.jpg'; // Import your background image from "react";
import Footer from "../Footer";
import CartList from "../CartList";

function CartPage() {

  const tabs = [
    { name: 'Home', link: '/', label: 'Home' },
    { name: 'Shop', link: '/shop', label: 'Shop' },
];

    return (
      <>
      <Navbar
                backgroundImage={cartBackground}
                tabs={tabs}
                centeredText="Shopping Cart"
            />
      <CartList/>
      <Footer/>
      </>
    );
  }
  
  export default CartPage;