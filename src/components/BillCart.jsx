import React, { useState } from "react";

const BillCart = ({ Carts }) => {
  const [selectShippingCharge, setSelectShippingCharge] = useState(0);

  const handleShippingCosts = (event) => {
    setSelectShippingCharge(parseFloat(event.target.value));
  };

  const countTotal = () => {
    const subTotal = Carts.reduce((p, c) => p + c.price * c.quantity, 0);
    const tax = (subTotal * 18) / 100;
    const shippingCost = selectShippingCharge;
    const total = subTotal + tax + shippingCost;
    return { subTotal, tax, shippingCost, total };
  };

  return (
    <div className="p-5 mt-3 bg-white rounded-md shadow-lg">
      <h1 className="text-2xl md:text-4xl font-semibold">
        Your Bill: ${countTotal().subTotal.toFixed(2)}
      </h1>
      <h2 className="text-lg md:text-2xl">TAX 18%: ${countTotal().tax.toFixed(2)}</h2>

      {/* Shipping Cost Dropdown */}
      <div className="my-3">
        <label className="block font-semibold">Shipping Cost</label>
        <select
          onChange={handleShippingCosts}
          className="w-full p-2 border rounded-md bg-gray-100 focus:outline-none"
        >
          <option value={0}>Upto 5 KM: Free</option>
          <option value={15}>Range 5 - 8 KM: $15.00</option>
          <option value={25}>Range 9 - 15 KM: $25.00</option>
          <option value={40}>Above 15 KM: $40.00</option>
        </select>
      </div>

      <h2 className="text-lg md:text-2xl">Shipping Cost: ${countTotal().shippingCost.toFixed(2)}</h2>
      <h2 className="text-xl md:text-2xl my-2">Total Amount: ${countTotal().total.toFixed(2)}</h2>

      {/* Pay Now Button */}
      <button className="w-full rounded-md bg-[#928dab] text-white py-3 mt-4 hover:bg-[#7b7da8] transition">
        <p className="font-bold">Pay Now</p>
      </button>
    </div>
  );
};

export default BillCart;
