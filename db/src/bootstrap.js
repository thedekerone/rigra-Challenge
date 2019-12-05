module.exports = async () => {
	const User = require('./models/User');
	const Product = require('./models/Product');
	const CartItem = require('./models/CartItem');

	const errorHandler = (error) => {
		console.log('error: ', error);
	};
	User.hasMany(CartItem, { as: 'CartItems', foreignKey: 'userId' });
	CartItem.belongsTo(User, { as: 'User', foreignKey: 'userId' });

	// const user = await User.create({
	// 	username : 'default',
	// 	password : 'default'
	// }).catch(errorHandler);

	// const product = await Product.create({
	// 	title : 'Yogurt Laive',
	// 	price : 23.0,
	// 	img   : 'http://laive.pe/wp-content/uploads/2015/11/Yogurt-Laive-Sin-Lactosa-Fresa-1kg.png'
	// }).catch(errorHandler);

	// const cartItems = await CartItem.create({
	// 	userId    : user.id,
	// 	productId : product.id,
	// 	quantity  : 1
	// }).catch(errorHandler);

	const users = await CartItem.findAll().catch(errorHandler);
	console.log('default items', users);
};
