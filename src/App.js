import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Registration from './components/registration/Registration';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className = 'app_wrapper'>
          <Route path='/reg' render={() => <Registration/>}/>
          <Route path='/signup' render={() => <SignUp/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
