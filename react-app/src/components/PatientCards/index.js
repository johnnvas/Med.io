import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCARDSThunk } from "../../store/patientcard";
import './patientcards.css'
import OnePatientCard from "../OnePTCard";


function PatientCards() {
  const dispatch = useDispatch();
  const allPatientCards = useSelector((state) =>
    Object.values(state.patientCards)
  );
  const user = useSelector((state) => state.session.user);


  useEffect(() => {
    dispatch(getCARDSThunk());
  }, [dispatch]);

  if (user.doctor) {
    return (
      <div className="PatientCards">
        <h1>Welcome, Doctor {user.firstName}!</h1>
        <h2>Your Patient Cards: </h2>
        {allPatientCards &&
          allPatientCards?.map((pc) => (
            < OnePatientCard key={ pc.id} pc={pc} />
          ))}
      </div>
    );
  } else {

    return (
      <div className="PatientCards">
        <h1>Welcome, {user.firstName}!</h1>
        <h2>Your Patient Cards: </h2>
        {allPatientCards &&
          allPatientCards?.map((pc) => {
            if (pc.userId === user.id) {
              return < OnePatientCard key={pc.id} pc={pc} />
            }
          })}
      </div>
    );
  }
}
export default PatientCards;
