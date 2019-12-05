const Sequelize = require('sequelize');

const sequelize = new Sequelize('yakdd3tuwv5qtzcp', 'b1sl6wn4sic4fgg3', 'vdsrbirnmws4v3v2', {
	host    : 'ixqxr3ajmyapuwmi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	dialect : 'mysql'
});

module.exports = sequelize;
