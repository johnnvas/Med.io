import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { uploadCARDThunk, getCARDSThunk } from "../../store/patientcard";
import { useSelector, useDispatch } from "react-redux";
import "../PostPTCard/ptcardform.css";

export default function ApiConditions({ con, upperbody, lowerbody }) {
  const [comment, setCommData] = useState('');
  const history = useHistory();
  const [cmt, setCmt] = useState("");
  const userId = useSelector((state) => state.session.user).id;
  const dispatch = useDispatch();
  const conditions = con[3];


  const updateComment = (e) => {
    setCmt(e.target.value);
  };


  const populateComment = (e) => {
    setCommData((comment) => comment += e + ", ");
    console.log('This is EEEEEE',e)
    console.log('This is COMDDDD',comment)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      uploadCARDThunk(
       { upperbody,
        lowerbody,
        comment,}
      )
    );

    dispatch(getCARDSThunk());
    history.push("/patientcards");
  };

  return (
    <div className="bigApiDiv">
      <div className='listBox'>
        <div className="listItems">
          {conditions &&
            conditions?.map((condi, i) => (
              <div key={condi[i]}>
                <li> {condi} </li>
                <button
                  className="addBtn"
                  onClick={() => populateComment(condi)}
                >
                  Add
                </button>
              </div>
            ))}
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="input-fieldApi">
          {" "}
          <textarea
            name="Comment"
            rows={4}
            cols={35}
            id="textarea"
            type="text"
            value={comment}
            onChange={updateComment}
            required={true}
          />
          <button type="submit" className="ptcard-submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
