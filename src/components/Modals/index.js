import React from "react";
import "./index.css";

class Modals extends React.Component {
    constructor(props) {
        super(props);
    }
 

    render() {
         return (
             <div className={`modal ${this.props.open ? "show" : ""}`}>
                 {this.props.children}
             </div>
         )
        
    }
}
export default Modals;