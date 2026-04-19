import { CiLinkedin, CiFacebook, CiLocationOn } from "react-icons/ci";
import { FaGithub, FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import socks from "../assets/socks.jpg";
import bag from "../assets/bag.jpg";
import lipstic from "../assets/lipstic.jpg";
import hand from "../assets/handbag.jpg";
import showes1 from "../assets/sh1.jpg";
import showes2 from "../assets/sh2.jpg";
import showes3 from "../assets/sh3.jpg";
import showes4 from "../assets/sh4.jpg";
import Watch from "../assets/watch.jpg";
import headphone from "../assets/headphone.jpg";
import headphone1 from "../assets/phone1.jpg";
import headphone2 from "../assets/phone2.jpg";

import { useState } from "react";
import { Link } from "react-router";

export default function Home() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Socks",
      image: socks,
      desc: "Comfortable everyday cotton socks",
      oldPrice: 500,
      price: 200,
      rating: 5,
    },
    {
      id: 2,
      name: "Travel Bag",
      image: bag,
      desc: "Durable bag for travel",
      oldPrice: 12000,
      price: 9500,
      rating: 4,
    },
    {
      id: 3,
      name: "Lipstick",
      image: lipstic,
      desc: "Long-lasting vibrant lip color",
      oldPrice: 1500,
      price: 800,
      rating: 4,
    },
    {
      id: 4,
      name: "Hand Bag",
      image: hand,
      desc: "Stylish and spacious handbag",
      oldPrice: 6000,
      price: 4800,
      rating: 4,
    },
    {
      id: 5,
      name: "Running Shoes",
      image: showes1,
      desc: "Lightweight shoes for comfortable running",
      oldPrice: 5000,
      price: 4200,
      rating: 4,
    },
    {
      id: 6,
      name: "Hiking Boots",
      image: showes2,
      desc: "Durable boots for rough terrain",
      oldPrice: 12000,
      price: 9500,
      rating: 5,
    },
    {
      id: 7,
      name: "Trainers",
      image: showes3,
      desc: "Versatile shoes for gym workouts",
      oldPrice: 1500,
      price: 800,
      rating: 4,
    },
    {
      id: 8,
      name: "Cleats",
      image: showes4,
      desc: "Shoes with studs for sports",
      oldPrice: 6000,
      price: 4800,
      rating: 4,
    },

  

  ]);

  const handleRating = (productId, newRating) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, rating: newRating } : item
      )
    );
  };

  return (
    <section className="w-full px-4 mt-35">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden mb-10 h-auto">
        <div className="flex flex-col md:flex-row bg-amber-300 p-6 md:w-2/3 items-center gap-8">
          <div className="flex flex-col gap-6 text-white max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need for the Journey
            </h2>

            <p className="text-base md:text-lg">
              We provide quality products with excellent service and customer
              satisfaction.
            </p>

            <Link
              to="/shop"
              className="w-32 h-10 rounded-xl bg-red-400 text-white flex items-center justify-center"
            >
              Shop Now
            </Link>
          </div>

          <div className="flex flex-row items-center gap-1 md:ml-6 justify-center">
            <img
              src={img1}
              alt=""
              className="w-24  h-34 rounded-xl object-cover"
            />
            <img
              src={img2}
              alt=""
              className="w-24   h-24 rounded-xl object-cover"
            />
            <img
              src={img3}
              alt=""
              className="w-24 h-24 rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="bg-red-300 flex  justify-center items-center md:w-1/3 w-full h-64 md:h-auto">
          <img src={img4} alt="" className="w-34 h-34 object-cover " />
        </div>
      </div>

      <div className="py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md p-4 border-2 border-amber-50"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>

              <p className="text-gray-600 text-sm mt-1">{product.desc}</p>

              <div className="flex text-black text-lg mt-2 cursor-pointer">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => handleRating(product.id, star)}
                  >
                    {star <= product.rating ? "★" : "☆"}
                  </span>
                ))}
              </div>

              <div className="mt-4  flex items-center  gap-3">
                <p className="text-black font-extralight line-through text-sm">
                  INR {product.oldPrice}
                </p>
                <p className="text-black font-light text-lg">
                  INR {product.price}
                </p>
     
            </div>
             <div className="w-28 h-8 rounded bg-gray-900 text-lg text-teal-50   hover:bg-red-300 mt-5">
  <Link to="/shop" className=" flex justify-center "> shop now</Link>
