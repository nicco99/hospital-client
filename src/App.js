import { Routes, Route } from "react-router-dom";
import DoctorLogin from "./components/DoctorLogin";
import Home from "./components/Home";
import ParentDashboard from "./components/PatientDashboard";
import PatientSignup from "./components/PatientSignup";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Dashboard/Welcome";
import Appointments from "./components/Dashboard/Appointments";
import Pending from "./components/Dashboard/Appointments/Pending";
import Completed from "./components/Dashboard/Appointments/Completed";
function App() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="patient_signup" element={<PatientSignup />} />
      <Route path="doctor_login" element={<DoctorLogin />} />
      <Route path="patient_dashboard" element={<ParentDashboard />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard" element={<Welcome />} />
        <Route path="appointments" element={<Appointments />}>
          <Route path="pending" element={<Pending />} />
          <Route path="completed" element={<Completed />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
