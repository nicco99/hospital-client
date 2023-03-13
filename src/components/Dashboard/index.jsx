import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DoctorContext from "./DoctorContext";
function Dashboard() {
  const [user,setUser] = useState({})
  const token = localStorage.getItem("jwt");
  const doctor_id = localStorage.getItem("doctor_id");
  const navigate = useNavigate();
  console.log(token);
  console.log(doctor_id);

  useEffect(() => {
    fetch(`http://localhost:3000/doctors/${doctor_id}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (token) {
    return (
      <DoctorContext.Provider
        value={{
          doctor_id: doctor_id,
          user: user
        }}>
        <div className="flex flex-row">
          <Sidebar />
          <Outlet />
        </div>
      </DoctorContext.Provider>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>OOPS!!! UnAuthorised access</h1>
        <button
          onClick={() => navigate("/")}
          className="m-2 outline outline-dotted text-blue-600 hover:bg-blue-600 hover:text-white px-5 rounded-md">
          Return Home
        </button>
      </div>
    );
  }
}

export default Dashboard;
