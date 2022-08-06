import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";

import { getHospitalsData, getWallet } from "../../lib/near";
import HospitalsList from "./hospitals-list";

function Hospital(props) {
  const [wallet, setWallet] = useState();
  const [accountId, setAccountId] = useState("");
  const [loading, setLoading] = useState(true);
  const [hospitalsData, setHospitalsData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const tempWallet = await getWallet();
        console.log(tempWallet);
        setWallet(tempWallet);
        setAccountId(tempWallet.getAccountId());
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const result = await getHospitalsData(wallet);
        const {
          status: { SuccessValue },
        } = result;
        const contractResponse = atob(SuccessValue).split("\\n");
        const jsonData = JSON.parse(contractResponse);
        console.log(props.hospitalName);
        if (props.hospitalName) {
          jsonData.forEach((hospital) => {
            if (hospital.name === props.hospitalName) {
              setHospitalsData([hospital]);
              setLoading(false);
            }
          });
        } else {
          setHospitalsData(jsonData);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [wallet, props.hospitalName]);

  return (
    <Container className="m-4">
      {console.log(accountId)}
      {loading ? (
        <p>loading...</p>
      ) : (
        <HospitalsList hospitals={hospitalsData} />
      )}
    </Container>
  );
}

export default Hospital;
