import React, { useState } from "react";

const AddUser = () => {
  return (
    <div>
      <div>
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="bg-white flex flex-col rounded-xl py-[80px] px-[20px] md:px-[40px]">
            <div className="space-y-1">
              <div className="flex flex-col">
                <label className="font-bold text-xl pb-2">Customer Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="border-2 border-gray-400 rounded-md py-1"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold text-xl pb-2">Customer Email</label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="border-2 border-gray-400 rounded-md py-1"
                />
              </div>
              <div>
                <button className="w-full mt-4 text-white border-2 border-blue-400 rounded-xl py-1 font-bold uppercase bg-pink-500 hover:bg-slate-50 hover:text-black">
                  <a href="">Add Customer</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
