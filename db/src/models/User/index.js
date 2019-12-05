const Sequelize = require('sequelize');
const sequelize = require('../../connections');

module.exports = sequelize.define('User', {
	id       : {
		type          : Sequelize.INTEGER(11),
		allowNull     : false,
		autoIncrement : true,
		primaryKey    : true
	},
	username : {
		type      : Sequelize.STRING(30),
		allowNull : false,
		unique    : true
	},
	password : {
		type      : Sequelize.STRING(35),
		allowNull : false
	}
});
