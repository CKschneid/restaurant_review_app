import React, { Component } from 'react';
import getJSON from './getJSON';
import StarRating from './StarRating';
import Reviews from './Reviews';
import calculateStars from './calculateStars';
import './App.css';

class RestaurantFullPage extends Component {

  constructor(props) {
    super(props);

    this.state = { featuredRestaurant: { }};
  }

  componentDidMount(){
    let restaurants = getJSON('restaurants.json');
    let restaurant = restaurants.find((restaurant) => restaurant.place_id == this.props.params.place_id);
    this.setState = { featuredRestaurant: restaurant};
  }

  render(){

    <section>
      <h1> {this.state.featuredRestaurant.name}</h1>
      <img src={`images/${this.state.featuredRestaurant.place_id}`} />
      <StarRating stars={calculateStars(this.state.featuredRestaurant)} />
      <h3> {this.state.featuredRestaurant.address[0]} </h3>
      <h3> {this.state.featuredRestaurant.address[1]} </h3>
      <h2> Reviews </h2>
      <Reviews restaurant={this.state.featuredRestaurant} />
    </section>
  }
}

export default RestaurantFullPage;
