

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">BlueChat</h1>
      <ul>
        <li className="mb-2 p-2 rounded hover:bg-gray-700 cursor-pointer">Messages</li>
        <li className="mb-2 p-2 rounded hover:bg-gray-700 cursor-pointer">Segments</li>
        {/* Add more items here */}
      </ul>
    </div>
  );
};

export default Sidebar;
