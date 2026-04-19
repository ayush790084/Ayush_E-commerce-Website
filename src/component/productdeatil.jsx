import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Checkout from "./cart";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Yellow");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
    if (!selectedProduct) {
      setProduct(null);
    } else {
      setProduct(selectedProduct);
    }
  }, []);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({
      ...product,
      size,
      color,
      quantity,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">No product found!</h1>
      </div>
    );
  }

  return (
   
    <div className="w-full mx-auto py-10 px-4 mt-24 min-h-screen bg-[#e0e0de]">
  <div className="flex flex-col md:flex-row gap-6 rounded-3xl items-center md:items-start">
    <img
      src={product.image}
      alt={product.name}
      className="w-full md:w-1/2 lg:w-5/12 h-64 sm:h-80 md:h-96 object-contain"
    />
    <div className="flex-1 space-y-4 w-full md:w-1/2">
      <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-700 font-bold text-lg sm:text-xl">Rs {product.price}</p>

      <div className="space-y-2">
        <label className="font-semibold">Size:</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-semibold">Color:</label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option>Yellow</option>
          <option>Green</option>
          <option>Red</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="font-semibold">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-black text-white py-2 px-4 rounded mt-4 w-full hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  </div>
</div>

  );
};

export default ProductDetail;
