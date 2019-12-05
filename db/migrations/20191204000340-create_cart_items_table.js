'use strict';

module.exports = {
	up   : (queryInterface, Sequelize) => {
		return queryInterface.createTable('cartItems', {
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
				allowNull : false,
				type      : Sequelize.INTEGER(11),
				unique    : true
			},
			createdAt : Sequelize.DATE,
			updatedAt : Sequelize.DATE
		});
	},

	down : (queryInterface, Sequelize) => {
		return queryInterface.dropTable('cartItems');
	}
};
