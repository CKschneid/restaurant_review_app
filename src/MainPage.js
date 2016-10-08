import React, { Component } from 'react';
import './App.css';
import getJSON from './getJSON';
import calculateStars from './calculateStars';
import RestaurantListItem from './RestaurantListItem';

class MainPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      sortMethod: "name",
      restaurants: [ ]
    };

    this.updateSortMethod.bind(this);
    this.sortByName.bind(this);
    this.sortByStars.bind(this);
    this.filterForLate.bind(this);
  }

  componentDidMount(){
    this.setState = {restaurants: getJSON('restaurants.json')};
  }

  updateSortMethod(e){
    this.setState = { sortMethod: e.target.value};
  }
  sortByName(restaurants){
    return restaurants.sort( (a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
    });
  }
  sortByStars(restaurants){
    return restaurants.sort( (a,b) => calculateStars(a) > calculateStars(b) ? 1 : -1 );
  }
  filterForLate(restaurants){
    return restaurants.filter( (restaurant) => {
        let isOpenLate = false; // after 11 pm
        restaurant.hours.forEach( (day){
          if( day[day.length - 1] > 11) {
            isOpenLate = true;
          }
        });
        return isOpenLate;
    })
  }

  render() {
    return (
      <section>
        <h3> View By: </h3>
        <select onChange={this.updateSortMethod}>
          <option value="name" selected="true">Name</option>
          <option value="stars" >Stars</option>
          <option value="openLate" >Open Late</option>
        </select>
        <section>
          {
            if (this.state.sortMethod = "name" ) {
              sortByName(this.state.restaurants).map( (restaurant) => {
                return <RestaurantListItem key={restaurant.place_id} restaurant={restaurant} />
              })
            }
            if(this.state.sortMethod = "stars" ) {
              sortByStars(this.state.restaurants).map( (restaurant) => {
                return <RestaurantListItem key={restaurant.place_id} restaurant={restaurant} />
            })
            if(this.state.sortMethod = "openLate") {
              sortByName(filterForLate(this.state.restaurants)).map( (restaurant) => {
                return <RestaurantListItem key={restaurant.place_id} restaurant={restaurant} />
              })
            }
          }
        </section>
      </section>
    );
  }
}

export default MainPage;
