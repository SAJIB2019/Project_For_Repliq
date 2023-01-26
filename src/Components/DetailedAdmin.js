import React from "react";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { IoIosPersonAdd } from "react-icons/io";
import { AiFillRead } from "react-icons/ai";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";
import Profile from "../images/my photo.jpg";
const data = [
  { name: "2017", men: "33", women: "32", others: "40" },
  { name: "2018", men: "42", women: "57", others: "60" },
  { name: "2019", men: "51", women: "60", others: "28" },
  { name: "2020", men: "60", women: "35", others: "68" },
  { name: "2021", men: "95", women: "95", others: "49" },
  { name: "2022", men: "88", women: "27", others: "66" },
  { name: "2023", men: "52", women: "48", others: "100" },
];

const DetailedAdmin = () => {
  return (
    <div className="bg-[#000000] w-full p-10">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="p-2">
          <p className="font-Lora text-xl text-white">Hi Everyone</p>
          <p className="font-Lora text-xl text-white">Welcome to</p>
          <h1 className="font-Lora text-3xl tracking-[.20em] text-white">
            Dashboard
          </h1>
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Search"
            className="bg-[#212121] py-1 border-2 border-gray-300 rounded-sm"
          />
        </div>
      </div>
      <div className="w-[100%] flex flex-col md:flex-row justify-between pt-8 pb-8 space-x-3">
        <div className="w-[50%] space-y-4 ">
          <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-1 md:space-y-0">
            <div className="flex justify-between items-center w-full bg-[#212121] transition-all duration-500 hover:bg-yellow-600 text-white px-2 py-4 space-x-4 rounded-xl">
              <div className="text-xl font-Lora">
                <p>All Cost</p>
                <p>$400</p>
              </div>
              <div className="text-white text-5xl">
                <FaMoneyBillAlt />
              </div>
            </div>
            <div className="flex justify-between items-center w-full bg-[#212121] transition-all duration-500 hover:bg-yellow-600 text-white px-2 py-4 space-x-4 rounded-xl">
              <div className="text-xl font-Lora">
                <p>Goal</p>
                <p>$2000</p>
              </div>
              <div className="text-white text-5xl">
                <GiStairsGoal />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-between space-x-0 md:space-x-4 space-y-1 md:space-y-0">
            <div className="flex justify-between items-center w-full bg-[#212121] transition-all duration-500 hover:bg-yellow-600 text-white px-2 py-4 space-x-4 rounded-xl">
              <div className="text-xl font-Lora">
                <p>New clients</p>
                <p>400</p>
              </div>
              <div className="text-white text-5xl">
                <IoIosPersonAdd />
              </div>
            </div>
            <div className="flex justify-between items-center w-full bg-[#212121] transition-all duration-500 hover:bg-yellow-600 text-white px-2 py-4 space-x-4 rounded-xl">
              <div className="text-xl font-Lora">
                <p>Active Earning</p>
                <p>$180</p>
              </div>
              <div className="text-white text-5xl">
                <FaMoneyBillAlt />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] bg-[#212121] rounded-xl mt-2 md:mt-0 space-y-3 md:space-y-8 text-white flex flex-col justify-center md:justify-end items-center md:items-end">
          <h1 className="flex cursor-pointer items-center underline text-sm md:text-2xl font-Lora">
            <AiFillRead />
            Information for Clients
          </h1>
          <p className="flex cursor-pointer items-center underline text-sm md:text-2xl font-Lora">
            <AiFillRead /> How to make new Clients
          </p>
          <p className="flex cursor-pointer items-center underline text-sm md:text-2xl font-Lora">
            <AiFillRead /> How to make regular transaction
          </p>
          <p className="flex cursor-pointer items-center underline text-sm md:text-2xl font-Lora">
            <AiFillRead /> How to withdraw money
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full space-y-3 md:space-y-0 space-x-0 md:space-x-3">
        <div className="w-[50%]  flex flex-col justify-center items-center bg-[#212121] rounded-2xl text-white overflow-hidden">
          <p className="font-Lora text-sm p-3 md:p-0 md:text-xl">
            All earning from start
          </p>
          <p className="font-Lora text-xl">$1000.5</p>
          <p className="font-Lora text-xl">20%</p>
          <LineChart
            width={400}
            height={200}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#212121" />
            <Line type="monotone" dataKey="men" stroke="#ff7300" yAxisId={0} />
            <Line
              type="monotone"
              dataKey="others"
              stroke="#ff7300"
              yAxisId={0}
            />
            <Line
              type="monotone"
              dataKey="women"
              stroke="#ffffff"
              yAxisId={1}
            />
          </LineChart>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center bg-[#212121] rounded-2xl text-white">
          <div className="flex justify-center py-3">
            <img
              src={Profile}
              alt="profile"
              className="w-[150px] h-[150px] rounded-full"
            />
          </div>
          <div className="flex flex-col font-Lora justify-center items-center">
            <h1>Sohel Rana Sajib</h1>
            <p>Savar,Dhaka</p>
            <div
              className="flex flex-col md:flex-row justify-center
            items-center space-x-2"
            >
              <p>Hours of work</p>
              <p>Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAdmin;
