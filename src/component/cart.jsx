import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Cart(){
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(
      1,
      updatedCart[index].quantity + delta
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="text-center mt-10 text-xl">Your cart is empty</p>;
  }

  return (
  

    <div className="w-full h-auto mx-auto py-10 px-4 bg-[#eeeee0]">
  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Your Cart</h1>
  <div className="space-y-4">
    {cart.map((item, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row sm:justify-between gap-4 items-start sm:items-center p-4 bg-white rounded-lg shadow-sm"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-full sm:w-24 h-24 object-cover rounded"
        />
        <div className="flex flex-col sm:flex-row sm:justify-between flex-1 gap-2 sm:gap-8 mt-2 sm:mt-0">
          <div className="space-y-1">
            <h2 className="font-bold text-lg">{item.name}</h2>
            <p>Size: {item.size}</p>
            <p>Color: {item.color}</p>
            <p className="font-semibold">Price: Rs {item.price}</p>
          </div>

          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2 mt-2 sm:mt-0">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleQuantityChange(index, -1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleQuantityChange(index, 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleRemoveItem(index)}
              className="text-red-500 hover:text-red-700 mt-2 sm:mt-4"
            >
              Remove
            </button>
          </div>
        </div>
        <p className="font-bold text-lg mt-2 sm:mt-0">Rs {item.price * item.quantity}</p>
      </div>
    ))}
  </div>

  <div className="mt-6 flex flex-col sm:flex-row justify-between items-center border-t pt-4 gap-4 sm:gap-0">
    <p className="text-xl font-bold">Total: Rs {totalAmount}</p>
    <button className="bg-black text-white py-2 px-4 rounded w-full sm:w-auto">
      <Link to="/checkout">Checkout</Link>
    </button>
  </div>
</div>

  );
};


