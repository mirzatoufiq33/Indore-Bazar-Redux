import { useEffect } from "react";
import bgimage from "../assets/image.png.png";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getproducts } from "../feature/product/productSlice";
import LoadingPage from "../components/LoadingPage";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { products, isLoading } = useSelector((state) => state.Products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    dispatch(getproducts());
  }, [user, dispatch, navigate]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="p-5 bg-[#1f1c2c] min-h-screen">
      {/* Hero Section */}
      <section className="p-5 h-auto md:h-96 flex flex-col items-center justify-around md:flex-row">
        {/* Left Content */}
        <div className="text-white text-center md:text-left">
          <h1 className="font-bold text-4xl max-w-sm my-2">
            <span className="font-bold text-[#928dab] text-5xl p-1">Shop</span>
            <br />
            Anything, Anywhere
          </h1>
          <p className="text-xl my-2">Get Your Orders 24/7</p>
          <button className="text-xl rounded-md py-3 px-6 bg-[#928dab] text-black hover:bg-[#1f1c2c] hover:border hover:text-white hover:border-white focus:outline-offset-2 duration-200">
            <p className="font-bold">Shop Now</p>
          </button>
        </div>

        {/* Right Image */}
        <img
          src={bgimage}
          className="w-[90%] max-w-[400px] md:w-auto md:max-w-full hidden md:block hover:scale-110 duration-150"
          alt="Shopping Illustration"
        />
      </section>

      {/* Product List */}
      <h1 className="text-center text-3xl font-bold my-4 text-[#928dab]">
        All Products
      </h1>

      <div className="p-5 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
