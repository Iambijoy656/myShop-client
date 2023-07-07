import React from "react";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://c0.wallpaperflare.com/preview/447/552/983/ecommerce-online-shop-euro-thumbnail.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-3xl font-bold">
            Shop the latest trends and discover unbeatable deals <br />
            at our premier online store.
          </h1>
          <p className="mb-5">Click here and Show Products</p>
          <Link to="/allProducts">
            <button
              type="button"
              className="px-5 py-3 font-semibold space-x-1 bg-orange-500 text-white transition-colors duration-500 ease-in-out hover:bg-orange-600"
            >
              Show Our Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Display;
