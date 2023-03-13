import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function Menu() {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        onClick={() => setShow((show) => !show)}
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 outline sm:hidden outline-1 my-2 m-auto text-blue-600 hover:text-white hover:bg-blue-600 rounded-sm">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
      {show ? (
        <div className="sm:hidden bg-blue-50  rounded-md">
          <ul className="w-full flex flex-row p-4 items-center justify-center">
            <li
              onClick={() => navigate("/")}
              className="outline outline-1 rounded-sm p-1 m-2">
              Home
            </li>
            <li
              onClick={() => navigate("/patient_signup")}
              className="outline outline-1 rounded-sm p-1 m-2">
              patients
            </li>
            <li
              onClick={() => navigate("/doctor_login")}
              className="outline outline-1 rounded-sm p-1 m-2">
              Admin
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Menu;
