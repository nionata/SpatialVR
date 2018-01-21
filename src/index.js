import React from 'react';
import ReactDOM from 'react-dom';
import Console from './Console';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Console/>, document.getElementById('root'));
registerServiceWorker();
