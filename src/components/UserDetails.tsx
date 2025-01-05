import React from 'react';

const UserDetails = () => {
  return (
    <div className="w-80 bg-gray-100 p-4 border-l border-gray-300">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <div>
        <p className="font-semibold">Revenue: $3,452</p>
        <p className="font-semibold">Web Visits: 42</p>
      </div>
      {/* Add more details */}
    </div>
  );
};

export default UserDetails;
