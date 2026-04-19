import React, { useState } from "react";

import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router";

import socks from "../assets/socks.jpg";
import bag from "../assets/bag.jpg";
import lipstic from "../assets/lipstic.jpg";
import hand from "../assets/handbag.jpg";
import showes1 from "../assets/sh1.jpg";
import showes2 from "../assets/sh2.jpg";
import showes3 from "../assets/sh3.jpg";
import showes4 from "../assets/sh4.jpg";
import { Link } from "react-router";
import Watch from "../assets/watch.jpg";
import headphone from "../assets/headphone.jpg";
import headphone1 from "../assets/phone1.jpg";
import headphone2 from "../assets/phone2.jpg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

export default function Shop() {
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
    {
      id: 9,
      name: "Smart Watch",
      image: Watch,
      desc: "Smart watch with fitness tracking and notifications",
      oldPrice: 15000,
      price: 12000,
      rating: 5,
    },
    {
      id: 10,
      name: "Wireless Headphone",
      image: headphone,
      desc: "Wireless headphone with deep bass and clear sound",
      oldPrice: 9000,
      price: 7200,
      rating: 4,
    },
    {
      id: 11,
      name: "Gaming Headphone",
      image: headphone1,
      desc: "Gaming headphone with surround sound and mic",
      oldPrice: 11000,
      price: 8800,
      rating: 5,
    },
    {
      id: 12,
      name: "Noise Cancelling Headphone",
      image: headphone2,
      desc: "Noise cancelling headphone for immersive audio",
      oldPrice: 13000,
      price: 10400,
      rating: 4,
    },
    {
      id: 13,
      name: "Casual Trouser",
      image: img1,
      desc: "Comfortable casual trouser for daily wear",
      oldPrice: 4000,
      price: 3200,
      rating: 4,
    },
    {
      id: 14,
      name: "Formal Trouser",
      image: img2,
      desc: "Elegant formal trouser for office wear",
      oldPrice: 5000,
      price: 3999,
      rating: 5,
    },
    {
      id: 15,
      name: "Track Trouser",
      image: img3,
      desc: "Flexible track trouser for workouts",
      oldPrice: 3800,
      price: 2999,
      rating: 4,
    },
    {
      id: 16,
      name: "Sports Shoes",
      image: img4,
      desc: "Durable sports shoes with strong grip",
      oldPrice: 8000,
      price: 6400,
      rating: 5,
    },
  ]);

  const handleRating = (productId, newRating) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, rating: newRating } : item
      )
    );
  };

  const navigate = useNavigate();

  const handleViewDetails = (product) => {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
    navigate("/product");
  };

  return (
    <div>
    <div className="mt-24 bg-[#f7f7f7] w-full h-[90px] flex items-center justify-center">
        <h1 className="font-bold text-xl uppercase">Shop</h1>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 mb-10 mt-5">
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

            <div className="flex text-yellow-500 text-lg mt-2 cursor-pointer">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} onClick={() => handleRating(product.id, star)}>
                  {star <= product.rating ? "★" : "☆"}
                </span>
              ))}
            </div>

            <div className="mt-4  flex-col items-center  gap-3">
              <p className="text-gray-500 line-through text-sm">
                INR {product.oldPrice}
              </p>
              <p className="text-black font-extralight text-lg">
                INR {product.price}
              </p>
              <button
                onClick={() => handleViewDetails(product)}
                className="w-full bg-black text-white py-2 rounded"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
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
              <FaPhoneAlt className="text-2xl" /> +91 5656565623
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
              <a
                className="p-2 rounded-full bg-black hover:bg-gray-700 text-red-400"
              >
                <FaInstagram />
              </a>
              <a
                className="p-2 rounded-full bg-black hover:bg-gray-700 text-white"
              >
                <FaGithub />
              </a>
              <a
                className="p-2 rounded-full bg-black hover:bg-gray-700 text-blue-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black text-center text-black py-4 text-lg">
          © {new Date().getFullYear()} My Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
