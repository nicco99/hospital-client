import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  function handleLogout(){
    
  }

  return (
    <div className="sm:w-1/4 h-screen">
      <div className="w-full h-full bg-blue-50 ">
        <div className="sm:w-full sm:h-1/5 flex justify-center flex-col items-center ">
          <img
            className="sm:h-20 sm:w-20 rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXm5eADVr5mE5_x6F2kwPgtFyGmvZ0-lRAHA&usqp=CAU"
            alt="avatar"
          />
          <h1 className="text-center">Doctor</h1>
        </div>
        <ul className="m-3 p-2">
          <li className="rounded-md p-3 text-center outline outline-1 text-blue-600 m-2 hover:bg-blue-600 hover:text-white pointer">
            Dashboard
          </li>
          <li onClick={()=>navigate()} className="rounded-md p-3 text-center outline outline-1 text-blue-600 m-2 hover:bg-blue-600 hover:text-white pointer">
            Appointments
          </li>
          <li className="rounded-md p-3 text-center outline outline-1 text-blue-600 m-2 hover:bg-blue-600 hover:text-white pointer">
            Profile
          </li>
          <li
            onClick={() => localStorage.clear()}
            className="rounded-md p-3 text-center outline outline-1 text-blue-600 m-2 hover:bg-blue-600 hover:text-white pointer">
            logout
          </li>
        </ul>
        <hr></hr>
      </div>
    </div>
  );
}

export default Sidebar;
