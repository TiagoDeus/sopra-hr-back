"use strict";

module.exports = function(sequelize, DataTypes) {
	var TypeFunctionalAreaSubCategory = sequelize.define('TypeFunctionalAreaSubCategory', {
		id: {
			type:DataTypes.INTEGER,
			primaryKey:true,
			autoIncrement: true,
			comment:'functional area subcategory type id'
		},
		description: {
			type:DataTypes.STRING(100), 
			allowNull:false, 
			comment:'functional area subcategory type description'
		}
	},{
		timestamps: false, 
		underscored: true, 
		tableName: 'tp_functional_area_subcategory', 
		comment: 'functional area subcategory types',
		classMethods: {
			associate: function(models) {
				TypeFunctionalAreaSubCategory.belongsTo(models.TypeFunctionalAreaCategory, {
					as: 'category',
					comment: 'functional area category id',
					foreignKey: {
            			allowNull: false
          			}
          		});
			}
		}
	});
	return TypeFunctionalAreaSubCategory;
};