import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link } from '@reach/router';

import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './GlobalStyles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Thanks } from './pages/Thanks';

const client = new ApolloClient({
	uri : '/api'
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<Router>
			<App path='/' />
			<Thanks path='/thanks' />
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
