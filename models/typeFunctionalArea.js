"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeFunctionalArea = sequelize.define('TypeFunctionalArea', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true, 
			comment:'functional area type id'
		},
		description: {
			type:DataTypes.STRING(100), 
			allowNull:false, 
			comment:'functional area type description'
		}
	},{
		timestamps: false, 
		underscored: true, 
		tableName: 'tp_functional_area', 
		comment: 'functional area types'
	});
	return TypeFunctionalArea;
};