const calculateStars = (restaurant) => {
  let sum = restaurant.reviews.map( (review) => review.rating )
                              .reduce ( (previous, current) => previous + current);
  return sum / reviews.length;
};

export default calculateStars;
