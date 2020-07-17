import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './components/registration/Registration';
import SignUp from './components/SignUp/SignUp';

function App(props) {

  let page  =  <SignUp state = {props.state}/>

  return (
    <BrowserRouter>
      <div className = 'app_wrapper'>
          {page} 
      </div>
    </BrowserRouter>
  );
}

export default App;
