const Product = require('../db/src/models/Product');

module.exports = {
	createProduct  : async (root, { input }) => {
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
	},
	changeQuantity : async (root, { productId, quantity }) => {
		const product = await Product.findAll({
			where : {
				id : productId
			}
		});
		const result = product[0];
		if (!result) throw new Error("product id doesn't match");

		result.update({
			quantity : quantity
		});
		return result;
	}
};
