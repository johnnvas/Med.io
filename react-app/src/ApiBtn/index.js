import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { uploadCARDThunk, getCARDSThunk } from "../../store/patientcard";
// import { useSelector, useDispatch } from "react-redux";


export default function ApiButton({ condi }) {
  const [comment, setComment] = useState("");
  const [condArr, setCondArr]= useState([])

  const updateComment = (e) => {
    setComment(e.target.value);
  }

  // console.log("HERE IS CONDIII", condi);

  const conditionArr = [];

  const populateComment = (e) => {

    console.log('DIS EEEE', e)

    setCondArr(condArr => [...condArr, e[0]])

    // conditionArr.push(e[0]);
    // const text = document.getElementById('textarea')


    // console.log('HERE IS ARRAAAYYYYYY', conditionArr)
  }
  console.log('HERE IS CONDARRR', condArr)

  return (
    <>
      <button className='addBtn' onClick={()=>populateComment(condi)}>Add</button>

        <label className='input-fieldApi'>Notes: </label>
      <div className="input-fieldApi">
        {" "}
        <textarea
          name="Comment"
          id="textarea"
          type="text"
          placeholder="Any additional comments?"
          value={comment}
          onChange={updateComment}
          required={true}
        />
      <button type="submit" className="ptcard-submit input-fieldApi">
        Submit
      </button>

      </div>
    </>
  );
}
