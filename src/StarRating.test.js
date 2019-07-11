import React from 'react';
import ReactDOM from 'react-dom';
import StarRating from './StarRating';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StarRating />, div);
  ReactDOM.unmountComponentAtNode(div);
});
