import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./postdiagnosis.css";
import { uploadDIAGNOSISThunk } from "../../store/diagnosis";
import Modal from 'react-modal'

const DiagnosisForm = ({ showModal, setShowModal, pc}) => {
  const [comment, setComment] = useState("");

  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();


  const updateComment = (e) => {
    setComment(e.target.value);
  }


  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      uploadDIAGNOSISThunk({
        'doctorId': user.id,
        'comment': comment,
        'patientCardId': pc.id,
      }),
      setShowModal(false)
    );
    // dispatch(getDIAGNOSISThunk());
    // history.push(`/patientcards/${id}`);
  };

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <form onSubmit={onSubmit} className='diagnosis-container'>
        <div>
          <h1>Let's Diagnose This Patient!</h1>
        </div>
        <div>
          {" "}
          <label>Notes: </label>
          <input
            name="Comment"
            type="text"
            placeholder="What is your diagnosis?"
            value={comment}
            onChange={updateComment}
            required
          />
          <br/>
        </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </Modal>
  );
};

export default DiagnosisForm;
