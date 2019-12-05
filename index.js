const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./api/resolvers');
const { readFileSync } = require('fs');
const graphqlHTTP = require('express-graphql');
const path = require('path');
const cors = require('cors');
const express = require('express');

// Graph variables
const typeDefs = readFileSync(path.join(__dirname, 'api', 'schema.graphql'), 'utf-8');

const executableSchema = makeExecutableSchema({
	typeDefs,
	resolvers
});

const app = express();

app.use(cors());

app.use(
	'/api',
	graphqlHTTP({
		schema   : executableSchema,
		graphiql : true
	})
);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + './public/index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
