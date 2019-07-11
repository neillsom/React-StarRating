import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StarRating from './StarRating';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<StarRating />, document.getElementById('root'));

serviceWorker.unregister();
