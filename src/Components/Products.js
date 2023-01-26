import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([data]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  return (
    <div className="bg-[ffffff] flex flex-col justify-center items-center container">
      <div className="flex flex-col items-center justify-center py-8">
        <h1 className="text-4xl font-bold font-Lora">Featured Product</h1>
        <p className=" text-[15px] font-Lora">
          Summer Collection New Modern Design
        </p>
        <div className="space-x-5">
          <button
            className="btn bg-gray-200 hover:bg-white"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn bg-gray-200 hover:bg-white"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn bg-gray-200 hover:bg-white"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn bg-gray-200 hover:bg-white"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filter.map((product) => (
          <NavLink to={`products/${product.id}`}>
            <div
              key={product.id}
              className="flex flex-col justify-start items-center
           border-2 border-green-200 rounded-2xl p-5 m-2 w-[250px] h-[360px] transition duration-500 hover:scale-[1.05]"
            >
              <div>
                <img
                  src={product.image}
                  alt="product"
                  className="w-[100%] h-[150px] rounded-3xl"
                />
              </div>
              <div className="flex space-x-10">
                <div className="flex flex-col pt-3">
                  <p className="text-[14px] font-Anton">{product.title}</p>
                  <p className="text-[15px]  font-Lora">{product.category}</p>
                  <p className="font-bold">${product.price}</p>
                </div>
                <div className="flex justify-center items-center text-2xl">
                  <FaShoppingCart />
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Products;
{
  /* <NavLink to={`products/${product.id}`}>
                  
                  </NavLink> */
}
