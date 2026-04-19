import React, { useEffect, useState } from "react";

const Checkout = () => {
  const [delivery, setDelivery] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    state: "",
    street: "",
    postalCode: "",
  });

  const [saveForNextTime, setSaveForNextTime] = useState(false);
  const [shippingMethod, setShippingMethod] = useState("Free");
  const [paymentMethod, setPaymentMethod] = useState("Unpaid");

  const [billingSame, setBillingSame] = useState(true);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedDelivery = JSON.parse(localStorage.getItem("deliveryDetails"));
    if (savedDelivery) {
      setDelivery(savedDelivery);
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    setDelivery({ ...delivery, [e.target.name]: e.target.value });
  };

  const handleSaveForNextTime = () => {
    if (saveForNextTime) {
      localStorage.setItem("deliveryDetails", JSON.stringify(delivery));
    } else {
      localStorage.removeItem("deliveryDetails");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    for (const key in delivery) {
      if (!delivery[key]) {
        alert(`Please fill ${key}`);
        return;
      }
    }

    if (shippingMethod === "free" && paymentMethod === "unpaid") {
      const totalAmount = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      if (totalAmount < 20000) {
        alert("Unpaid method is allowed only for orders over 20,000");
        return;
      }
    }

    handleSaveForNextTime();
    alert("Order placed successfully!");
  };

  return (
   
    <div className="w-full h-auto mx-auto py-10 px-4 bg-[#eeeee0]">
  <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Checkout</h1>

  <form onSubmit={handleSubmit} className="space-y-6">
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Delivery Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={delivery.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={delivery.email}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={delivery.phone}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={delivery.city}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={delivery.country}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={delivery.state}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street No"
          value={delivery.street}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={delivery.postalCode}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={saveForNextTime}
          onChange={() => setSaveForNextTime(!saveForNextTime)}
          id="saveNext"
          className="w-4 h-4"
        />
        <label htmlFor="saveNext" className="text-gray-700">
          Save for next time
        </label>
      </div>
    </div>

    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Shipping Method</h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="shipping"
            value="free"
            checked={shippingMethod === "free"}
            onChange={() => setShippingMethod("free")}
            className="w-4 h-4"
          />
          Free Shipping
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="shipping"
            value="cod"
            checked={shippingMethod === "cod"}
            onChange={() => setShippingMethod("cod")}
            className="w-4 h-4"
          />
          Cash on Delivery
        </label>
      </div>

      {shippingMethod === "free" && (
        <div className="flex flex-col gap-2 mt-2 ml-0 sm:ml-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="freeMethod"
              value="paid"
              checked={paymentMethod === "paid"}
              onChange={() => setPaymentMethod("paid")}
              className="w-4 h-4"
            />
            Paid
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="freeMethod"
              value="unpaid"
              checked={paymentMethod === "unpaid"}
              onChange={() => setPaymentMethod("unpaid")}
              className="w-4 h-4"
            />
            Unpaid (Only if total &gt; 20,000)
          </label>
        </div>
      )}
    </div>

    <div className="p-4 space-y-2">
      <h2 className="text-xl font-bold">Billing Address</h2>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={billingSame}
          onChange={() => setBillingSame(!billingSame)}
          className="w-4 h-4"
        />
        <label>Billing address same as shipping address</label>
      </div>
      {!billingSame && (
        <p className="text-gray-600 text-sm sm:text-base">
          You can add different billing address here.
        </p>
      )}
    </div>

    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold">Order Summary</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row justify-between">
            <p>
              {item.name} x {item.quantity}
            </p>
            <p>Rs {item.price * item.quantity}</p>
          </div>
        ))
      )}
      <div className="flex flex-col sm:flex-row justify-between font-bold text-lg">
        <p>Total</p>
        <p>
          Rs {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>

    <button
      type="submit"
      className="w-full bg-black text-white py-3 rounded text-lg hover:bg-gray-800 transition"
    >
      Pay Now
    </button>
  </form>
</div>

  );
};

export default Checkout;
