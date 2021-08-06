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
  const pc = useSelector((state) => state.patientCards[cardId]);
  const diagnoses = useSelector((state) => Object.values(state.diagnosis));

  console.log('PCCCCCCCCCC', pc)

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getSingleCARDThunk(Number(cardId)));
    dispatch(getDIAGNOSISThunk(Number(cardId)));
  }, [cardId, dispatch]);

  if (user.doctor) {
    return (
      <div className="single-patientCard">
        <div className="singlePT-holder">
          <div>Patient ID: {pc?.userId}</div>
          <div>
            <div>Patient Comment: {pc?.comment}</div>
          </div>
          {diagnoses && diagnoses?.map((d) => (
            <DiagnosisComponent key={ d.id} d={d}/>
            // <div className='ind-diagnosis'>Diagnosis: {d?.comment}</div>
          ))}
          <div>
            <button className="diagnose-btn" onClick={() => setShowModal(true)}>
              Diagnose
            </button>
          </div>
        <DiagnosisForm
          showModal={showModal}
          setShowModal={setShowModal}
          pc={pc}
          />
          </div>
      </div>
    );
  } else {

    return (
      <div className="single-patientCard">
        <div className="singlePT-holder">
          <div>Patient ID: {pc?.userId}</div>
          {user?.id === pc?.userId && (
            <div>
              <EditButton pc={pc} />
            </div>
          )}
          <div>
            <div>Patient Comment: {pc?.comment}</div>
          </div>
          <div>Diagnosis: {pc?.diagnosis}</div>
        </div>
      </div>
    );
  }
}
export default PatientCardPage;
