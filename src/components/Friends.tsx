import { useState } from "react";
import Bluechat from "./Bluechat";

import { FriendsCard } from "./friend_card";
import { Link } from "react-router-dom";
interface Friend {
  id: number;
  name: string;
  LastMessage: string;
  email: string;
  location: string;
  icon: string;
}

interface FriendsProps {
  username: string;
  friend_detail: Friend[]; // Declare this as an array of Friend objects
}

export const Friends = ({ username, friend_detail }: FriendsProps) => {
  const [isSelected, setSelected] = useState("");

  return (
    <div className="flex flex-col  w-[350px] overflow-x-hidden h-full ">
      <Bluechat />

      <div className="w-80 p-4  overflow-x-hidden overflow-y-auto">
        <div className="flex bg-slate-200 justify-around items-center rounded-lg w-[300px]">
          <h2 className={`text-lg font-bold mb-4`}>
            <div
              className={`${
                isSelected === "Messages"
                  ? "bg-white text-black"
                  : " text-gray-500"
              } mt-[10px] w-[120px] rounded-md`}
            >
              <button
                className="ml-[20px] mb-[5px]"
                type="submit"
                onClick={function () {
                  setSelected("Messages");
                }}
              >
                Messages
              </button>
            </div>
          </h2>
          <h2 className="text-lg font-bold mb-4">
            <div
              className={`${
                isSelected === "Segments"
                  ? "bg-white text-black"
                  : " text-gray-500"
              } mt-[10px] w-[120px] rounded-md`}
            >
              <button
                className="mr-[20px] ml-[10px] mb-[5px]"
                onClick={function () {
                  setSelected("Segments");
                }}
              >
                Segments
              </button>
            </div>
          </h2>
        </div>
<div className="flex justify-between mt-[20px] mb-[20px]">
  <div className="flex justify-around"><div className="mr-[10px]"><i className="fa-solid fa-users"></i></div><div className="mr-[10px]">All</div><div className="bg-teal-100 rounded-lg py-[1px] px-[1px]">232</div></div>
  <div className="flex justify-around"><div className="mr-[10px]"><i className="fa-solid fa-filter"></i></div><div>Oldest</div></div>
</div>
        {friend_detail.map((user) => (
          <div key={user.id} className="flex items-center mb-4 w-[300px]">
            <Link to={`/${user.name}`}>
            <FriendsCard friendname={user.name} icon={user.icon} lastmessage={user.LastMessage} selected_friend={username} />
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
};
