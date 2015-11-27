"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeDegree = sequelize.define('TypeDegree', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true,
			comment:'degree type id'
		},
		description: {
			type:DataTypes.STRING(50), 
			allowNull:false,
			comment:'degree type description'
		}
	},{
		timestamps: false,
		underscored: true,
		tableName: 'tp_degree',
		comment: 'degree types'
	});
	return TypeDegree;
};