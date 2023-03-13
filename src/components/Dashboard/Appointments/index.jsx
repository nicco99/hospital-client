import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
function Appointments() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="sm:w-3/4 p-2 bg-blue-50 w-full m-3 rounded-xl">
      <div className="rounded-md w-full m-auto bg-blue-100 h-14 text-blue-600 text-center">
        Welcome Dr. Nicholas
      </div>
      <div className="h-2/3 m-2 rounded-md">
        <div className="w-full rounded-md sm:grid sm:grid-cols-2 ">
          <div
            onClick={() => {
              setActive(true);
              navigate("pending");
            }}
            className={
              active
                ? "text-center rounded-md p-3"
                : "text-center bg-blue-500 rounded-md text-white p-3"
            }>
            Pending
          </div>
          <div
            onClick={() => {
              setActive(false);
              navigate("completed");
            }}
            className={
              active
                ? "text-center bg-blue-500 rounded-md text-white p-3"
                : "text-center p-3"
            }>
            completed
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Appointments;
