import EditButton from '../PatientCards/EditButton'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";


export default function OnePatientCard({ pc }) {

  const user = useSelector((state) => state.session.user);
  const diagnosis = useSelector((state) => state.diagnosis);


  return (

    <div className="pc-container">
            <div className="">
          <div className="PatientCard-name">
            <Link to={`/patientcards/${pc.id}`}>
              Patient ID: {pc.userId}
            </Link>
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
  )
}
