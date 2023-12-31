import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import ProductCard from "../../Components/ProductCard";
import { CartContext } from "../../context/CartProvider";
import { addToDb } from "../../utils/fakeDB";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const AllProducts = () => {
  const { data: allProducts = [], isLoading } = useQuery({
    queryKey: ["allProducts"],
    queryFn: async () => {
      const response = await fetch(
        "https://my-shop-server-phi.vercel.app/allProducts"
      );
      const data = await response.json();
      return data;
    },
  });

  const { user } = useContext(AuthContext);
  const [cart, setCart] = useContext(CartContext);
  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find(
      (existingProduct) => existingProduct._id === product._id
    );
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existingProduct) => existingProduct._id !== product._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(product._id);
    toast.info("Info: Product Added!", { autoClose: 500 });
  };

  if (isLoading && !allProducts.length) return <Loading />;

  return (
    <div className="my-10 mt-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto my-10">
        {allProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></ProductCard>
        ))}
        {isLoading && <Loading></Loading>}
      </div>
    </div>
  );
};

export default AllProducts;
