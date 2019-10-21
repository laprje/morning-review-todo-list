//this is unfinished and non-functional


//Libraries
import React, { Component } from 'react';

//Components
import Todo from './components/Todo';

//Stylesheets
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      input: ''
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange = (e) => {
    this.setState({input: e.target.value})
  }

  handleClick(){
    this.setState({list: [...this.state.list, this.state.input]})
  }

  render() {
    return(
      <div className='app-body'>
        <input className='input-box' placeholder='Type here' onChange={this.handleChange} />
        <button className='add-button' onclick={this.handleClick}>Add Task</button>
      </div>
    )
  }
}