import React from 'react';
import ReactDOM from 'react-dom';
import ResultsBox from './ResultsBox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ResultsBox
    url='http://localhost:3001/api/results'
  />, document.getElementById('root'));
registerServiceWorker();
