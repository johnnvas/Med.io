import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { uploadCARDThunk, getCARDSThunk } from "../../store/patientcard";
import { useSelector, useDispatch } from "react-redux";
import "../PostPTCard/ptcardform.css";

export default function ApiConditions({ con, upperbody, lowerbody }) {
  const [commData, setCommData] = useState([]);
  const history = useHistory();
  const [comment, setComment] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const conditions = con[3];

  const updateComment = (e) => {
    setComment(e.target.value);
  };


  const populateComment = (e) => {
    setCommData((commData) => [...commData, " " + e[0]]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      uploadCARDThunk({
        upperbody: upperbody,
        lowerbody: lowerbody,
        userId: user.id,
        comment: commData,
      })
    );
    dispatch(getCARDSThunk());
    history.push("/patientcards");
  };

  return (
    <div className="bigApiDiv">
      <div>
        <div className="listItems">
          {conditions &&
            conditions?.map((condi, i) => (
              <>
                <li key={condi[i]}> {condi} </li>
                <button
                  className="addBtn"
                  onClick={() => populateComment(condi)}
                >
                  Add
                </button>
              </>
            ))}
        </div>
      </div>

      <form onSubmit={onSubmit}>
        <div className="input-fieldApi">
          {" "}
          <textarea
            name="Comment"
            rows={6}
            cols={60}
            id="textarea"
            type="text"
            placeholder="Any additional comments?"
            value={commData}
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
