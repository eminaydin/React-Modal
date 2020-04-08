import React from "react";
import "./index.css";
import user from "../employees.json"

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      
    return (
      <div className="profile-card">
          <div className="top-section"></div>
        <header>
          <a href="google.com">
          
            <img src={this.props.user.avatar}></img>
          </a>

          <h1>{this.props.user.firstName} {this.props.user.lastName}</h1>
          <h4>{this.props.user.jobTitle}</h4>
          
        </header>
        <ul className="contact-info">
          <li>
            
            <a href="https://twitter.com/tutsplus">
             
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"></img>
            </a>
          </li>
          <li>
        <a href="%">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg">
            </img>
        </a>

          </li>
          <li>
        <a href="%">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg">
            </img>
        </a>

          </li>
        </ul>
      </div>
    );
  }
}

export default Cards;
