import React from "react";
import "./cards.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.indexOfUser = this.props.users.indexOf(this.props.user);
  }
  openModal() {
    this.setState({
      isOpen: true,
    });
    this.props.userIndex(this.sendIndex());
  }

  nextPage() {
    this.props.nextPerson(this.sendIndex());
  }
  previousPage() {
    this.props.previousPage(this.sendIndex());
  }

  sendIndex() {
    return this.indexOfUser;
  }

  render() {
    return (
      <div className="profile-card">
        <div className="top-section" onClick={this.openModal}></div>
        <header className="header" onClick={this.openModal}>
          <a href="#close">
            <img src={this.props.user.avatar} alt=""></img>
          </a>
          <h2 className="header-text">
            {this.props.user.firstName} {this.props.user.lastName}
          </h2>
          <span className="header-title">{this.props.user.jobTitle}</span>
        </header>
        <ul className="contact-info">
          <li>
            <a
              href={`tel:${this.props.user.contact.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://icons.iconarchive.com/icons/stalker018/mmii-flat/128/phone-icon.png"
                alt=""
              ></img>
            </a>
          </li>
          <li>
            <a
              href={`mailto: ${this.props.user.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://icons.iconarchive.com/icons/designbolts/handstitch-social/256/Email-icon.png"
                alt=""
              ></img>
            </a>
          </li>
          <li>
            <a
              href={this.props.user.contact.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="http://icons.iconarchive.com/icons/thehoth/seo/256/seo-browser-window-icon.png"
                alt=""
              ></img>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Cards;
