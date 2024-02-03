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

const SummaryPage = ({ shape, length, width, packageType }) => {
  const router = useRouter();
  const HandleConfirm = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ORIGIN_URL}/api/est1`,
      { shape, length, width, packageType }
    );
    if (!res) return alert("Something went wrong");
    alert("Your booking has been confirmed");
    router.push("/");
  };
  const findEstimation = () => {
    
    const shapePrice = estData.find((item) => item.entity === shape).price;
    const LengthWidthPrice = estData.find(
      (item) => item.entity === "length_width"
    ).price;
    const packagePrice = estData.find(
      (item) => item.entity === packageType
    ).kitchen_price;
    const est = shapePrice + packagePrice + (length + width) * LengthWidthPrice;
    return est;
  };
  const estimationPrice = findEstimation();
  return (
    <>
      <div className=" flex items-center justify-center">
        <h2 className="text-5xl font-thin text-yellow-300">
          Estimation : ₹{estimationPrice}
        </h2>
      </div>

      <div
        className={`${urbanist.className} flex justify-center flex-col mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md`}
      >
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">
          Booking Summary
        </h1>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Shape:</p>
            <p className="text-lg">{shape}</p>
          </div>
          <div className="border-b border-gray-300"></div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Length:</p>
            <p className="text-lg">{length} ft</p>
          </div>
          <div className="border-b border-gray-300"></div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-semibold">Width:</p>
            <p className="text-lg">{width} ft</p>
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
