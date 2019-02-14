import React, { Component } from "react";

export default class CircleSelector extends Component {
    handleClick = (e) => {
        e.preventDefault();
        if(document.getElementById(`${e.target.id}`).className == ""){
            document.getElementById(`${e.target.id}`).className = "selected" 
        } else {
            document.getElementById(`${e.target.id}`).className = ""
        }
             
    }

    render() {
        return(
            <div className="CircleSelector">
                <button onClick={this.handleClick} id="btn1">Select Circle 1</button>
                <button onClick={this.handleClick} id="btn2">Select Circle 2</button> 
                <button onClick={this.handleClick} id="btn3">Select Circle 3</button> 
                <button onClick={this.handleClick} id="btn4">Select Circle 4</button>    
            </div>
        );
    }
}