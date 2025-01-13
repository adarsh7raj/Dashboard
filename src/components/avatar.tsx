import { useState } from "react";
import { useNavigate } from "react-router-dom";


interface Name_type {
    name: string|undefined;
    profile_pic:string | undefined
}

export const Avatar = function({ name,profile_pic }: Name_type) {
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    console.log(profile_pic);
    // Toggle the dropdown menu
    const toggleDropdown = () => setIsOpen(prev => !prev);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("JWT");
        localStorage.removeItem("username");
        alert("You have been logged out.");
       
        navigate("/landing");
    };

    return (
        <>
            <div className="">
                {/* Avatar that toggles dropdown on click */}
                <div
                    className={`rounded-full   w-[45px] h-[45px] ${profile_pic?"":"bg-slate-300"}  p-1 cursor-pointer`}
                    onClick={toggleDropdown}
                >
                
                   {profile_pic?<img className="w-full h-full object-cover" src={profile_pic}></img>: <p className="text-center">{name?name[0].toUpperCase():"😊"}</p>}
                </div>

                {/* Dropdown menu */}
                {isOpen? (
                    <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg z-10">
                        <button
                            onClick={handleLogout}
                            className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600"
                        >
                            Logout
                        </button>
                    </div>
                ):<div></div>}
            </div>
        </>
    );
};
