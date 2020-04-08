import React from 'react';
import './App.css';
import Cards from "./components/index.js";
import employees from "./employees.json"

function App() {
  return (
    <div className="container">
      {employees.map(users => {
        return <Cards />
      })}

    </div>
  
  )
}

export default App;
