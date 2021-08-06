import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateDIAGNOSISThunk, getDIAGNOSISThunk } from "../../store/diagnosis";


function EditDiagnosis({ d }) {

  const dispatch = useDispatch();
  const [comment, setComment] = useState('');
  console.log("THIS IS DDDDD ", d)

  const updateComment = (e) => {
    setComment(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateDIAGNOSISThunk({ 'id': d.id, 'comment': comment, 'doctorId': d.doctorId, 'patientCardId': d.patientCardId  }));
  };

//   comment: "ayeeee"
// doctorId: 1
// id: 9
// patientCardId: 2

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
        <button className="edit-btn" type="submit">
          Update!
        </button>
      </form>
    </div>
  )
}
export default EditDiagnosis
