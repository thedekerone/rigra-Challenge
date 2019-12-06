import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';

import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './GlobalStyles';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Thanks } from './pages/Thanks';
import { Home } from './pages/Home';

const client = new ApolloClient({
	uri : '/api'
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyles />
		<Router>
			<Home path='/' />
			<Thanks path='/thanks' />
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
);

serviceWorker.unregister();
