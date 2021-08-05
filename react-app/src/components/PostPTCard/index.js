import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ptcardform.css";
import { uploadCARDThunk, getCARDSThunk } from "../../store/patientcard";
import { useHistory } from "react-router-dom";

const PatientCardForm = () => {
  const history = useHistory();
  const [upperbody, setUpperBody] = useState("");
  const [lowerbody, setLowerBody] = useState("");
  const [comment, setComment] = useState("");
  // const [doctorId, setDoctorId] = useState("");
  //Doctor Id is temporary until i fix the doctor login

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();


  const updateUpperBody = (e) => {
    setUpperBody('yes');
    setLowerBody('no');
  };

  const updateLowerBody = (e) => {
    setUpperBody('no');
    setLowerBody('yes');
  };

  const updateBoth = (e) => {
    setUpperBody('yes');
    setLowerBody('yes');
  }

  const updateComment = (e) => {
    setComment(e.target.value);
  }

  // const updateDoctorId = (e) => {
  //   setDoctorId(e.target.value);
  // }


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      uploadCARDThunk({
        'upperbody': upperbody,
        'lowerbody': lowerbody,
        'userId': user.id,
        'comment': comment,
        // 'doctorId': doctorId,
      })
    );
    dispatch(getCARDSThunk());
    history.push("/patientcards");
  };

  return (
    <form onSubmit={onSubmit} className="modal3">
      <div className="title-container">
        <h1>Create A New PatientCard:</h1>
        <h2>Where Does It Hurt? </h2>
      </div>
      <div className="radio-field">
        {" "}
        <label>General Location: </label>
        <input type="radio" value={upperbody} name="Upper Body" onChange={updateUpperBody}/> Upperbody
        <input type="radio" value={lowerbody} name="Lower Body" onChange={updateLowerBody}/> LowerBody
        <input type="radio" value="Other" name="Both" onChange={ updateBoth}/> Both
      </div>
      <div className="input-field">
        {" "}
        <label>Notes: </label>
        <input
          name="Comment"
          type="text"
          placeholder="Any additional comments?"
          value={comment}
          onChange={ updateComment }
        />
        <br/>
        {/* <label>Doctor ID: </label>
        <input
          type='text'
          placeholder="(1, 2, 3)"
          value={doctorId}
          onChange={updateDoctorId}
        /> */}
      </div>
        <button type="submit" className="modal-button2">
          Submit
        </button>
    </form>
  );
};

export default PatientCardForm;