</div>
              </div>
          ))}
        </div>
      </div>

      <div className="p-4  flex flex-col sm:flex-col md:flex-col lg:flex-row bg-white border-2 border-amber-50 max-w-7xl max-h-[1400px] md:max-h[1100px] rounded-2xl mx-auto m-10">
        <div className=" flex flex-col sm:flex-col md:flex-row w-full md:w-full">
          <div className=" flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-6  rounded ">
            <h1 className="text-black text-3xl font-bold">Smart Watch</h1>{" "}
            <p className="text-black mt-2 font-bold">
              A modern smartwatch with health tracking and notifications.
            </p>
            <div className="mt-10 ">
              <img
                src={Watch}
                alt="Smart Watch "
                className="w-100 h-70 object-contain rounded-2xl "
              />          
            </div>
<div className="w-41 h-15 rounded-2xl bg-gray-800 text-2xl text-teal-50 mt-2.5  hover:bg-red-300">
  <Link to="/shop" className=" flex justify-center pt-3 "> shop now</Link>
</div>

          </div>


          <div className=" flex-col mt-20 sm:mt-5 md:mt-20 text-center  sm:w-100 md:w-70 h-59 sm:h-100 md:h-50">
            <p>
              This modern smartwatch combines style and functionality, offering
              real-time health tracking, heart rate monitoring, sleep analysis,
              and fitness tracking. Stay connected with call, message, and
              notification alerts directly on your wrist. Its sleek design, long
              battery life, and customizable watch faces make it perfect for
              everyday use and active lifestyles.
            </p>
          </div>
        </div>

        <div className="flex-col md:flex-row  gap-6 p-0 sm:p-4 md:p-1 rounded">
          <h1 className="text-black text-2xl font-bold">Headphones</h1>

          <div className="mt-3">
            <img
              src={headphone}
              alt="Headphones"
              className="w-120  h-48 object-cover rounded"
            />
          </div>
          <h1 className="text-black text-xl font-semibold">Headphone</h1>
          <p className="text-gray-700">
           High-quality headphones with clear sound, deep bass, and comfortable design.
          </p>

          <div className="flex flex-row gap-4 mt-2">
            <div>
              <img
                src={headphone1}
                alt="Image 1"
                className="w-60 h-35 object-cover rounded-2xl"
              />
            </div>
            <div>
              <img
                src={headphone2}
                alt="Image 2"
                className="w-60 h-35 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>


      <footer className="bg-[#f6f6f8] text-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Dukan
            </h3>
            <p className="text-lg leading-relaxed">
              We provide high‑quality products with a focus on reliability,
              affordability, and customer satisfaction. Trusted by local
              businesses and individual customers.
            </p>
            <p className="text-lg mt-3 flex items-center gap-1 text-black">
              <CiLocationOn className="text-2xl text-red-600" />
              India
            </p>
            <p className="text-lg flex items-center gap-1 text-black">
              <FaPhoneAlt className="text-2xl" /> +91 5656556565
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-black mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-lg">
              <li>
                <Link to="/" className="hover:text-green-400 hover:text-2xl">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="hover:text-green-400 hover:text-2xl"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400 hover:text-2xl"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400 hover:text-2xl"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black mb-3">Follow Us</h3>
            <div className="flex gap-4">
             
            </div>
          </div>
        </div>

        <div className="border-t border-black text-center text-black py-4 text-lg">
          © {new Date().getFullYear()} My Store. All rights reserved.
        </div>
      </footer>
    </section>
  );
}
