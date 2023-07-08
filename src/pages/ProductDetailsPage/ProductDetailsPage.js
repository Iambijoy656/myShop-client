import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetailsPage = () => {
  const product = useLoaderData();
  const { _id, name, price, ratings, seller, img, category } = product;

  return (
    <section>
      <div>
        <h1 className="text-center text-5xl text-orange-500 font-semibold my-3 mb-6 ">
          Buy Our Best Product
        </h1>
      </div>
      <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="image1"
              src={img}
              className="object-cover w-full aspect-square rounded-xl"
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <img
                alt="Les Paul"
                src={img}
                className="object-cover w-full aspect-square rounded-xl"
              />

              <img
                alt="Les Paul"
                src={img}
                className="object-cover w-full aspect-square rounded-xl"
              />
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Product Details
            </strong>

            <div className="flex justify-between mt-8">
              <div className="max-w-[35ch]">
                <h1 className="text-2xl font-bold">{name}</h1>

                <p className="mt-0.5 text-sm">Best Product</p>

                <div className="mt-2 -ml-0.5 flex">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>

                  <svg
                    className="w-5 h-5 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <p className="text-xl font-bold">
                {price} <span className="text-xs text-gray-500">$</span>
              </p>
            </div>

            <details className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="block">
                <div>
                  <div className="prose max-w-none group-open:hidden">
                    <p>
                      "Step out in style with our elegant and versatile little
                      black dress, designed to turn heads and make a statement
                      at any occasion. Embrace timeless sophistication and
                      effortless glamour
                    </p>
                  </div>
                </div>
              </summary>
            </details>

            <form className="mt-5">
              <div className="p-5">
                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold">Seller By: </span>
                    {seller}
                  </p>
                  <p>
                    <span className="font-semibold">Cetegory:</span> {category}
                  </p>
                </div>

                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold">Name:</span>
                    {name}
                  </p>
                </div>

                <div className="w-full mt-2 text-gray-500 flex  justify-between items-center">
                  <p>
                    <span className="font-semibold">Ratings: </span>
                    {ratings}
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
