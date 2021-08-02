import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCARDThunk, getCARDSThunk } from "../../store/patientcard";
import "./EditComment.css";

function EditComment({ pc }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');


  console.log('THISSSSSSSSSSSSSSSSSSSSSSSSSSSSS', pc);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCARDThunk(pc.id, comment))
  };

  const updateComment = (e) => {
    setComment(e.target.value);
  }

  useEffect(() => {
    dispatch(getCARDSThunk())
  })

  return (
    <div className="EditComment">
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
export default EditComment
