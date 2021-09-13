import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCARDThunk, getCARDSThunk } from "../../store/patientcard";
import "./EditComment.css";

function EditComment({ pc, showMenu, setShowMenu }) {
  const dispatch = useDispatch();
  const [comment, setComment] = useState(pc.comment);



  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCARDThunk({ 'id': pc.id, 'comment': comment }))
    setShowMenu(false);
  };

  const updateComment = (e) => {
    console.log('HERE IS PCCOMMEBTTTT', (pc.comment));
    setComment(e);
  }

  useEffect(() => {
    dispatch(getCARDSThunk())
  }, [dispatch])

  return (
    <div className="EditComment">
      <form onSubmit={onSubmit}>
         <label className="edit-comment"></label>
        <label>
          <textarea
            // placeholder={ pc.comment}
            type="text"
            value={comment}
            onChange={(e)=> updateComment(e.target.value)}
            required
            rows="3"
            cols="15"
            className="edit-comment-input"
          />
        </label>
        <button className="edit-comment-btn" type="submit">
          Update!
        </button>
      </form>
    </div>
  )
}
export default EditComment
