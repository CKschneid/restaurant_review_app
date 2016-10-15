import React, { Component } from 'react';
import './App.css';

class SelectStars extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasBeenRated: false,
      rating: null,
      fillStates: [0, 0, 0, 0, 0],
     };
     this.handleHover.bind(this);
     this.handleClick.bind(this);
     this.classLogic.bind(this);
  }
  handleHover(syntheticEvent) {
    // index of star => change all fill states <= index to 1
    let targetIndex = syntheticEvent.target.getAttribute('data-index');
    this.setState = { fillStates: this.state.fillStates.map (
      (fillState, index) => { index <= targetIndex ? 1 : 0 };
    );}
  }
  handleClick(syntheticEvent){
    let targetIndex = syntheticEvent.target.getAttribute('data-index');
    this.setState = {
      hasBeenRated: true,
      rating: targetIndex + 1,
      fillStates: this.state.fillStates.map (
        (fillState, index) => { index <= targetIndex ? 2 : 0 };
      )}
  }

  classLogic(fillState) {
    let classExpression = '';
    switch (fillState) {
      case 0:
        classExpression = 'fa-star-o noFill';
        break;
      case 1:
        classExpression = 'fa-star hoverFill';
        break;
      case 2:
        classExpression = 'fa-star selectedFill';
        break;
    }
    return classExpression;
  }

  render(){

    return (
      <div>
      {
        this.state.fillStates.map( (fillState, index) => {
          return(
            <i className={`fa ${this.classLogic.bind(fillState)}`}
               onHover={this.handleHover}
               onClick={this.handleClick}
               key={index}
               data-index={index}>
            </i>
          });
        )
      }
      </div>
  )
  }
}

export default SelectStars;
