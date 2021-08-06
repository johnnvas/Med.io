import EditButton from "../PatientCards/EditButton";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleCARDThunk } from "../../store/patientcard";
import { getDIAGNOSISThunk } from "../../store/diagnosis";
import DiagnosisForm from "../PostDiagnosis";
import DiagnosisComponent from "./diagnosisComp"
import "./singlePage.css";

function PatientCardPage() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const { cardId } = useParams();
  const onePatientCard = useSelector((state) => state.patientCards[cardId]);
  const diagnoses = useSelector((state) => Object.values(state.diagnosis));


  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getSingleCARDThunk(Number(cardId)));
    dispatch(getDIAGNOSISThunk(Number(cardId)));
  }, [cardId, dispatch]);

  if (user.doctor) {
    return (
      <div className="single-patientCard">
        <div className="singlePT-holder">
          <div>Patient ID: {onePatientCard?.userId}</div>
          <div>
            <div>Patient Comment: {onePatientCard?.comment}</div>
          </div>
          {diagnoses && diagnoses?.map((d) => (
            // <div className='ind-diagnosis'>Diagnosis: {d?.comment}</div>
            <DiagnosisComponent key={ d.id} d={d}/>
          ))}
            {/* {user?.id === onePatientCard?.userId && (
          <div>
            <EditDiagnosisButton onePatientCard={onePatientCard} />
          </div>
            )} */}
          <div>
            <button className="diagnose-btn" onClick={() => setShowModal(true)}>
              Diagnose
            </button>
          </div>
        <DiagnosisForm
          showModal={showModal}
          setShowModal={setShowModal}
          onePatientCard={onePatientCard}
          />
          </div>
      </div>
    );
  } else {
    return (
      <div className="single-patientCard">
        <div className="singlePT-holder">
          <div>Patient ID: {onePatientCard?.userId}</div>
          {user?.id === onePatientCard?.userId && (
            <div>
              <EditButton onePatientCard={onePatientCard} />
            </div>
          )}
          <div>
            <div>Patient Comment: {onePatientCard?.comment}</div>
          </div>
          <div>Diagnosis: {onePatientCard?.diagnosis}</div>
        </div>
      </div>
    );
  }
}
export default PatientCardPage;
