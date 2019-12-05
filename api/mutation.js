const Product = require('../db/src/models/Product');

module.exports = {
	createProduct : async (root, { input }) => {
		const defaultValues = {
			quantity : 0
		};

		const product = await Product.create(input).catch((err) => {
			console.log('error', err);
		});
		const results = product.dataValues;
		const newProduct = Object.assign(defaultValues, results);
		console.log(newProduct);
		return newProduct;
	}
};
