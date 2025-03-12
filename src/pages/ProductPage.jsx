import React, { useEffect } from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../feature/product/productSlice";
import { useParams } from "react-router-dom";
import LoadingPage from "../components/LoadingPage";
import { Add } from "../feature/Cart/CartSlice";
import { toast } from "react-toastify";

const ProductPage = () => {
  const { Product, isLoading, isError, message } = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleAddToCart = (Product) => {
    dispatch(Add(Product));
    toast.success("Added to cart!");
  };

  useEffect(() => {
    dispatch(getproduct(id));

    if (isError) {
      toast.error(message);
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="p-5 min-h-screen bg-[#1f1c2c] flex justify-center">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={Product?.image}
            className="w-60 md:w-72 hover:scale-105 transition duration-200"
            alt={Product?.title}
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <span className="bg-[#928dab] text-white text-xs px-3 py-1 rounded-full">
            Free Shipping
          </span>

          <h1 className="text-2xl font-bold">{Product?.title}</h1>

          <div className="space-y-2">
            <p className="text-gray-500 line-through text-lg">${(Product?.price * 1.2).toFixed(2)}</p>
            <p className="text-4xl font-bold text-[#1f1c2c]">${Product?.price}</p>
            <p className="text-sm text-gray-600 leading-relaxed">{Product?.description}</p>
          </div>

          {/* Stock & Rating */}
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-700 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>50+ pcs. in Stock</span>
            </div>
            <div>⭐ {Product?.rating?.rate} ({Product?.rating?.count} reviews)</div>
          </div>

          {/* Buttons */}
          <button
            onClick={() => handleAddToCart(Product)}
            className="w-full bg-[#1f1c2c] text-white text-lg rounded-lg py-3 shadow-md hover:bg-[#928dab] hover:text-black transition duration-200"
          >
            <FaShoppingCart className="inline-block mr-2" />
            Add to Cart
          </button>

          <button className="w-full flex items-center justify-center border-2 border-gray-300 rounded-lg py-3 shadow-md hover:bg-opacity-30 transition duration-200">
            <FaHeart className="text-red-500 w-6 h-6 mr-2" />
            <span>Add to Wishlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
