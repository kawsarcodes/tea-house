import Banner from './component/Banner';
import Clients from './component/Clients';
import FeaturedProducts from './component/FeaturedProducts';
import Footer from './component/Footer';
import GreatTea from './component/GreatTea';
import NavBar from './component/NavBar';

export default function App() {
  return (
    <>
      <NavBar />
      <main className="container mx-auto px-5 lg:px-20 overflow-x-hidden">
        <Banner />
        <FeaturedProducts id="shop"/>
        <GreatTea />
        <Clients id="client"/>
      </main>
      <Footer id="contact"/>
    </>
  );
}
