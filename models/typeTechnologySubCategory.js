"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeTechnologySubCategory = sequelize.define('TypeTechnologySubCategory', {
		id: {
			type:DataTypes.INTEGER,
			primaryKey:true,
			autoIncrement: true,
			comment:'technology subcategory type id'
		},
		description: {
			type:DataTypes.STRING(100), 
			allowNull:false, 
			comment:'technology subcategory type description'
		}
	},{
		timestamps: false, 
		underscored: true, 
		tableName: 'tp_technology_subcategory', 
		comment: 'technology subcategory types',
		classMethods: {
			associate: function(models) {
				TypeTechnologySubCategory.belongsTo(models.TypeTechnologyCategory, {
					as: 'category',
					comment: 'technology category id',
					foreignKey: {
            			allowNull: false
          			}
          		});
			}
		}
	});
	return TypeTechnologySubCategory;
};