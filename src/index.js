import React from 'react';
import ReactDOM from 'react-dom';

import FirstComponent from './firstComponent'

import './index.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FirstComponent />, document.getElementById('root'));

serviceWorker.unregister();
