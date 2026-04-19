import React from "react";

import { CiLocationOn } from "react-icons/ci";
import { FaInstagram, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

import img1 from "../assets/vision.jpg";
import img2 from "../assets/goal.jpg";
import img3 from "../assets/mission.webp";
import ceo from "../assets/ceo.png";
import devolper from "../assets/Devolper.png";
import designer from "../assets/Designer.png";
export default function About() {
  return (
    <div>
      <div className="mt-24 bg-[#f7f7f7] w-full h-[90px] flex items-center justify-center">
        <h1 className="font-bold text-xl uppercase">About Us</h1>
      </div>

      <div className="flex flex-col items-center justify-center text-center px-4 md:px-16 mt-10 gap-3">
        <p className="text-sm uppercase tracking-widest text-gray-700">
          Who Are We
        </p>

        <h1 className="text-4xl md:text-4xl font-bold">Welcome To Dukan</h1>

        <hr className="w-20 h-1 bg-black border-none my-2" />

        <p className="max-w-4xl text-gray-900 leading-relaxed text-lg md:text-lg">
          It is your trusted travel partner, helping you plan and enjoy
          memorable trips. We offer exciting travel experiences and personalized
          journeys that make every trip special. Our goal is to make travel
          easy, fun, and unforgettable for everyone.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-16 mt-19">
        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={img1}
            className="w-full max-w-[250px] max-h-[250px]  object-contain"
          />
          <div>
            <h1 className="  text-start font-bold text-lg uppercase mt-20">
              Our Vision
            </h1>
            <p className=" text-start mt-8 text-black text-2xl">
              At this, our vision is to be the most trusted and inspiring
              travel partner, helping every traveler create unforgettable
              memories. We aim to make journeys enjoyable, meaningful, and full
              of discovery.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={img3}
            className="w-full max-w-[150px] max-h-[250px]  object-contain"
          />
          <div>
            <h1 className="  text-start font-bold text-lg uppercase mt-20">
              Our Mission
            </h1>
            <p className=" text-start mt-8 text-black text-2xl">
              Our mission is to provide easy, fun, and personalized travel
              experiences. We want to connect people with new places, cultures,
              and experiences while making travel planning simple and
              stress-free.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center gap-4">
          <img
            src={img2}
            className="w-full max-w-[250px]   max-h-[250px]  object-contain"
          />
          <div>
            <h1 className=" text-start font-bold text-lg uppercase mt-20">
              Our Goals
            </h1>
            <p className=" text-start text-black text-2xl  mt-8 ">
              We strive to offer unique and exciting travel experiences,
              ensuring every customer enjoys a safe and memorable journey. Our
              goal is to inspire people to explore new destinations, discover
              the world, and create lasting memories.
            </p>
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
              <FaPhoneAlt className="text-2xl" /> +91 5626262626
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
            
          </div>
        </div>

        <div className="border-t border-black text-center text-black py-4 text-lg">
          © {new Date().getFullYear()} My Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
