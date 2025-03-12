import React from "react";
import { useDispatch } from "react-redux";
import { Remove } from "../feature/Cart/CartSlice";

const CartItems = ({ Cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white flex flex-col md:flex-row items-center space-x-0 md:space-x-6 p-4 rounded-md border shadow-sm">
      {/* Product Image */}
      <img src={Cart?.image} className="w-24 md:w-32 mx-auto" alt={Cart?.title} />

      {/* Product Info */}
      <div className="text-center md:text-left space-y-2">
        <h1 className="text-lg md:text-2xl font-bold">Product: {Cart?.title}</h1>
        <h2 className="text-md md:text-xl font-semibold">Price: ${Cart?.price}</h2>
        <h3 className="text-sm md:text-base font-semibold">Qty: {Cart?.quantity}</h3>

        {/* Remove Button */}
        <button
          onClick={() => dispatch(Remove(Cart.id))}
          className="bg-red-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItems;
