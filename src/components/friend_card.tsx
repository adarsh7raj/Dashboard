
import { Avatar } from "./avatar";

interface FriendDetail {
 
    friendname: string;
    icon: string;
    profile_pic:string;
    lastmessage: string;
    selected_friend:string
  }


export const FriendsCard = function ({ friendname, icon ,profile_pic,lastmessage, selected_friend }: FriendDetail) {
  
  return (
    <div
      className={`flex flex-col items-center justify-between border rounded-lg shadow-md mt-{10px] w-[300px]  p-2  transition duration-200 ${
        selected_friend===friendname
          ? "bg-stone-200"
          : " border-gray-200 hover:bg-stone-100"
      }`}
    >
      {/* Friend Avatar and Name */}
      <div className="flex justify-between w-full  space-x-4 ">
        
        <Avatar name={friendname} profile_pic={profile_pic} />
        <div className="text-base md:text-lg font-semibold text-gray-800">
          {friendname}
        </div>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
        <div className="text-sm">1h 54min</div>
  
      </div>
<div>{lastmessage}</div>
      
    </div>
  );
};
