import React from "react";
import "./index.css";
import Modals from "../Modals/index.js"
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({
      isOpen: true,
    });
  }
  render() {
    return (
      
      <div className="profile-card" onClick={this.openModal}>
        {this.state.isOpen ? (
       <Modals />
      ) : null} 
        <div className="top-section"></div>
        <header>
          <a href="google.com">
            <img src={this.props.user.avatar} alt=""></img>
          </a>

          <h1>
            {this.props.user.firstName} {this.props.user.lastName}
          </h1>
          <h4>{this.props.user.jobTitle}</h4>
        </header>
        <ul className="contact-info">
          <li>
            <a href={this.props.user.contact.phone}>
              <img
                src="http://icons.iconarchive.com/icons/stalker018/mmii-flat/128/phone-icon.png"
                alt=""
              ></img>
            </a>
          </li>
          <li>
            <a href={this.props.user.contact.email}>
              <img
                src="http://icons.iconarchive.com/icons/designbolts/handstitch-social/256/Email-icon.png"
                alt=""
              ></img>
            </a>
          </li>
          <li>
            <a href={this.props.user.contact.url}>
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
