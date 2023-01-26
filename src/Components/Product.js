import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { addCart } from "../Redux/action";

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([data]);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setData(await response.clone().json());
      setProduct(await response.json());
    };
    getProduct();
  });

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col  md:flex-row justify-center items-center p-5 space-x-2">
        <div className="p-2">
          <img
            src={product.image}
            alt={product.title}
            className="w-[240px] h-[250px] md:w-[600px] md:h-[400px]"
          />
        </div>
        <div className="flex flex-col justify-center items-start p-2 space-y-3 ">
          <p className="text-gray-400 font-Anton uppercase tracking-[.15em] text-2xl">
            {product.category}
          </p>
          <h1 className="text-gray-400 font-Lora text-3xl">{product.title}</h1>
          <p className="text-gray-900 font-Lora flex justify-start items-center py-1">
            Rating: {product.rating && product.rating.rate}
            <AiFillStar />
          </p>
          <p className="font-Lora text-gray-700 text-3xl">${product.price}</p>
          <p className="font-Lora text-gray-400">{product.description}</p>
          <div className="w-full space-x-2 space-y-2 md:space-y-0 flex flex-col md:flex-row justify-start items-end">
            <button
              className="btn w-full md:w-auto"
              onClick={() => addProduct(product)}
            >
              Add to cart
            </button>
            <NavLink
              to="/cart"
              className="btn w-full md:w-auto bg-gray-400 hover:bg-gray-300"
            >
              Go to cart
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
