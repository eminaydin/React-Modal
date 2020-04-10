import React from 'react';
import './App.css';
import Cards from "./components/Cards/index.js";
import users from "./employees.json"
import Navbar from './components/Navbar';
import Modals from "./components/Modals"


class App extends React.Component {
constructor(props) {
  super(props);
this.state = {
  index : 0,
  open: false,
};

} 

userIndex = (cardIndex) =>  {
this.setState({
  index: cardIndex[0],
  open: cardIndex[1],
})
}


render(){


  let person = users[this.state.index];

  
  
  return (
    <div className="container">
    <Navbar />
    <div className="top-card"> 
      {users.map(user => {
        return <Cards user={user} users={users} key={user.id} userIndex = {this.userIndex}/>
      })}
      <Modals open = {this.state.open}> 
    <h1> 
      {}
      

    </h1>
      </Modals>
      </div>
    </div>
  
  )}
  
}

export default App;
