const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./api/resolvers');
const { join, resolve } = require('path');
const { readFileSync } = require('fs');
const graphqlHTTP = require('express-graphql');

const express = require('express');

// Graph variables
const typeDefs = readFileSync(join(__dirname, 'api', 'schema.graphql'), 'utf-8');

const executableSchema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const app = express();

app.use(
	'/api',
	graphqlHTTP({
		schema   : executableSchema,
		graphiql : true
	})
);

app.use(express.static('public'));

app.get('*', (req, res) => {
	res.sendFile(resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
