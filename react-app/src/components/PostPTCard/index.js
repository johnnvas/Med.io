import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ptcardform.css";
import { useHistory } from "react-router-dom";
// import {autocomplete} from 'autocomplete';
import ApiConditions from "../ApiConditions";

import axios from 'axios';



const PatientCardForm = () => {
  const [data, setData] = useState(null);
  const [medCon, setMedCon] = useState('');
  const [upperbody, setUpperBody] = useState("");
  const [lowerbody, setLowerBody] = useState("");



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
        <input type="text" id="condition" placeholder="KEY WORD" onChange={e => setMedCon(e.target.value)} />
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
