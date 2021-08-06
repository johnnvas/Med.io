import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
// import DatePicker from '../Calendar/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-modal'
import './signupform.css'

const SignUpForm = ({showModal, setShowModal}) => {
  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  let [dob, setDob] = useState(new Date());
  const [medicalconditions, setMedicalConditions] = useState('');
  const [password, setPassword] = useState('');
  const [doctor, setDoctor] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      // dob=dob.toDateString();
      const data = await dispatch(signUp(firstName, email, password, lastName, medicalconditions, dob, doctor));
      if (data) {
        setErrors(data)
      }
    }
    setShowModal(false)
  };


  const updateDate = (date) => {

    setDob(date)
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateMedicalConditions = (e) => {
    setMedicalConditions(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // const updateDoctor = (e) => {
  //   setDoctor(true);
  // };

  const hideDiv = () => {
    const med = document.getElementById("medConditions");

    if (med.style.display === "none") {
      med.style.display = "block";
      setMedicalConditions('')
      setDoctor(false);
    } else {
      med.style.display = "none";
      setMedicalConditions('none')
      setDoctor(true);
    }
  };

  if (user) {
    return <Redirect to='/patientcards' />;
  }

  return (
    <Modal
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <form onSubmit={onSignUp} className='signupform-container'>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <p>Before we begin, please check if you are a doctor:</p>
          <input
            type='checkbox'
            name='firstName'
            // onChange={updateDoctor}
            onClick={ hideDiv}
            value={doctor}
          ></input>
          <br/>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            onChange={updateFirstName}
            value={firstName}
            required={true}
          ></input>
        </div>
        <div>
          <div>
          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            onChange={updateLastName}
              value={lastName}
              required={true}
          ></input>
          </div>
          <div id='medConditions'>
          <label>Medical Conditions</label>
            <input
              type='text'
              name='medicalConditions'
              onChange={updateMedicalConditions}
                value={medicalconditions}
                required={true}
            ></input>
          </div>
          <label>Email</label>
          <input
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
            required={true}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            required={true}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>Date Of Birth </label>
          {/* <DatePicker value={dob} id='date' onChange={(date) => setDob(date)} dateFormat='MMMM d, yyyy h:mm aa' /> */}
          <DatePicker selected={dob}
            id='date'
            onChange={updateDate}
            dateFormat='MM/dd/yyyy'
            required={true}
          />
        </div>
        <button type='submit' className='signup-btn'>Sign Up</button>
        </form>
      </Modal>
  );
};

export default SignUpForm;
