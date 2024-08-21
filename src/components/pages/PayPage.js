import Navbar from "../Navbar";
import React from "react";
import payBackground from '/Users/kleak/sippswebsite/src/components/images/payImg.jpg'; // Import your background image from "react";
import Footer from "../Footer";
import PayList from "../PayList";

function PayPage() {

    const tabs = [
      { name: 'Home', link: '/', label: 'Home' },
      { name: 'Shop', link: '/shop', label: 'Shop' },
      { name: 'Cart', link: '/cart', label: 'Cart' },
  ];
  
      return (
        <>
        <Navbar 
                  backgroundImage={payBackground}
                  tabs={tabs}
                  centeredText="Check Out"
              />
        <PayList/>
        <Footer/>
        </>
      );
    }
    
    export default PayPage;