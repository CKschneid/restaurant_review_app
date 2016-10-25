import React, { Component } from 'react';
import './App.css';
import StarRating from './StarRating';
import SelectStars from './SelectStars';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userSession: {
        starsDirty: false,
        starsRating: 0,
        formIsValid: false
      },
      reviews: this.props.restaurant.reviews
    };
    this.handleReviewSubmission.bind(this);
    this.handleStarSelection.bind(this);
    this.setReviewValidity.bind(this);
  }

  setReviewValidity(){
    this.setState = {userSession: {formIsValid: true}};
  }
  handleStarSelection(stars){
    this.setState = { userSession: {starsDirty: true, starsRating: stars};
  }
  handleReviewSubmission(syntheticEvent) {
    syntheticEvent.preventDefault();
    this.setState = this.state.reviews.push({ // would prefer immutable method here
        user: syntheticEvent.target.elements[0],
        date: new Date(),
        rating: this.state.userSession.starsRating,
        comment: syntheticEvent.target.elements[1]
    });
    // render optimistically. user review shows instantly while here we push the new review to the server
  }
  render(){
    return (
      <section>
        { this.state.reviews.map( review => {
            return
              <div className="review" key={review.user}>
                <h4> {review.user} </h4>
                <h5> {review.date} </h5>
                <StarRating stars={review.rating} />
                <p> {review.comment} </p>
              </div>
            });
        }

        <h3>Write a Review</h3>
        <form onSubmit="handleReviewSubmission">
          <label for="username"> Your Name: </label>
           </br>
          <input type="text" id="username" />
          <SelectStars onStarSelect={this.handleStarSelection}/>
          <textarea placeholder="Enter your review here"></textarea>
          <button type="submit" disabled={this.state.userSession}/>
        </form>
      </section>
    )
  }
}

export default Reviews;
