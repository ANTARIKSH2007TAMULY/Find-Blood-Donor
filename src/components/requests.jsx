import React, { useState } from "react";
import RequestCard from "./requestcard";

function Requests({ data, bloodGroups, requestStatus }) {
  const [citySearch, setCitySearch] = useState("");

  // Filter only requested donors
  const requestedUsers = data.filter((user) => requestStatus[user.id]);

  // Filter requested donors by city search
  const filteredUsers = requestedUsers.filter((user) =>
    citySearch
      ? user.address.city.toLowerCase().includes(citySearch.toLowerCase())
      : true
  );

  return (
    <div className="px-6 py-12 min-h-screen flex flex-col items-center">

      {/* Title */}
      <h2 className="text-3xl font-bold text-red-600 mb-6 text-center">
        Requested Donors
      </h2>

      {/* City Search */}
      <input
        type="text"
        placeholder="Search by city"
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
        className="mb-10 w-72 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* If no requested donors */}
      {filteredUsers.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <p className="text-xl text-gray-500">
            No donors found
          </p>
          <p className="text-gray-400 mt-2 text-center">
            You can request for help from the <span className="font-semibold text-red-500">Donors</span> section.
          </p>
        </div>
      ) : (
        // Cards grid
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredUsers.map((user) => {
            const userBloodGroup = bloodGroups[user.id % bloodGroups.length];
            const available = user.id % 2 === 0;

            return (
              <RequestCard
                key={user.id}
                donor={{
                  ...user,
                  bloodGroup: userBloodGroup,
                  available: available,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Requests;