import React from 'react';
import ReactDOM from 'react-dom';
import "shards-ui/dist/css/shards.min.css"
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
