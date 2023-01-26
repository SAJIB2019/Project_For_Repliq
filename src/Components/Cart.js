import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart, delCart } from "../Redux/action";
import { BsPlusLg } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 bg-gray-300 py-5">
        <div className="container py-4">
          <h3 className="text-3xl font-Lora">Your Cart is Empty</h3>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-gray-300 py-6">
          <div className="container py-4">
            <div className="flex flex-col md:flex-row items-center md:space-x-40">
              <div className="rounded-md">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[220px] h-[230px] rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-start text-2xl md:text-3xl ">
                <h3>{product.title}</h3>
                <p className="py-2">
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <div className="flex items-center space-x-3 ">
                  <button
                    className="btn bg-white"
                    onClick={() => handleDel(product)}
                  >
                    <FiMinus />
                  </button>
                  <button
                    className="btn bg-white"
                    onClick={() => handleAdd(product)}
                  >
                    <BsPlusLg />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="flex justify-end items-end">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
