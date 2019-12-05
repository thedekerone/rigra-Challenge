const Sequelize = require('sequelize');
const sequelize = require('../../connections');

module.exports = sequelize.define(
	'Product',
	{
		id       : {
			type          : Sequelize.INTEGER(11),
			allowNull     : false,
			autoIncrement : true,
			primaryKey    : true
		},
		title    : {
			type      : Sequelize.STRING(35),
			allowNull : false,
			unique    : true
		},
		price    : {
			type      : Sequelize.DECIMAL(10, 2),
			allowNull : false
		},
		img      : {
			type      : Sequelize.STRING(200),
			allowNull : false
		},
		quantity : Sequelize.INTEGER(11)
	},
	{
		tableName : 'products'
	}
);
