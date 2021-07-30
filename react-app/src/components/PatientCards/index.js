import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getCARDSThunk } from '../../store/patientcard'

function PatientCards() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allPatientCards = useSelector(state => Object.values(state.patientCards));
  const user = useSelector(state => state.user);
  const first = allPatientCards[0];


  console.log('PATIENT CARDSSSSS', allPatientCards);
  console.log('PATIENT CARDDDD', first);

  useEffect(() => {
    dispatch(getCARDSThunk());
  }, [dispatch]);


  return (
    <div className="PatientCards">
      {allPatientCards &&
        allPatientCards?.map(pc => (
        <div>
          <div className="PatientCard-header">
            <div className="PatientCard-name">
              {pc.userId}, {pc.doctorId}
            </div>
              <div className="PatientCard-body">
                <div className="PatientCard-body-left">
                  {pc.comment}
                </div>
          </div>
            <div className="PatientCard-dob">
              Diagnosis: {pc.diagnosis}
            </div>
          </div>
        </div>
      ))}
      <div>HELLOO</div>
    </div>
  );

}
export default PatientCards;
