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
  close =() => {
    this.setState({
      open: false
    })
  }
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
            <div class="modal-parent">
              <div className= "modal-close"><a href="#close" title="Close" className="close" type="button" onClick={this.close}>
                Close
              </a></div>
              <div className="modal-image">
                <img src={person.avatar} alt=""></img>{" "}
              </div>
              <div className="modal-info">
                <h1 className="modal-name">
                  {person.firstName} {person.lastName}
                </h1>
                <h5 className="modal-title">{person.jobTitle}</h5>
              </div>
              <div className="modal-bio">
              <p >{person.bio}</p>
              </div>
              <div className="modal-contacts">
              <a href={person.contact.phone}>Phone</a>{" "}
                <a href={person.contact.email}>Email</a>{" "}
                <a href={person.contact.url}> Website</a>{" "}
              </div>
              <div className="modal-previous-btn">
              <button
                  className="previous-button"
                  onClick={this.previousPerson}
                  disabled={this.state.index <= 0 ? true : false}
                >
                  Previous
                </button>
              </div>
              <div className="modal-next-btn">
                
                <button
                  className="next-button"
                  onClick={this.nextPerson}
                  disabled={this.state.index >= 41 ? true : false}
                >
                  Next Person
                </button> 
              </div>
            </div>
          </Modals>
        </div>
      </div>
    );
  }
}

export default App;
