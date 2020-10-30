import React from "react";
import "./modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div className={`modal ${this.props.open ? "show" : ""}`}>
        {this.props.children}
      </div>
    );
  }
}
export default Modal;
