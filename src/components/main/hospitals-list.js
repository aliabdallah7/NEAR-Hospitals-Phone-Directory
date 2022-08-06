import Row from "react-bootstrap/Row";

import HospitalCard from "./hospital-card";

import classes from "./hospitals.module.css";

function HospitalsList(props) {
  return (
    <Row className="d-flex justify-content-around">
      {props.hospitals.map((hospital) => {
        return (
          <HospitalCard
            className={classes.hospitalCard}
            name={hospital.name}
            creatorId={hospital.creatorId}
            phone={hospital.phone}
            email={hospital.email}
            numberEmployees={hospital.numberEmployees}
            location={hospital.location}
            website={hospital.website}
          />
        );
      })}
    </Row>
  );
}

export default HospitalsList;
