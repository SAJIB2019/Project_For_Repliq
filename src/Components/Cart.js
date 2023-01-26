import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addCart } from "../Redux/action";

const Cart = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([data]);

  //   const dispatch = useDispatch();
  //   const addProduct = (product) => {
  //     dispatch(addCart(product));
  //   };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setData(await response.clone().json());
      setProduct(await response.json());
    };
    getProduct();
  }, []);

  return <div>Cart {product.image}</div>;
};

export default Cart;
