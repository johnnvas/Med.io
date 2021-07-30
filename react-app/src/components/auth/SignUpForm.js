import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
// import DatePicker from '../Calendar/index';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUpForm = () => {
  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  let [dob, setDob] = useState(new Date());
  const [medicalconditions, setMedicalConditions] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      // dob=dob.toDateString();
      const data = await dispatch(signUp(firstName, email, password, lastName, medicalconditions, dob));
      if (data) {
        setErrors(data)
      }
    }
  };


  const updateDate = (date) => {
     console.log('THIS IS THE DATE==============>', date)
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

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>First Name</label>
        <input
          type='text'
          name='firstName'
          onChange={updateFirstName}
          value={firstName}
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
        ></input>
        </div>
        <div>
        <label>Medical Conditions</label>
        <input
          type='text'
          name='medicalConditions'
          onChange={updateMedicalConditions}
          value={medicalconditions}
        ></input>
      </div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
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
        <DatePicker selected={dob} id='date' onChange={updateDate} dateFormat='MM/dd/yyyy' />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
