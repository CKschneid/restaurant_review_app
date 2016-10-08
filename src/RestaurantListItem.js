import React, { Component } from 'react';
import {Link} from 'react-router';
import './App.css';
import StarRating from './StarRating';
import calculateStars from './calculateStars';

class RestaurantListItem extends Component {
  constructor(props){
    super(props);
  }
  render(){
    <div className="restaurant-list-item">
      <img className="restaurant-list-photo" src={`images/${this.props.place_id}.jpg`}/>
      <Link to={`/spotlight/${this.props.place_id}`} className="restaurant-link">{this.props.name}</Link>
      <StarRating stars={calculateStars(this.props.restaurant)} />
    </div>
  }

}

export default RestaurantListItem;
