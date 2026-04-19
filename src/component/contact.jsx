import React, { useEffect, useState, useRef } from "react";
import { CiLocationOn } from "react-icons/ci";

import {
  FaInstagram,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import emailjs from "emailjs-com";
import { Link } from "react-router";

export default function Contact() {
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation(`${pos.coords.latitude}, ${pos.coords.longitude}`);
        },
        () => {
          setUserLocation("Location");
        }
      );
    } else {
      setUserLocation("Geolocation not supported");
    }
  }, []);

  const subjectRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    e.preventDefault(),
      setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!formData.email.includes("@"))
      newErrors.email = "Enter a valid email address";
    alert(newErrors.email);

    if (formData.phone.trim().length < 10)
      newErrors.phone = "Enter a valid phone number";
    alert(newErrors.phone);

    if (formData.subject.trim() === "") {
      newErrors.subject = "Subject is required";
      subjectRef.current.focus();
    }

    if (formData.message.trim().length < 5)
      newErrors.message = "Message is too short";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    emailjs
      .send(
        "service_l1w0p4f",
        "template_jlbp3wn",
        formData,
        "s0x0M8Wf5e_K5BX75"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send message");
      });
  };

  return (
  

 <div>
  <div className="mt-24 bg-[#f7f7f7] w-full h-[90px] flex items-center justify-center">
    <h1 className="font-bold text-xl uppercase">Contact Us</h1>
  </div>

  <div className="w-full mx-auto py-5 mt-20 flex flex-col md:flex-row gap-10 bg-red-200 px-6 md:px-12">
    <div className="w-full md:w-1/2 space-y-7">
      <h2 className="text-2xl font-bold">Get in Touch</h2>

      <div>
        <p className="font-semibold mb-2">Follow Us</p>
      </div>
    </div>

    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full md:w-1/2 p-6 md:p-10 "
    >
      <div className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-blue-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="flex flex-col">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-blue-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="flex flex-col">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-blue-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div className="flex flex-col">
        <input
          ref={subjectRef}
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full border border-blue-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      <div className="flex flex-col">
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-blue-400 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <div className="flex justify-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full md:w-auto">
          Send Message
        </button>
      </div>
    </form>
  </div>

  <footer className="bg-[#f6f6f8] text-gray-950">
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <h3 className="text-2xl font-semibold text-black mb-3">Dukan</h3>
        <p className="text-lg leading-relaxed">
          We provide high‑quality products with a focus on reliability, affordability, and customer satisfaction. Trusted by local businesses and individual customers.
        </p>
        <p className="text-lg mt-3 flex items-center gap-1 text-black">
          <CiLocationOn className="text-2xl text-red-600" /> India
        </p>
        <p className="text-lg flex items-center gap-1 text-black">
          <FaPhoneAlt className="text-2xl" /> +91 5626959223
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-black mb-3">Quick Links</h3>
        <ul className="space-y-2 text-lg">
          <li>
            <Link to="/" className="hover:text-green-400 hover:text-2xl">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-green-400 hover:text-2xl">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-400 hover:text-2xl">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-400 hover:text-2xl">
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
</div>

   
  );
}
