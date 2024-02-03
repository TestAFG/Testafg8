import React from "react";

function TypeForm({ formData, setFormData }) {
  const handleTypeChange = (type) => {
    setFormData({ ...formData, type });
  };

  return (
    <div className="flex flex-col space-y-4 px-4">
      <label className="flex items-center space-x-2 border-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300">
        <input
          type="radio"
          name="type"
          value="Sliding"
          checked={formData.type === "Sliding"}
          onChange={() => handleTypeChange("Sliding")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="flex items-center">
          {/* Replace with your image for Sliding type */}
          <img src="https://imgs.search.brave.com/_rkvlygH3UXPm-jVFYxKXPp68XLZs-jXHYibJp5p2GQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U4Lzdi/LzIxL2U4N2IyMWIx/YTU0ODczZGI4YzZk/NGEyZmEzN2IxOTky/LmpwZw" alt="Sliding" className="h-8 w-8 rounded-md mr-2" />
          <span className="text-lg">Sliding</span>
        </div>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="type"
          value="Swing"
          checked={formData.type === "Swing"}
          onChange={() => handleTypeChange("Swing")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <div className="flex items-center">
          {/* Replace with your image for Swing type */}
          <img src="https://imgs.search.brave.com/9T7mDN-6WpcuROwi6pVVX6JSAD4feDcPu4kqndTu_uM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiL2Ri/L2FiL2ZiZGJhYjMw/NTJkY2NmNjhiNDg0/OTI0MGEwYzRiOTkw/LmpwZw" alt="Swing" className="h-8 w-8 rounded-md mr-2" />
          <span className="text-lg">Swing</span>
        </div>
      </label>
    </div>
  );
}

export default TypeForm;
