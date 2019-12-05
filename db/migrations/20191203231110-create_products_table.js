'use strict';

module.exports = {
	up   : (queryInterface, Sequelize) => {
		return queryInterface.createTable('products', {
			id        : {
				type          : Sequelize.INTEGER(11),
				allowNull     : false,
				autoIncrement : true,
				primaryKey    : true
			},
			title     : {
				type      : Sequelize.STRING(35),
				allowNull : false,
				unique    : true
			},
			price     : {
				type      : Sequelize.DECIMAL(10, 2),
				allowNull : false
			},
			img       : {
				type      : Sequelize.STRING(),
				allowNull : false
			},
			createdAt : Sequelize.DATE,
			updatedAt : Sequelize.DATE
		});
	},

	down : (queryInterface, Sequelize) => {
		return queryInterface.dropTable('products');
	}
};
