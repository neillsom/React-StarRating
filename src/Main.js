import React from 'react';
import StarRating from './StarRating';
import './index.css'

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
          <h1 className="Main-title">Simple Star Rating Selector</h1>
        <p className="Main-intro">
          Change the rating by clicking on a star
        </p>
        <StarRating rating={3} />
      </div>
    );
  }
}

export default Main;
