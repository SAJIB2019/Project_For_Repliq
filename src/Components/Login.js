import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

const Login = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="bg-white flex flex-col rounded-xl py-[80px] px-[20px] md:px-[40px]">
          <div className="space-y-1">
            <div className="flex flex-col">
              <label className="font-bold text-xl pb-2">Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border-2 border-gray-400 rounded-md py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-xl pb-2">Password</label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="border-2 border-gray-400 rounded-md py-1"
              />
            </div>
            <div>
              <button className="w-full mt-4 text-white border-2 border-blue-400 rounded-xl py-1 font-bold uppercase bg-pink-500 hover:bg-slate-50 hover:text-black">
                <a href="">sign in</a>
              </button>
            </div>
            <div>
              <a href="" className="underline cursor-pointer">
                Forget Password
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center pt-3">Or</div>
            <div className="flex items-center justify-center space-x-5 text-[25px] pt-4">
              <div>
                <a href="">
                  <FaFacebook />
                </a>
              </div>
              <div className="p-1 rounded-full">
                <a href="">
                  <AiFillTwitterCircle />
                </a>
              </div>
              <div>
                <a href="">
                  <AiFillGoogleCircle />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
