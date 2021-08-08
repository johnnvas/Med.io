import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDIAGNOSISThunk, getDIAGNOSISThunk } from "../../store/diagnosis";
import './edit.css'


function EditDiagnosis({ d, showMenu, setShowMenu }) {

  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const updateComment = (e) => {
    setComment(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDIAGNOSISThunk({ 'id': d.id, 'comment': comment, 'doctorId': d.doctorId, 'patientCardId': d.patientCardId }));
    setShowMenu(false);
  };


  useEffect(() => {
    dispatch(getDIAGNOSISThunk())
  }, [dispatch])

  return (
    <div className="EditDiagnosis">
      <form onSubmit={onSubmit}>
         <label className="edit-comment"></label>
        <label>
          <textarea
            placeholder="Edit Comment"
            type="text"
            value={comment}
            onChange={updateComment}
            required
            rows="2"
            cols="10"
            className="edit-comment-input"
          />
        </label>
        <button className="edit-diagnosis-btn" type="submit">
          Update!
        </button>
      </form>
    </div>
  )
}
export default EditDiagnosis
