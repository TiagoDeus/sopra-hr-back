"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeCareerBranch = sequelize.define('TypeCareerBranch', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true,
			autoIncrement: true,
			comment:'company career branch type id'
		},
		description: {
			type:DataTypes.STRING(50), 
			allowNull:false,
			comment:'company career branch type description'
		}
	},{
		timestamps: false,
		underscored: true,
		tableName: 'tp_career_branch',
		comment: 'company career branch types'
	});
	return TypeCareerBranch;
};