import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ptcardform.css";
import { uploadCARDThunk, getCARDSThunk } from "../../store/patientcard";
import { useHistory } from "react-router-dom";
// import {autocomplete} from 'autocomplete';
import ApiConditions from "../ApiConditions";

import axios from 'axios';



const PatientCardForm = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [commData, setCommData] = useState([]);
  const [medCon, setMedCon] = useState('');
  const [upperbody, setUpperBody] = useState("");
  const [lowerbody, setLowerBody] = useState("");
  const [comment, setComment] = useState("");


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



  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(
  //     uploadCARDThunk({
  //       'upperbody': upperbody,
  //       'lowerbody': lowerbody,
  //       'userId': user.id,
  //       'comment': comment,
  //     })
  //   );
  //   dispatch(getCARDSThunk());
  //   history.push("/patientcards");
  // };


  const getMedicalConditions = async () => {
    const res = await axios(`https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=${medCon}&maxList`);
    // console.log('HEEEERREEEEEEEEE', res.data);
    setData(res.data);
  };

  return (
    <div  className="modal3">
      <div className="title-container">
        <h1>Create A New PatientCard:</h1>
        <h2>Where Does It Hurt? </h2>
      </div>
      <div className="radio-field">
        {" "}
        <label>General Location: </label>
        <input type="radio" value={upperbody} name="body" onChange={updateUpperBody} required={true}/> Upperbody
        <input type="radio" value={lowerbody} name="body" onChange={updateLowerBody} required={true}/> LowerBody
        <input type="radio" value="Other" name="body" onChange={ updateBoth} required={true}/> Both
        <input type="text" id="condition" placeholder="Condition" onChange={e => setMedCon(e.target.value)} />
        <button type="submit" className="" onClick={getMedicalConditions}>Search</button>
      </div>
        <div className='conditionsDiv'>
          { data &&
            <ApiConditions con={data} upperbody={upperbody} lowerbody={lowerbody}  />
          }
        </div>
    </div>
  );
};

export default PatientCardForm;
