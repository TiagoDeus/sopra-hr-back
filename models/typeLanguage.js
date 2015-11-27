"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeLanguage = sequelize.define('TypeLanguage', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true,
			comment:'language type id'
		},
		description: {
			type:DataTypes.STRING(50), 
			allowNull:false,
			comment:'language type description'
		}
	},{
		timestamps: false,
		underscored: true,
		tableName: 'tp_language',
		comment: 'language types'
	});
	return TypeLanguage;
};