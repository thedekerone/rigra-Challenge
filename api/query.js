const Product = require('../db/src/models/Product');
const CartItem = require('../db/src/models/CartItem');

module.exports = {
	getProducts  : async () => {
		const products = await Product.findAll().catch((err) => {
			console.log('error', err);
		});

		const results = products.map((data) => {
			const { title, price, img, id } = data.dataValues;
			return { title, price, img, id };
		});
		return results;
	},
	getCartItems : async () => {
		const cartItems = await CartItem.findAll().catch((err) => {
			console.log('error', err);
		});
		const results = cartItems.map((data) => {
			const { id, productId, quantity } = data.dataValues;
			return { id, productId, quantity };
		});
		return results;
	}
};
