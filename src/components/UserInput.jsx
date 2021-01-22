import React, { Component } from 'react';
import Context from '../Context/Context';

class UserInput extends Component {
  static contextType = Context;
  state = {
    userInput: null
  }
  setInput = (e) => {
    let value = e.target.value;
    if(value !== ""){
      let formattedStr = value.replace(value[0], value[0].toUpperCase());
      this.setState({userInput: formattedStr})
    } else {
      this.setState({userInput: ""})
    }
    window.onkeypress = (e) => {
      if(e.keyCode === 13){
        document.querySelector('button.search-btn').click();
      }
    }
  }
  render() { 
    return (
      <div className="input-wrapper">
        <input onInput={(e) => this.setInput(e)} type="text" placeholder="Search Country By Name, Region, Code, Inital Letter" id="userInput" autoComplete={"off"}/>
        <button className="search-btn" onClick={() => {
          this.context.setUserInput(this.state.userInput)
          if(this.state.userInput !== null){
            this.props.filterCountry(this.state.userInput);
          }
        }}> <img src="./Search.svg" alt=""/> </button>
      </div>
    );
  }
}
 
export default UserInput;