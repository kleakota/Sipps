import React from 'react';
import Navbar from '../Navbar';
import Middle from '../Middle';
import Third from '../Third';
import Fourth from '../Fourth';
import Footer from '../Footer';
import homeBackground from '../images/introImg.jpg'; // Import your background image

function HomePage() {

  const tabs = [
    { name: 'About', link: '/#middle-section', label: 'About' },
    { name: 'Shop', link: '/shop', label: 'Shop' },
    { name: 'Contact', link: '/#footer-section', label: 'Contact' },
  ];

  return (
    <>
      <Navbar
        backgroundImage={homeBackground}
        tabs={tabs}
        centeredText="Refreshing and delicious low-cal beverages"
      />
      <div id="middle-section">
        <Middle /> 
      </div>
      <Third />
      <Fourth />
      <div id="footer-section">
      <Footer />
      </div>
    </>
  );
}

export default HomePage;
