"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeDocument = sequelize.define('TypeDocument', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true,
			comment:'document type id'
		},
		description: {
			type:DataTypes.STRING(20), 
			allowNull:false,
			comment:'document type description'
		}
	},{
		timestamps: false,
		underscored: true,
		tableName: 'tp_document',
		comment: 'identification document types'
	});
	return TypeDocument;
};