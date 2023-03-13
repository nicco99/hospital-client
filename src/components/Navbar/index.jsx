import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()
  return (
    <div className="hidden z-10 opacity-95 fixed w-full bg-blue-50 h-16 justify-between sm:flex items-center">
      <div className=" m-2 font-semibold text-xl font-sans tracking-wide text-blue-600">
        SPRING FIELD
      </div>
      <div className="m-2">
        <ul className="flex">
          <li onClick={()=>navigate("/")} className="m-2  hover:bg-blue-600 hover:text-white px-4 rounded-md p-2">Home</li>
          <li onClick={()=>navigate("/patient_signup")} className="m-2  hover:bg-blue-600 hover:text-white px-4 rounded-md p-2">patients</li>
          <li className="m-2  hover:bg-blue-600 hover:text-white px-4 rounded-md p-2">About us</li>
          <li onClick={()=>navigate("/doctor_login")} className="m-2 text-yellow-300 font-black hover:text-white hover:bg-blue-600 outline outline-1 px-4 rounded-md p-2">
            Admin
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
