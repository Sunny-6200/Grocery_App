import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Category = () => {
  const { categoriesData = [] } = useContext(AppContext);
  const colors = [
    "bg-red-300",
    "bg-green-300",
    "bg-yellow-300",
    "bg-blue-300",
    "bg-cyan-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-orange-300",
    "bg-teal-300",
  ];

  return (
    <div className="py-12">
      {/* Section Header */}
      <div className="flex items-center">
        <h2 className="max-w-lg text-lg font-medium capitalize">Categories</h2>
        <div className="ml-2 w-20 border-b-2 border-secondary"></div>
      </div>
      <h2 className="mt-4 text-secondary font-extrabold text-3xl capitalize">
        Shop by Collection
      </h2>
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={6}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 2 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full my-8"
      >
        {categoriesData.map((category, i) => (
          <SwiperSlide key={category.id || i}>
            <motion.div
              whileHover={{ scale: 1.05, rotate:360}}
              transition={{ duration: 0.3 }}
              className={`w-[130px] md:w-[150px] h-[170px] rounded-md ${colors[i % colors.length]} flex flex-col items-center justify-center cursor-pointer transition-transform`}
            >
              <img
                src={(() => {
                  const base = window.axios?.defaults?.baseURL ?? import.meta.env.VITE_BASEURL ?? "";
                  const img = category.image;
                  if (!img) return "https://via.placeholder.com/150x150?text=No+Image";
                  
                  if (typeof img === "string") {
                    if (img.startsWith("http") || img.startsWith("//")) return img;
                    if (img.startsWith("/")) return img;
                    return `${base.replace(/\/$/,"")}/uploads/${img}`;
                  }
                  
                  if (typeof img === "object") {
                    const url = img.url ?? img.path ?? img.filename ?? null;
                    if (!url) return "https://via.placeholder.com/150x150?text=No+Image";
                    if (url.startsWith("http") || url.startsWith("//") || url.startsWith("/")) return url;
                    return `${base.replace(/\/$/,"")}/uploads/${url}`;
                  }
                  
                  return "https://via.placeholder.com/150x150?text=No+Image";
                })()}
                alt={category.name}
                className="w-24 h-24 object-contain"
              />
              <h3 className="mt-2 text-base font-semibold text-gray-800 text-center">
                {category.name}
              </h3>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Category;

