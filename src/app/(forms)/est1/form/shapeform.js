import React from "react";

function ShapeForm({ formData, setFormData }) {
  const handleShapeChange = (shape) => {
    setFormData({ ...formData, shape });
  };

  return (
    <div className="flex flex-col space-y-4 px-4">
      <label className="flex items-center space-x-2 border-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300">
        <input
          type="radio"
          name="shape"
          value="L-shaped"
          checked={formData.shape === "L-shaped"}
          onChange={() => handleShapeChange("L-shaped")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">L-shaped</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="shape"
          value="Straight"
          checked={formData.shape === "Straight"}
          onChange={() => handleShapeChange("Straight")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">Straight</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="shape"
          value="Parallel"
          checked={formData.shape === "Parallel"}
          onChange={() => handleShapeChange("Parallel")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">Parallel</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="shape"
          value="U-shaped"
          checked={formData.shape === "U-shaped"}
          onChange={() => handleShapeChange("U-shaped")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">U-shaped</span>
      </label>
    </div>
  );
}

export default ShapeForm;
