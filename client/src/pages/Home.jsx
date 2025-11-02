import Hero from '../components/Hero';
import Category from '../components/Category'; 
import Products from '../components/Products';
import CallToAction from '../components/CallToAction';
import Blogs from '../components/Blogs';
import Brands from '../components/Brands';
import NewLetter from '../components/NewLetter';


const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Products />
      <CallToAction />
      <Blogs />
      <Brands />
      <NewLetter />     
    </div>
  );
};

export default Home;
