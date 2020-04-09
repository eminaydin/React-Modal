import React from 'react';
import './App.css';
import Cards from "./components/Cards/index.js";
import user from "./employees.json"
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="container">
    <Navbar />
    <div className="top-card"> 
      {user.map(user => {
        return <Cards user={user} key={user.id}/>
      })}
      
      </div>
    </div>
  
  )
}

export default App;
