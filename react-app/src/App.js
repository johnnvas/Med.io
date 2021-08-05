import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/Navbar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './components/User';
import PatientCards from './components/PatientCards';
import SplashPage from './components/SplashPage';
import PatientCardPage from './components/SinglePTCard';
import PatientCardForm from './components/PostPTCard'
// import DiagnosisForm from './components/PostDiagnosis'
import { authenticate } from './store/session';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
       <Route exact path="/" >
          <SplashPage/>
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <ProtectedRoute path='/newpatientcard' exact={true} >
          <PatientCardForm/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/patientcards' exact={true} >
          <PatientCards />
        </ProtectedRoute>
        <ProtectedRoute path='/patientcards/:cardId' exact={true} >
          <PatientCardPage />
        </ProtectedRoute>
        {/* <ProtectedRoute path='/patientcards/:cardId/diagnose' exact={true} >
          <DiagnosisForm />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
