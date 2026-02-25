import React, { useState } from "react";
import DonorCard from "./cards";

function Donors({ data, bloodGroups, requestStatus, handleRequest }) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [citySearch, setCitySearch] = useState("");
  const [sortAvailability, setSortAvailability] = useState("");

  // Filter donors by blood group & city
  const filteredData = data.filter((user) => {
    const userBloodGroup = bloodGroups[user.id % bloodGroups.length];
    const matchesGroup = selectedGroup ? userBloodGroup === selectedGroup : true;
    const matchesCity = citySearch
      ? user.address.city.toLowerCase().includes(citySearch.toLowerCase())
      : true;
    return matchesGroup && matchesCity;
  });

  // Sort filtered donors by availability
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortAvailability === "availableFirst") {
      return (b.id % 2 === 0) - (a.id % 2 === 0);
    } else if (sortAvailability === "notAvailableFirst") {
      return (a.id % 2 === 0) - (b.id % 2 === 0);
    }
    return 0;
  });

  return (
    <div className="px-6 py-8">

      {/* Centered Top Bar */}
      <div className="flex justify-center items-center gap-4 mb-8 bg-white shadow-md rounded-xl p-4 flex-wrap">
        {/* Title */}
        <h2 className="text-2xl font-bold text-red-600">
          All Donors
        </h2>

        {/* Blood Group Filter */}
        <select
          value={selectedGroup}
          onChange={(e) => setSelectedGroup(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Select Blood Group</option>
          {bloodGroups.map((group) => (
            <option key={group} value={group}>{group}</option>
          ))}
        </select>

        {/* City Search */}
        <input
          type="text"
          placeholder="Search by city"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Sort by Availability */}
        <select
          value={sortAvailability}
          onChange={(e) => setSortAvailability(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="">Sort by availability</option>
          <option value="availableFirst">Available First</option>
          <option value="notAvailableFirst">Not Available First</option>
        </select>
      </div>

      {/* Donor Cards */}
      {sortedData.length === 0 ? (
        <div className="flex justify-center items-center h-96">
          <p className="text-gray-500 text-xl">No donors found</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center">
          {sortedData.map((user) => {
            const userBloodGroup = bloodGroups[user.id % bloodGroups.length];
            const available = user.id % 2 === 0;

            return (
              <DonorCard
                key={user.id}
                donor={{
                  ...user,
                  bloodGroup: userBloodGroup,
                  available: available,
                }}
                onRequest={handleRequest}
                isRequested={requestStatus[user.id]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Donors;