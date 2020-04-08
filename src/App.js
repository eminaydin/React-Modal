import React from 'react';
import './App.css';
import Cards from "./components/index.js";
import user from "./employees.json"


function App() {
  return (
    <div className="container">
      {user.map(user => {
        return <Cards user={user}/>
      })}
      

    </div>
  
  )
}

export default App;
