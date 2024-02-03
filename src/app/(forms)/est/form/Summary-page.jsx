// SummaryPage.jsx
"use client";
import React from "react";
import { Urbanist } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import estData from "../../../../../data/estimation-data.json";

const urbanist = Urbanist({
  weight: ["400", "300", "500", "600", "200"],
  subsets: ["latin"],
});
const SummaryPage = ({ bhk, room, packageType }) => {
  const findEstimation = () => {
    const bhkEst = estData.find((item) => item.entity === "BHK").price;
    const roomPrice = estData.find((item) => item.entity === room).price;
    const packagePrice = estData.find(
      (item) => item.entity === packageType
    ).bhk_price;
    const est = bhk * bhkEst + roomPrice + packagePrice;
    return est;
  };
  const router = useRouter();
  const HandleConfirm = async (e) => {
    const data = { bhk: bhk, room: room, packageType: packageType };

    console.log(data);
    e.preventDefault();
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/est`,
      data
    );
    if (!res) return alert("Something went wrong");
    alert("Your booking has been confirmed");
    router.push("/");
  };
  const estimationPrice = findEstimation();
  return (
    <>
    <div className=" flex items-center justify-center">
    <h2 className="text-5xl font-thin text-yellow-300">Estimation : ₹{estimationPrice}</h2>
  </div>
    <div
      className={`${urbanist.className} flex justify-center flex-col  mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md`}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
        Booking Summary
      </h1>

     
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold">BHK:</p>
          <p className="text-lg">{bhk} BHK</p>
        </div>
        <div className="border-b border-gray-300"></div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold">Room:</p>
          <p className="text-lg">{room}</p>
        </div>
        <div className="border-b border-gray-300"></div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-semibold">Package:</p>
          <p className="text-lg">{packageType}</p>
        </div>
        <div className="border-b border-gray-300"></div>
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
        onClick={HandleConfirm}
      >
        Confirm Details
      </button>
    </div>
    </>
  );
};

export default SummaryPage;
