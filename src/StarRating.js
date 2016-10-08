import React, { Component } from 'react';
import './App.css';

class StarRating extends Component {
  constructor(props){
    super(props);
    this.calculateStarsObj.bind(this);
  }

  calculateStarsObj(starsRating, maxStars){
    let stars = { full:0, half: 0, empty: 0};
    stars.full = Math.floor(starsRating);
    stars.half = starsRating % 1 ? 1 : 0;
    stars.empty = maxStars - (stars.full + stars.half);
    return stars;
  }
  render(){
    let starsObj = this.calculateStarsObj(this.props.stars, 5);

    let starsArray = [];

    for(let i=0; i < starsObj.full; i++){
      starsArray.push("<i className="fa fa-star"></i>");
    }

    if (starsObj.half) { starArray.push("<i className="fa fa-star-half"></i>");}

    for(let i=0; i < starsObj.empty; i++){
      starsArray.push("<i className="fa fa-star-o"></i>");
    }
    return starsArray;
  }
}

export default StarRating;
