import React, { Component } from 'react';
import './App.css';

class DisplayStarRating extends Component {
  constructor(props){
    super(props);
  }
  render(){
    // fill states for stars... 1 = empty, 2 = half, 3 = full
    let fiveItemArray = new Array(5);

    return (
      fiveItemArray.map( (oneOfFiveItems, index) => { //refactor to an imprtable functin to pass to map
        if(index + 1 <= Math.floor(this.props.stars)){
          return 3;
        } else if( hasHalf && index + 1 == Math.ceil(this.props.stars)) {
          return 2;
        } else {
          return 1;
        }
      }).map( starFillState => {
          switch (starFillState) {
            case 3:
              return <i className="fa fa-star"></i>;
              break;
            case 2:
              return <i className="fa fa-star-half"></i>
              break
            case 1:
              return <i className="fa fa-star-o"></i>
              break
          }
      });
    )
  }
}

export default DisplayStarRating;
