import React, { Component } from 'react';
import './App.css';

starsClassLogic(fillState) {
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

export default starsClassLogic;
