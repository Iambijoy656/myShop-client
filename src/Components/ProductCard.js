import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, handleAddToCart }) => {
  console.log(product);

  const { _id, img, name, price, seller } = product;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="object-cover w-full h-48" alt="product pic" src={img} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Sell by: ${seller}</p>
        <div className="card-actions flex  justify-center items-center mt-3 mr-3">
          <Link>
            <button
             onClick={() => handleAddToCart(product)}
              type="button"
              className="px-5 py-3 rounded-lg font-semibold space-x-1 bg-black text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
            >
              Add to cart
            </button>
          </Link>
          <Link to={`/productDetails/${_id}`}>
            <button
              type="button"
              className="px-5 py-3 rounded-lg font-semibold space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
