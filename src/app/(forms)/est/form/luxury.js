// LuxuryForm.jsx

import React from "react";

const RoomOption = ({
  value,
  label,
  description,
  checked,
  onChange,
}) => (
  <label className="flex flex-col items-center space-y-2">
    <input
      type="radio"
      name="room"
      value={value}
      checked={checked}
      onChange={() => onChange(value)}
      className="hidden" // Hide the default radio input
    />
    <div
      className={`border p-4 rounded-lg cursor-pointer ${
        checked ? "border-blue-500" : "border-gray-300"
      }`}
    >
      <div className="font-bold text-lg">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  </label>
);

function LuxuryForm({ formData, setFormData }) {
  const handleRoomChange = (room) => {
    setFormData({ ...formData, package:room });
  };

  return (
    <div className="flex flex-col space-y-4 px-4 mb-10">
      <RoomOption
        value="Basic"
        label="Basic($)"
        description="A place for cooking and preparing food"
        checked={formData.package === "Basic"}
        onChange={handleRoomChange}
      />

      <RoomOption
        value="Premium"
        label="Premium($$)"
        description="A place for personal hygiene activities"
        image="image/ess1.jpg"
        checked={formData.package === "Premium"}
        onChange={handleRoomChange}
      />
      <RoomOption
        value="Luxury"
        label="luxury($$$)"
        description="A place for personal hygiene activities"
        // Replace with the actual image URL
        checked={formData.package === "Luxury"}
        onChange={handleRoomChange}
      />

      {/* Add more room options as needed */}
    </div>
  );
}

export default LuxuryForm;
