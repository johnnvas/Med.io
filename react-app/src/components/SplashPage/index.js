import './splash.css'
import SignUpForm from "../auth/SignUpForm"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login } from "../../store/session";


function SplashPage() {
  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();

   const demoUser = async (e) => {
    e.preventDefault()
    dispatch(login('demo@aa.io', 'password'));
   }
   const demoDoctor = async (e) => {
    e.preventDefault()
    dispatch(login('mat@aa.io', 'password'));
  }

  return (
    <>
      <div className='splash-div'>
      </div>
      <div className='intro-box'>
        <h1>Welcome to <span className='coloredWord'>Med</span><span className='secondWord'>.io</span>!</h1>
        <h3> Where we specialize in closing the communication gap between doctors and patients </h3>
      <div>
        <button className='sign-up-modal-btn' onClick={() => setShowModal(true)}>
          Sign Up
        </button>
      </div>
         <SignUpForm
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className='demo-buttons'>
          <div>
          <button className='demo-user-btn btn' onClick={demoUser}>
            Demo User
          </button>
        </div>
        <div>
          <button className='demo-doctor-btn btn' onClick={demoDoctor}>
            Demo Doctor
          </button>
        </div>
        </div>
      </div>
    </>
  );
}
export default SplashPage;
