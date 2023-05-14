import './App.css';
import React from 'react';
import Register from './register';
import {Routes , Route,BrowserRouter as Router } from "react-router-dom"
import Login from './Login';
import Create from './components/Create';
import HomePage from './components/HomePage'
import SeeAll from './components/SeeAll';
import Teacher from './components/teacher';
const  App=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
         <Routes>
       
      
         
          <Route path="/" exact Component={Login} >
           
          </Route>
             
          <Route path='/register' Component={Register}></Route>
          <Route path='/HomePage' Component={HomePage}></Route>
          <Route path="/Teacher"  element={<Teacher />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/SeeAll" element={<SeeAll />} />
          </Routes>
       </Router>
       
      </header>
    </div>
  );
}

export default App;
