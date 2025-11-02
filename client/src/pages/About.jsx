import { assets } from "../assets/assets";
import Brands from "../components/Brands";
const About = () => {
  return (
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center">
        About Our Farm & Farmers
      </h1>
      <p className="text-lg mt-4 text-center max-w-4xl mx-auto">
       Our farm is built on a foundation of sustainability, care, and community. We specialize in growing fresh, organic produce using eco-friendly farming methods that protect the soil and environment. Our dedicated farmers work passionately, combining traditional wisdom with modern agricultural practices to ensure the highest quality harvests. Each seed is planted with love and nurtured naturally, bringing you food that’s pure, healthy, and full of flavor. We believe in farming with integrity — from our fields to your family’s table.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 bg-black text-white">
        <div>
          <img src={assets.about_hero} alt="" className="w-full md:w-1/2" />
        </div>
        <div className="flex flex-col gap-3 p-3">
          <h1 className="text-3xl font-bold">Deal of the Day</h1>
          <p>
            {" "}
            Della semper accumsan magna et ultrices. Aenean at varius purus.
            Nulla egestas semper tellus.
          </p>
          <button className="bg-secondary text-white px-4 py-2">Shop</button>
        </div>
      </div>
      <Brands />
    </div>
  );
};
export default About;
