import React from "react";
import "./index.css";

class Modals extends React.Component {
    render() {
         return (
             <div className={this.props.open ? "show" : "modal"}>
                 {this.props.children}
             </div>
         )
        
    }
}
export default Modals;