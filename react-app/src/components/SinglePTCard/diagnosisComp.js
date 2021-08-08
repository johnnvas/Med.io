import React from "react";
import { useSelector } from "react-redux";
import EditDiagnosisButton from '../EditDiagnosis/editDiagBtn'
import './singlePage.css'

function DiagnosisComponent({d}) {
  const user = useSelector((state) => state.session.user);
  console.log('THIS IS DDDDD',d)

  return (
    <div className="diagnose-comp-container">
      <div className="">
        <div className="PatientCard-name">
          <div>Diagnosed : {d?.comment}</div>
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
