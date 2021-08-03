import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { getCARDSThunk } from "../../store/patientcard";
import EditButton from './EditButton'
import './patientcards.css'

function PatientCards() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allPatientCards = useSelector((state) =>
    Object.values(state.patientCards)
  );
  const user = useSelector((state) => state.session.user);
  const first = allPatientCards[0];

  useEffect(() => {
    dispatch(getCARDSThunk());
  }, [dispatch]);

  return (
    <div className="PatientCards">
      {allPatientCards &&
        allPatientCards?.map((pc) => (
          <div className="pc-container">
            <div className="">
              <div className="PatientCard-name">
                Patient name: {user.firstName}, Patient ID: {pc.userId}, Reviewed by Doctor: {pc.doctorId}
              </div>
              {user?.id === pc.userId && (
                <div className="edit-container">
                  <EditButton pc={pc}/>
                </div>
              )}
              <div>
                <div >Patient Comment: {pc.comment}</div>
              </div>
              <div>Diagnosis: {pc.diagnosis}</div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default PatientCards;
