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
            <a href="#close" title="Close" class="close">
                Close
              </a>
              <div className="modal-info">
              <header className="modal-header">
                <img src={person.avatar} alt=""></img>
                <h1 className="modal-name">
                  {person.firstName} {person.lastName}
                </h1>
              </header>
              <h5 className="modal-title">{person.jobTitle}</h5>
              <p className="modal-bio">{person.bio}</p>
              </div>
              <footer className="buttons">
                <button
                  className="previous-button"
                  onClick={this.previousPerson}
                  disabled={this.state.index <= 0 ? true : false}
                >
                  Previous
                </button>
                <button
                  for="modal"
                  className="next-button"
                  onClick={this.nextPerson}
                  disabled={this.state.index >= 41 ? true : false}
                >
                  Next Person
                </button>
              </footer>
            </div>
          </Modals>
        </div>
      </div>
    );
  }
}

export default App;
