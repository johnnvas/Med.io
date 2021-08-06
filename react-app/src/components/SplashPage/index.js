import './splash.css'
import SignUpForm from "../auth/SignUpForm"
import React, { useState } from "react";


function SplashPage() {
  const [showModal, setShowModal] = useState(false);

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
      </div>
    </>
  );
}
export default SplashPage;
