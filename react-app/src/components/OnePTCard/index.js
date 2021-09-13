import EditButton from "../PatientCards/EditButton";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './oneptcard.css';


export default function OnePatientCard({ pc }) {
  const user = useSelector((state) => state.session.user);
  // console.log("PCCCCCCCCCCCCC BS", pc.comment)

  return (

    <div className="pc-container">
      <div className="">
        <div className="PatientCard-name">
          <Link
            to={`/patientcards/${pc.id}`}
            style={{ textDecoration: "none" }}
          >
            Patient ID: {pc.userId}
          </Link>
        </div>
        {user?.id === pc?.userId && (
          <div className="edit-container">
            <EditButton pc={pc} />
          </div>
        )}
        <div>
          <div>Patient Comment: {pc.comment}</div>
        </div>
      </div>
        <div>Diagnosis: {pc.diagnosis}</div>
    </div>
  );
}
