import Navbar from '../Navbar';
import ShopFlavors from '../ShopFlavors';
import Footer from '../Footer';
import shopBackground from '/Users/kleak/sippswebsite/src/components/images/fifthImg.jpg'; 

function ShopPage() {

  const tabs = [
    { name: 'Home', link: '/', label: 'Home' },
    { name: 'Cart', link: '/cart', label: 'Cart' },
];

  return (
    <>
    <Navbar
                backgroundImage={shopBackground}
                tabs={tabs}
                centeredText="Shop the flavors"
            />
    <ShopFlavors/>
    <Footer/>
    </>
  );
}

export default ShopPage;