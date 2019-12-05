const Product = require('../db/src/models/Product');
const CartItem = require('../db/src/models/CartItem');

module.exports = {
	createProduct  : async (root, { input }) => {
		const product = await Product.create(input).catch((err) => {
			console.log('error', err);
		});
		return product;
	},
	createCartItem : async (root, { input }) => {
		const productId = await !Product.findAll({
			where : {
				id : input.id
			}
		});
		if (!productId) {
			throw new Error("Product doesn't exist ");
		} else {
			const cartItem = await CartItem.create({ ...input }).catch((err) => {
				console.log('error', err);
			});
			return cartItem;
		}
	}
};
