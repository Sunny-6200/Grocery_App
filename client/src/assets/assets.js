// general images
import banner from "./banner.webp";
import app_store from "./app_store.png";
import play_store from "./play_store.png";
import footer_img from "./footer_img.png";
import fruits_right from "./fruits_right.webp";
import logo from "./logo.svg";
import hero_img1 from "./hero_img1.webp";
import hero_img2 from "./hero_img2.webp";
import hero_img3 from "./hero_img3.webp";
import hero_left_img from "./hero_left_img.webp";
import leef_layer_bg from "./leef_layer_bg.png";
import payment from "./payment.png";
import pink_bg from "./pink_bg.jpg";
import vegetables_left from "./vegetables_left.webp";
import organic_fruits from "./organic_fruits.webp";
import organic_vegetables from "./organic_vegetables.webp";
import profile_pic from "./profile_pic.webp";
import about_hero from "./about_hero.webp";
// blogs images
import blog_1 from "./blog_1.webp";
import blog_2 from "./blog_2.webp";
import blog_3 from "./blog_3.webp";

// brands logo
import brand_1 from "./brand_1.webp";
import brand_2 from "./brand_2.webp";
import brand_3 from "./brand_3.webp";
import brand_4 from "./brand_4.webp";
import brand_5 from "./brand_5.webp";

// categories
import dry_fruit from "./dry_fruit.webp";
import eggs from "./eggs.webp";
import flakes from "./flakes.webp";
import fruits from "./fruits.webp";
import vegetable from "./vegetable.webp";
import juice from "./juice.webp";
import spices from "./spices.webp";
import rice from "./rice.webp";

// products
import cashews1 from "./cashews1.webp";
import cashews2 from "./cashews2.webp";
import corn1 from "./corn1.webp";
import corn2 from "./corn2.webp";
import garlic1 from "./garlic1.webp";
import garlic2 from "./garlic2.webp";
import gourd1 from "./gourd1.webp";
import gourd2 from "./gourd2.webp";
import mushrooms1 from "./mushrooms1.webp";
import mushrooms2 from "./mushrooms2.webp";
import organic_broccoli1 from "./organic_broccoli1.webp";
import organic_broccoli2 from "./organic_broccoli2.webp";
import peas1 from "./peas1.webp";
import peas2 from "./pease2.webp";
import potatos1 from "./potatos1.webp";
import potatos2 from "./potatos2.webp";
import pumpkin1 from "./pumpkin1.webp";
import pumpkin2 from "./pumpkin2.webp";
import raisins1 from "./raisins1.webp";
import raisins2 from "./raisins2.webp";
import redcabbage1 from "./red_cabbage1.webp";
import redcabbage2 from "./red_cabbage2.webp";


