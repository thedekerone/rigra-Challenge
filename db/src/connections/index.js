const Sequelize = require('sequelize');

const sequelize = new Sequelize('cart', 'root', 'internetes', {
	host    : 'localhost',
	dialect : 'mysql'
});

module.exports = sequelize;
