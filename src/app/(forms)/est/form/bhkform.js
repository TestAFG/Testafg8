import React from "react";


function BhkForm({ formData, setFormData }) {
 
  const handleBhkChange = (bhk) => {
    setFormData({ ...formData, bhk });
  };

  return (
    <div className={`flex flex-col space-y-4 px-4 `}>
      <label className="flex items-center space-x-2 border-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300">
        <input
          type="radio"
          name="bhk"
          value="1"
          checked={formData.bhk === "1"}
          onChange={() => handleBhkChange("1")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg ">1 BHK</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="bhk"
          value="2"
          checked={formData.bhk === "2"}
          onChange={() => handleBhkChange("2")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">2 BHK</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="bhk"
          value="3"
          checked={formData.bhk === "3"}
          onChange={() => handleBhkChange("3")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">3 BHK</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="bhk"
          value="4"
          checked={formData.bhk === "4"}
          onChange={() => handleBhkChange("4")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">4 BHK</span>
      </label>
    </div>
  );
}

export default BhkForm;
