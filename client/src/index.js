import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './GlobalStyles';

ReactDOM.render(
	<React.Fragment>
		<GlobalStyles />
		<Router>
			<App path='/files' />
		</Router>
	</React.Fragment>,
	document.getElementById('root')
);

serviceWorker.unregister();
