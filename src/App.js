import React from "react";
import "./App.css";
import Cards from "./components/Cards/index.js";
import users from "./employees.json";
import Navbar from "./components/Navbar";
import Modals from "./components/Modals";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      open: false,
    };
    this.nextPerson = this.nextPerson.bind(this);
  }

  userIndex = (cardIndex) => {
    this.setState({
      index: cardIndex[0],
      open: cardIndex[0],
    });
  };

  nextPerson = (person) => {
    this.setState({
      index: person[0] + 1,
      open: person[0] + 1,
    });
  };

  render() {
    let person = users[this.state.index];

    return (
      <div className="container">
        <Navbar />
        <div className="top-card">
          {users.map((user) => {
            return (
              <Cards
                user={user}
                users={users}
                key={user.id}
                userIndex={this.userIndex}
              />
            );
          })}
          <Modals open={this.state.open} nextPerson={this.nextPerson}>
            <div className="modal-container">
              <header>
                <img src={person.avatar} alt=""></img>
                <h1>
                  {" "}
                  {person.firstName} {person.lastName}
                </h1>
              </header>
              <h5>{person.jobTitle}</h5>
              <p>{person.bio}</p>
              <div className="footer"><button onClick={this.previousPerson}>Previous</button>
              <button onClick={this.nextPerson}>Next</button>
              <ul className="contact-info">
          <li>
            <a href={person.contact.phone}>

            </a>
          </li>
          <li>
            <a href={person.contact.email}>
              
            </a>
          </li>
          <li>
            <a href={person.contact.url}>
              
            </a>
          </li>
        </ul> </div>
              
            </div>
          </Modals>
        </div>
      </div>
    );
  }
}

export default App;
