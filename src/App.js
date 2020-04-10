import React from "react";
import "./App.css";
import Cards from "./components/Cards/cards.js";
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
      index: cardIndex,
      open: true,
    });
  };

  nextPerson = () => {
    this.setState({
      index: this.state.index + 1,
    });
  };
  previousPerson = () => {
    this.setState({
      index: this.state.index - 1,
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
          <Modals
            open={this.state.open}
            users={users}
            nextPerson={this.nextPerson}
          >
            <div className="modal-container">
              <header>
                <img src={person.avatar} alt=""></img>
                <h1>
                  {person.firstName} {person.lastName}
                </h1>
              </header>
              <h5>{person.jobTitle}</h5>
              <p>{person.bio}</p>
              <div className="footer">
                <button onClick={this.previousPerson} disabled= {this.state.index <= 0 ? true : false}>Previous</button>
                <button onClick={this.nextPerson} disabled= {this.state.index >= 41 ? true : false}>Next</button>
                <ul className="contact-info">
                  <li>
                    <a href={person.contact.phone}></a>
                  </li>
                  <li>
                    <a href={person.contact.email}></a>
                  </li>
                  <li>
                    <a href={person.contact.url}></a>
                  </li>
                </ul>{" "}
              </div>

            </div>
            
          </Modals>
        </div>
      </div>
    );
  }
}

export default App;
