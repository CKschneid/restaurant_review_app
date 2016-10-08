import React, { Component } from 'react';
import './App.css';
import StarRating from './StarRating';

class Reviews extends Component {

  constructor(props) {
    super(props);
    this.state = { reviews: this.props.restaurant.reviews};
    this.handleReviewSubmission.bind(this);
  }

  handleReviewSubmission(syntheticEvent) {
    syntheticEvent.preventDefault();
    this.setState = { reviews: [...this.state.reviews, {
        user: syntheticEvent.target.elements[0],
        date: new Date(),
        rating: null,
        comment: syntheticEvent.target.elements[1]
        }
      ]  
    }
  }
  render(){
    <section>
      { this.state.reviews.map( (review) => {
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
        <textarea placeholder="Enter your review here"></textarea>
        <button type="submit"/>
      </form>
    </section>
  }
}

export default Reviews;
