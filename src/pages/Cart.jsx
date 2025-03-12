import React, { useEffect } from "react";
import CartItems from "../components/CartItems";
import BillCart from "../components/BillCart";
import { useSelector } from "react-redux";
import LoadingPage from "../components/LoadingPage";
import notfound from "../assets/load.gif";

const Cart = () => {
  const { Carts, isLoading, isError, message } = useSelector((state) => state.Cart);

  useEffect(() => {
    if (isError || message) {
      console.error(message);
    }
  }, [isError, message]);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (Carts.length === 0) {
    return (
      <div className="min-h-[90vh] bg-[#1f1c2c] flex items-center justify-center">
        <div className="text-center text-3xl font-semibold text-[#928dab] flex flex-col items-center space-y-4">
          <img src={notfound} className="w-40" alt="No Items Found" />
          <p>No Items Found!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1f1c2c] min-h-screen p-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cart Items Section */}
          <div className="space-y-4">
            {Carts.map((cartItem) => (
              <CartItems key={cartItem.id} Cart={cartItem} />
            ))}
          </div>

          {/* Billing Section */}
          <BillCart Carts={Carts} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
