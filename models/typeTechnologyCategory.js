"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeTechnologyCategory = sequelize.define('TypeTechnologyCategory', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true, 
			autoIncrement: true,
			comment:'technology category type id'
		},
		description: {
			type:DataTypes.STRING(100), 
			allowNull:false, 
			comment:'technology category type description'
		}
	},{
		timestamps: false, 
		underscored: true, 
		tableName: 'tp_technology_category', 
		comment: 'technology category types'
	});
	return TypeTechnologyCategory;
};