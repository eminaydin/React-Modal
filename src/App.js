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
  close = () => {
    this.setState({
      open: false,
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
            <div class="modal-parent">
              <div className={`modal-nav ${person.department === "Engineering" ? "engineer" : ""} ${person.department === "Business" ? "business" : ""}${person.department === "Design" ? "design" : ""}`}>
                <div className="modal-close">
                  <a
                    href="#close"
                    title="Close"
                    className="close"
                    type="button"
                    onClick={this.close}
                  >
                    Close
                  </a>
                </div>{" "}
              </div>

              <div className="modal-image">
                <img src={person.avatar} alt="" class="modal-avatar"></img>{" "}
              </div>
              <div> </div>
              <div className="modal-info">
                <h1 className="modal-name">
                  {person.firstName} {person.lastName}
                </h1>
                <h5 className="modal-title">{person.jobTitle}</h5>
                <h5 className="modal-title">{person.department}</h5>
              </div>
              <div className="modal-bio">
                <p>{person.bio}</p>
              </div>
              <div className="modal-contacts">
                <a href={person.contact.phone}>
                  <span className={`material-icons phone ${person.department === "Engineering" ? "engineer" : ""} ${person.department === "Business" ? "business" : ""}${person.department === "Design" ? "design" : ""}`}>call</span>{person.contact.phone}
                </a>{" "}
                <a href={person.contact.email}>
                  <span className={`material-icons email ${person.department === "Engineering" ? "engineer" : ""} ${person.department === "Business" ? "business" : ""}${person.department === "Design" ? "design" : ""}`}>email</span>{person.contact.email}
                </a>{" "}
                <a href={person.contact.url}>
                  <span className={`material-icons computer ${person.department === "Engineering" ? "engineer" : ""} ${person.department === "Business" ? "business" : ""}${person.department === "Design" ? "design" : ""}`}>computer</span>{person.contact.url}
                </a>{" "}
              </div>
              <div className="modal-previous-btn">
                <button
                  className="previous-button"
                  onClick={this.previousPerson}
                  disabled={this.state.index <= 0 ? true : false}
                >Previous
                </button>
              </div>
              <div className={`modal-next-btn ${person.department === "Engineering" ? "engineer" : ""} ${person.department === "Business" ? "business" : ""}${person.department === "Design" ? "design" : ""}`}>
                <button
                  className="next-button"
                  onClick={this.nextPerson}
                  disabled={this.state.index >= 41 ? true : false}
                >Next
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