export const assets = {
  banner,
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  play_store,
  app_store,
  footer_img,
  fruits_right,
  logo,
  hero_img1,
  hero_img2,
  hero_img3,
  hero_left_img,
  pink_bg,
  leef_layer_bg,
  payment,
  vegetables_left,
  organic_fruits,
  organic_vegetables,
  profile_pic,
  about_hero,
};
export const categories = [
  { _id: 1, image: dry_fruit, name: "Dry Fruits" },
  { _id: 2, image: eggs, name: "Eggs" },
  { _id: 3, image: flakes, name: "Flakes" },
  { _id: 4, image: fruits, name: "Fruits" },
  { _id: 5, image: vegetable, name: "Vegetables" },
  { _id: 6, image: juice, name: "Fresh Juices" },
  { _id: 7, image: spices, name: "Spices" },
  { _id: 8, image: rice, name: "Rice" },
];
export const products = [
  {
    _id: 1,
    name: "Organic Cashews",
    price: 400.00,
    offerPrice: 350.00,
    smallDesc: "Crunchy and healthy cashews.",
    longDesc:
      "Premium organic cashews packed with nutrition. Perfect for snacking or adding to recipes.",
    weight: "250g",
    category: "Dry Fruits",
    images: [cashews1, cashews2],
  },
  {
    _id: 2,
    name: "Sweet Corn",
    price: 15.00,
    offerPrice: 13.00,
    smallDesc: "Fresh and juicy corn.",
    longDesc:
      "Hand-picked sweet corn rich in fiber and vitamins. Great for soups, salads, and snacks.",
    weight: "500g",
    category: "Vegetables",
    images: [corn1, corn2],
  },
  {
    _id: 3,
    name: "Fresh Garlic",
    price: 40.00,
    offerPrice: 38.00,
    smallDesc: "Strong aroma and flavor.",
    longDesc:
      "Fresh garlic bulbs, perfect for seasoning, sauces, and boosting immunity.",
    weight: "250g",
    category: "Vegetables",
    images: [garlic1, garlic2],
  },
  {
    _id: 4,
    name: "Bottle Gourd",
    price: 50.00,
    offerPrice: 45.00,
    smallDesc: "Light and refreshing vegetable.",
    longDesc:
      "Organic bottle gourd, rich in water content and essential nutrients.",
    weight: "1kg",
    category: "Vegetables",
    images: [gourd1, gourd2],
  },
  {
    _id: 5,
    name: "Button Mushrooms",
    price: 45.00,
    offerPrice: 44.00,
    smallDesc: "Fresh white mushrooms.",
    longDesc:
      "Farm fresh button mushrooms, ideal for stir-fry, pasta, and pizzas.",
    weight: "250g",
    category: "Vegetables",
    images: [mushrooms1, mushrooms2],
  },
  {
    _id: 6,
    name: "Organic Broccoli",
    price: 44.00,
    offerPrice: 40.00,
    smallDesc: "Rich in vitamins.",
    longDesc:
      "Organic broccoli packed with antioxidants and vitamins. A must-have for healthy meals.",
    weight: "400g",
    category: "Vegetables",
    images: [organic_broccoli1, organic_broccoli2],
  },
  {
    _id: 7,
    name: "Green Peas",
    price: 120.00,
    offerPrice: 115.00,
    smallDesc: "Sweet and tender peas.",
    longDesc:
      "Fresh green peas full of flavor. Perfect for curries, soups, and rice dishes.",
    weight: "500g",
    category: "Vegetables",
    images: [peas1, peas2],
  },
  {
    _id: 8,
    name: "Fresh Potatoes",
    price: 76.00,
    offerPrice: 70.00,
    smallDesc: "Staple food ingredient.",
    longDesc:
      "High-quality farm fresh potatoes. Ideal for fries, curries, and daily meals.",
    weight: "2kg",
    category: "Vegetables",
    images: [potatos1, potatos2],
  },
  {
    _id: 9,
    name: "Organic Pumpkin",
    price: 50.00,
    offerPrice: 48.00,
    smallDesc: "Rich in beta carotene.",
    longDesc: "Fresh organic pumpkin, great for soups, pies, and curries.",
    weight: "1kg",
    category: "Vegetables",
    images: [pumpkin1, pumpkin2],
  },
  {
    _id: 10,
    name: "Raisins",
    price: 110.00,
    offerPrice: 108.00,
    smallDesc: "Sweet and chewy dry fruit.",
    longDesc:
      "Premium quality raisins packed with natural sweetness and energy.",
    weight: "250g",
    category: "Dry Fruits",
    images: [raisins1, raisins2],
  },
  {
    _id: 11,
    name: "Red Cabbage",
    price: 90.00,
    offerPrice: 75.00,
    smallDesc: "Crunchy and colorful.",
    longDesc:
      "Farm fresh red cabbage, grown with care and packed with natural goodness. Its vibrant purple-red leaves are crisp, tender, and loaded with vitamins, minerals, and antioxidants that support a healthy lifestyle. Perfect for adding color and crunch to fresh salads, enhancing flavor in stir-fries, or making delicious homemade pickles. Whether enjoyed raw, sautéed, or fermented, this versatile vegetable brings both nutrition and taste to your everyday meals.",
    weight: "1kg",
    category: "Vegetables",
    images: [redcabbage1, redcabbage2],
  },
];
export const blogs = [
  {
    _id: 1,
    image: blog_1,
    title: "How Organic Foods Support a Healthier Lifestyle",
    date: "17 October, 2025",
    desc: "Want to eat cleaner and feel better? Explore the powerful health benefits of organic foods — from nutrient-rich produce to reduced pesticide exposure — and see why going organic is a smart choice for your body.",
  },
  {
    _id: 2,
    image: blog_2,
    title: "10 Nutrient-Rich Foods That Your Body Will Love",
    date: "October 22, 2025",
    desc: "Boost your health with the power of superfoods! From berries to leafy greens, discover the top 10 foods that can revitalize your body and mind.",
  },
  {
    _id: 3,
    image: blog_3,
    title: "Green Eating Made Easy: Choose Foods That Help the Planet",
    date: "October 30, 2025",
    desc: "Understand the importance of sustainable eating and how it benefits both human health and the environment. Gain insights on reducing food waste, selecting seasonal and locally sourced foods, and encouraging eco-conscious agriculture.",
  },
];
// src/data/myOrders.js

export const myOrders = [
  {
    _id: 1,
    date: "2025-08-20",
    status: "Delivered",
    totalAmount: 15.5,
    paymentMethod: "COD",
  },
  {
    _id: 2,
    date: "2025-08-22",
    status: "Processing",
    totalAmount: 12,
    paymentMethod: "ONLINE",
  },
  {
    _id: 3,
    date: "2025-08-25",
    status: "Shipped",
    totalAmount: 7,
    paymentMethod: "ONLINE",
  },
];
