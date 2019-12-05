const Sequelize = require('sequelize');
const sequelize = require('../../connections');

module.exports = sequelize.define('CartItem', {
	id        : {
		type          : Sequelize.INTEGER(11),
		allowNull     : false,
		autoIncrement : true,
		primaryKey    : true
	},
	userId    : {
		type : Sequelize.INTEGER(11)
	},
	productId : {
		type      : Sequelize.INTEGER(11),
		allowNull : false,
		unique    : true
	},
	quantity  : {
		type      : Sequelize.INTEGER(11),
		allowNull : false,
		unique    : true
	}
});
