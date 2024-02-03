import React from "react";

function LengthForm({ formData, setFormData }) {
  const handleLengthChange = (length) => {
    setFormData({ ...formData, length });
  };

  return (
    <div className="flex flex-col space-y-4 px-4">
      <label className="flex items-center space-x-2 border-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300">
        <input
          type="radio"
          name="length"
          value="4"
          checked={formData.length === "4"}
          onChange={() => handleLengthChange("4")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">4ft</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="length"
          value="6"
          checked={formData.length === "6"}
          onChange={() => handleLengthChange("6")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">6ft</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="length"
          value="7"
          checked={formData.length === "7"}
          onChange={() => handleLengthChange("7")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">7ft</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="length"
          value="10"
          checked={formData.length === "10"}
          onChange={() => handleLengthChange("10")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">10ft</span>
      </label>
    </div>
  );
}

export default LengthForm;
