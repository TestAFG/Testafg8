import React from "react";


function RoomForm({ formData, setFormData }) {
 
  const handleBhkChange = (room) => {
    setFormData({ ...formData, room });
  };

  return (
    <div className={`flex flex-col space-y-2 Hall_1room px-2Hall_1room `}>
      <label className="flex items-center space-x-2 border-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300">
        <input
          type="radio"
          name="bhk"
          value="2Kitchen_1Hall"
          checked={formData.room === "2Kitchen_1Hall"}
          onChange={() => handleBhkChange("2Kitchen_1Hall")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg ">Kitchen x2 , Hall</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="bhk"
          value="Kitchen_Hall_Room"
          checked={formData.room === "Kitchen_Hall_Room"}
          onChange={() => handleBhkChange("Kitchen_Hall_Room")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">Kitchen , Hall ,Room</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="room"
          value="2Hall_1Kitchen"
          checked={formData.room === "2Hall_1Kitchen"}
          onChange={() => handleBhkChange("2Hall_1Kitchen")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">2x Hall , 1 kitchen</span>
      </label>

      <label className="flex items-center space-x-2 hover:scale-110 transition pl-2 rounded border-blue-300 hover:bg-blue-300 border-2 ">
        <input
          type="radio"
          name="room"
          value="2 Hall_1room"
          checked={formData.room === "2Hall_1room"}
          onChange={() => handleBhkChange("2Hall_1room")}
          className="form-radio focus:outline-none focus:ring focus:border-blue-300"
        />
        <span className="text-lg">2 Hall , 1 room</span>
      </label>
    </div>
  );
}

export default RoomForm;
