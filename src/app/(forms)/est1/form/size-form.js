// SizeForm.jsx

import React from "react";

function SizeForm({ formData, setFormData }) {
  const handleSizeChange = (property, value) => {
    setFormData({ ...formData, [property]: value });
  };

  return (
    <div className="flex flex-col mb-4 space-y-4 px-4">
      <div className="mb-4">
        <img
          src="https://imgs.search.brave.com/ISP27eZInwmalpszlTz-IFWL666OkMPjaz0qxdZHZ-A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lraWhvdy5jb20v/aW1hZ2VzL3RodW1i/LzkvOWQvTWVhc3Vy/ZS1hLVJvb20tU3Rl/cC0wMi5qcGcvdjQt/NDYwcHgtTWVhc3Vy/ZS1hLVJvb20tU3Rl/cC0wMi5qcGc"
          alt="Length"
          className="mb-2 w-32 rounded-md"
        />
        <p className="text-lg font-semibold mb-2">Select Length:</p>

        {/* Replace with your image for length */}

        <select
          value={formData.length}
          onChange={(e) => handleSizeChange("length", e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="4">4 ft</option>
          <option value="8">8 ft</option>
          <option value="12">12 ft</option>
          <option value="16">16 ft</option>
        </select>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold mb-2">Select Width:</p>
        {/* Replace with your image for width */}

        <select
          value={formData.width}
          onChange={(e) => handleSizeChange("width", e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="4">4 ft</option>
          <option value="8">8 ft</option>
          <option value="12">12 ft</option>
          <option value="16">16 ft</option>
        </select>
      </div>
    </div>
  );
}

export default SizeForm;
