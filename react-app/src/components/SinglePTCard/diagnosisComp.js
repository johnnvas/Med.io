import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import { getDIAGNOSISThunk } from "../../store/diagnosis";
import EditDiagnosisButton from '../EditDiagnosis'

function DiagnosisComponent({d}) {
  const user = useSelector((state) => state.session.user);

  const { cardId } = useParams();
  // console.log("THIS IS DDDDD", d)


  return (
    <div className="diagnose-comp-container">
      <div className="">
        <div className="PatientCard-name">
        <div>Diagnosis: {d?.comment}</div>
        </div>
        <div>
          {user?.id === d?.doctorId && (
          <div>
              <EditDiagnosisButton d={ d} />
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
export default DiagnosisComponent;
