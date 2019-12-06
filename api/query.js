const Product = require('../db/src/models/Product');

module.exports = {
	getProducts       : async () => {
		const products = await Product.findAll().catch((err) => {
			console.log('error', err);
		});

		const results = products
			.map((data) => {
				const { title, price, img, id, quantity } = data.dataValues;
				return { title, price, img, id, quantity };
			})
			.filter((e) => e.quantity === 0);
		return results;
	},
	getProductsInCart : async () => {
		const products = await Product.findAll().catch((err) => {
			console.log('error', err);
		});
		const results = products
			.map((data) => {
				const { title, price, img, id, quantity } = data.dataValues;
				return { title, price, img, id, quantity };
			})
			.filter((e) => e.quantity !== 0);

		return results;
	}
};
