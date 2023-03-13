import React, { useContext } from "react";
import DoctorContext from "../DoctorContext";

function Welcome() {
  const { user } = useContext(DoctorContext);
  return (
    <div className="bg-blue-50 w-full h-screen">
      <h1 className="text-center">welcome {user.first_name}</h1>
    </div>
  );
}

export default Welcome;
