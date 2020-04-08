import React from 'react';
import './App.css';
import Cards from "./components/Cards/index.js";
import user from "./employees.json"


function App() {
  return (
    <div className="container">
      {user.map(user => {
        return <Cards user={user} key={user.id}/>
      })}
      

    </div>
  
  )
}

export default App;
