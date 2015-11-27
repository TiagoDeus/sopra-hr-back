"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeClient = sequelize.define('TypeClient', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true, 
			comment:'client type id'
		},
		description: {
			type:DataTypes.STRING(50), 
			allowNull:false, 
			comment:'client type description'
		}
	},{
		timestamps: false,
		underscored: true,
		tableName: 'tp_client',
		comment: 'client types'
	});
	return TypeClient;
};