import { useParams } from "react-router-dom";
import { useState } from "react";
import { MessageBox } from "../components/message_box.tsx";
import  {Friends}  from "../components/Friends.tsx";
import {User} from "../components/user.tsx"
interface friend{
    id: number;
    name: string,
    LastMessage: string,
    email:string,
    location:string,
    icon:string
  }
 function Dashboard () {
    const { username } = useParams();
    const [friends,setFriends]=useState<friend[]>([
        { id: 1, name: "Oguz Y kara",location:"Ankara , Turkey",email:"oguz@bluereceipt.com", icon: `<i class="fa-regular fa-message"></i>`, LastMessage: "I keep getting error" },
        { id: 2, name: "adarsh",location:"Paris",email:"george@gmail.com", icon: `<i class="fa-brands fa-facebook-messenger"></i>`, LastMessage: "Wow, this is really epic man!" },
        {id: 3, name: "George klien2",location:"New York",email:"george@gmail.com", icon: `<i class="fa-brands fa-whatsapp"></i>`, LastMessage: "Haha oh man, this is amazing!" },
        {id: 4, name: "George klien3",location:"Berlin",email:"george@gmail.com", icon: `<i class="fa-brands fa-instagram"></i>`, LastMessage: "There will be changes to next week's" }]);
       
       
        function updatelastMessage(friendName: string, message: string) {
            setFriends(function (prevFriends) {
              return prevFriends.map(function (friend) {
                if (friend.name === friendName) {
                  return { ...friend, LastMessage: message };
                } else {
                  return friend;
                }
              });
            });
          }
    return (
        <div className="h-screen flex justify-between  overflow-y-hidden ">
          
            <div className="  hidden md:block  ">
                <Friends username={username||"?"} friend_detail={friends}/>
            </div>

            {/* Message box (scrollable) */}
            <div className=" h-full">
                <MessageBox name={username || "?"} updateLastMessage={updatelastMessage} email={(friends.find(function(friend){
                    return friend.name===username
                }))?.email} />
            </div>
            <div><User user_detail={friends.find(function(friend){
                return friend.name=== username
            })}></User></div>
        </div>
    );
};

export default Dashboard;