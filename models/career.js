"use strict";

module.exports = function(sequelize, DataTypes) {
	var Career = sequelize.define('Career', {
		id: {
			type:DataTypes.INTEGER, 
			primaryKey:true,
			comment: 'career id'
		},
		starting_date: {
			type:DataTypes.DATEONLY, 
			allowNull:false,
			comment: 'career starting date',
			get: function() {
				var date = new Date(this.getDataValue('starting_date')); 
				return date.getTime();
			}
		},
		observation: {
			type:DataTypes.TEXT, 
			comment: 'career observations'
		}
	},{
		underscored: true,
		timestamps: false,
		tableName: 'career',
		comment: 'worker career data',
		classMethods: {
			associate: function(models) {
				Career.belongsTo(models.TypeCompanyLevel, {
					as: 'company_level',
					comment: 'worker company level',
					foreignKey: {
            			allowNull: true
          			}
          		});
				Career.belongsTo(models.TypeCareerBranch, {
					as: 'career_branch',
					comment: 'worker career branch',
					foreignKey: {
            			allowNull: true
          			}
				});
			}
		}
	});
	return Career;
};