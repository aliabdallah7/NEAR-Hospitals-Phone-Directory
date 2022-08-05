import { useState } from "react";

import NavBar from "./navbar";

import Hospitals from "./hospitals";

function Main() {
  const [hospitalName, setHospitalName] = useState("");

  return (
    <div>
      <NavBar setHospitalName={setHospitalName} />
      <Hospitals hospitalName={hospitalName} />
    </div>
  );
}

export default Main;
