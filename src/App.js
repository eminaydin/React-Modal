import React from "react";
import "./App.css";
import Cards from "./components/Cards/cards";
import users from "./employees.json";
import Navbar from "./components/Navbar/navbar";
import Modal from "./components/Modal/modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      open: false,
    };

    this.modalRef = React.createRef();
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
  componentDidMount() {
    document.addEventListener("mousedown", this.handleMouseDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleMouseDown, false);
  }
  handleMouseDown = (event) => {
    if (!this.modalRef.current.contains(event.target)) {
      this.close();
    }
  };
  render() {
    let person = users[this.state.index];

    return (
      <div className="container">
        <Navbar />
        <div className="team-text">
          <p>
            {" "}
            Our team of <span className="team-number">42</span> strategists,
            designers, engineers, developers and managers
            <br />
            make custom products for startups and leading companies.{" "}
          </p>{" "}
        </div>
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
          <Modal open={this.state.open ? true : false} users={users}>
            <div className="modal-parent" ref={this.modalRef}>
              <div
                className={`modal-nav ${
                  person.department === "Engineering" ? "engineer" : ""
                } ${person.department === "Business" ? "business" : ""}${
                  person.department === "Design" ? "design" : ""
                }`}
              >
                <div className="modal-close">
                  <a
                    href=""
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
                <img src={person.avatar} alt="" className="modal-avatar"></img>{" "}
              </div>
              <div> </div>
              <div className="modal-info">
                <h1 className="modal-name">
                  {person.firstName} {person.lastName}
                </h1>
                <h5 className="modal-title">{person.jobTitle}</h5>
                <h5 className="modal-department">{person.department}</h5>
              </div>
              <div className="modal-bio">
                <p>{person.bio}</p>
              </div>
              <div className="modal-contacts">
                <a href={`mailto: ${person.contact.phone}`}>
                  <span
                    className={`material-icons phone ${
                      person.department === "Engineering" ? "engineer" : ""
                    } ${person.department === "Business" ? "business" : ""}${
                      person.department === "Design" ? "design" : ""
                    }`}
                  >
                    call
                  </span>
                  <span className="contact-text">{person.contact.phone}</span>
                </a>{" "}
                <a href={`mailto: ${person.contact.email}`}>
                  <span
                    className={`material-icons email ${
                      person.department === "Engineering" ? "engineer" : ""
                    } ${person.department === "Business" ? "business" : ""}${
                      person.department === "Design" ? "design" : ""
                    }`}
                  >
                    email
                  </span>
                  <span className="contact-text">{person.contact.email}</span>
                </a>{" "}
                <a href={person.contact.url}>
                  <span
                    className={`material-icons computer ${
                      person.department === "Engineering" ? "engineer" : ""
                    } ${person.department === "Business" ? "business" : ""}${
                      person.department === "Design" ? "design" : ""
                    }`}
                  >
                    computer
                  </span>
                  <span className="contact-text">{person.contact.url}</span>
                </a>{" "}
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
              <div
                className={`modal-next-btn ${
                  person.department === "Engineering" ? "engineer" : ""
                } ${person.department === "Business" ? "business" : ""}${
                  person.department === "Design" ? "design" : ""
                }`}
              >
                <button
                  className="next-button"
                  onClick={this.nextPerson}
                  disabled={this.state.index >= 41 ? true : false}
                >
                  Next
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
