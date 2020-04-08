import React from "react";
import "./index.css";

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-card">
          <div className="grey"></div>
        <header>
          <a href="google.com">
          
            <img src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200"></img>
          </a>

          <h1>My name is </h1>
          <h2>Designer</h2>
          <p>
            "Terence is an avid reader of science fiction, especially anything
            to do with aliens and tweed jackets. Most weekends, he can be found
            cataloguing his collection of rodent skeletons."
          </p>
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
