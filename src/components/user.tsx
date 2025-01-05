import { Avatar } from "./avatar";
interface Friend {
    id: number ;
    name: string | undefined,
    LastMessage: string ,
    email: string ,
    location: string,
    icon: string;
  }
interface User{
    user_detail:Friend| undefined
}
export const User=function({user_detail}:User){
    return(

        <div>
            <div className="flex flex-col justify-between items-center w-[400px] h-[620px]">
<Avatar name={user_detail?.name}></Avatar>
<h4>{user_detail?.name}</h4>
<p>11:59pm in {user_detail?.location}</p>
<div className="flex justify-around w-[80%]">
    <div className="flex flex-col items-center">
    <i className="fa-solid fa-phone"></i>
    <p>Call</p>
    
    </div>
<div className="flex flex-col items-center">
<i className="fa-solid fa-video"></i>
<p>Video</p>
</div>

<div className="flex flex-col items-center">
<i className="fa-solid fa-ellipsis"></i>
<p>More</p>
</div>
</div>
<div className="flex justify-between w-[90%]">
<div className=" flex flex-col justify-around border-2 border-gray-500 rounded-lg shadow-lg p-5 w-[45%] h-[100px]">
<div className="flex"><div className="mr-[5px]"><i className="fa-solid fa-dollar-sign"></i></div><div className="text-gray-500">Revenue</div> </div>
<div className="text-xl font-bold">$3,452</div>
<div className="">3 Orders</div>
</div>
<div className="flex flex-col justify-around border-2 border-gray-500 rounded-lg shadow-lg p-5 w-[45%] h-[100px]">
  <div className="flex">
    <div className="mr-[5px]"><i className="fa-regular fa-eye"></i></div>
    <div className="text-gray-500">Web Visits</div>
  </div>
  <div className="text-xl font-bold">42</div>
  <div> 4 Link Clicks</div>
</div>

</div>
<div className="flex justify-around w-[90%] bg-gray-200 rounded-lg py-[10px]">
<i className="fa-solid fa-user"></i>
<i className="fa-solid fa-inbox"></i>
<i className="fa-solid fa-clock"></i>
</div>
<div className="w-[90%]"><input type="search" placeholder="Search in general..." className="border-2 border-gray-300 rounded-lg p-2 w-full  focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
</div>
<div className="flex flex-col w-[90%]">
<div className="flex justify-between w-full">
 <p className="font-medium">Information</p>
 <div className="flex justify-between">
    <div> <i className="fa-solid fa-plus"></i></div>

 <div className="text-blue-600 ml-[5px]">Add</div>
 </div>
   
     
</div>
<div className="flex flex-col w-full">
    <div className="flex justify-between"><div className="flex jusitfy-between "><div className="mr-[5px]"><i className="fa-regular fa-circle"></i> </div><p>Segment</p></div> <div className="flex justify-between"><div className="mr-[5px]"><i className="fa-solid fa-cart-shopping"></i></div> <p className="font-medium">Abanded Cart</p></div></div>
    <div className="flex justify-between"><div className="flex jusitfy-between "><div className="mr-[5px]"><i className="fa-solid fa-at"></i></div><p>Email</p></div> <div className="flex justify-between"><p className="font-medium">{user_detail?.email}</p></div></div>
    <div className="flex justify-between"><div className="flex jusitfy-between "><div className="mr-[5px]"><i className="fa-solid fa-phone"></i></div><p>Phone</p></div> <div className="flex justify-between"><p className="font-medium">+905356468177</p></div></div>
    <div className="flex justify-between"><div className="flex jusitfy-between "><div className="mr-[5px]"><i className="fa-solid fa-clock"></i></div><p>Last Visited</p></div> <div className="flex justify-between"><p className="font-medium">8 Aug, 2021</p></div></div>
</div>
</div>
<div className="flex justify-start w-[90%] border-2 border-gray-300 rounded-lg" > <div className="ml-[5px]"><i className="fa-solid fa-caret-down"></i></div><p className="font-medium ml-[10px]">Show more</p></div>
<div className="flex justify-between w-[90%]">
    
    <div className="flex justify-between"><div><i className="fa-solid fa-caret-down"></i></div><p className="font-medium ml-[5px]">Tags</p></div>
<div className="flex justify-between "><div><i className="fa-solid fa-plus"></i></div><div className="text-blue-600 ml-[5px]">Add</div></div>
</div>
<div className="flex flex-col  w-[90%]">
    <div className="flex mt-[5px]">
    <div className="bg-gray-200 mr-[5px] rounded-lg px-[5px]" > Abandonded Cart User <span className="ml-[15px]"><i className="fa-solid fa-xmark mr-[5px]"></i></span></div>
    <div className="bg-gray-200 mr-[5px] rounded-lg   px-[5px]">Popup <span className="ml-[15px]"><i className="fa-solid fa-xmark"></i></span></div>
    </div>
   <div className="flex mt-[5px]">
   <div className="bg-gray-200 mr-[5px] rounded-lg  px-[5px]">Shop Error <span className="ml-[15px]">  <i className="fa-solid fa-xmark"></i></span></div>
   <div className="bg-gray-200 mr-[5px] rounded-lg  px-[5px]"> Sucessfull  <span><i className="fa-solid fa-xmark"></i></span></div>
   </div>
   
  
</div>
            </div>
        </div>
    )
}