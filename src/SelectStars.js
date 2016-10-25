import React, { Component } from 'react';
import starsClassLogic from './starsClassLogic'
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
     //this.props.onStarSelect;
  }
  handleHover(syntheticEvent) {
    // index of star => change all fill states <= index to 1
    let targetIndex = syntheticEvent.target.getAttribute('data-index');
    this.setState = { fillStates: this.state.fillStates.map(
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
      )};
      this.props.onStarSelect(targetIndex + 1);
  }



  render(){

    return (
      <div>
      {
        this.state.fillStates.map( (fillState, index) => {
          return(
            <i className={`fa ${starsClassLogic.bind(fillState)}`}
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
