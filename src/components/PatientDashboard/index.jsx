import React from "react";
import { useNavigate } from "react-router-dom";

function PatientDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwt");
  const patient_id = localStorage.getItem("patient_id");
  console.log(token);
  console.log(patient_id);
  if (token) {
    return (
      <div>
        PatientDashboard
        <button type="button" onclick={() => localStorage.clear()}>
          Log out
        </button>
      </div>
    );
  } else {
    return <div>Unauthorised access</div>;
  }
}

export default PatientDashboard;
