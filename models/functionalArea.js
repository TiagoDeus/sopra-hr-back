"use strict";

var utils      = require('../utils');

module.exports = function(sequelize, DataTypes) {
    var FunctionalArea = sequelize.define('FunctionalArea', {
        id: {
            type:DataTypes.INTEGER, 
            primaryKey:true,
            comment: 'functional area id'
        },
        description: {
            type:DataTypes.STRING(100), 
            allowNull:false,
            comment: 'functional area description'
        },
        level: {
            type:DataTypes.INTEGER, 
            allowNull:false,
            comment: 'functional area mastery level'
        },
        experience_years: {
            type:DataTypes.DECIMAL(2,1), 
            allowNull:false,
            comment: 'functional area experience in years'
        },
        last_used_at: {
            type:DataTypes.DATEONLY, 
            comment: 'functional area last use date',
            get: function() {return utils.getTimestamp(this,'last_used_at');}
        },
        certification: {
            type:DataTypes.STRING(100), 
            comment: 'functional area certification'
        },
        certification_at: {
            type:DataTypes.DATEONLY, 
            comment: 'functional area certification date',
            get: function() {return utils.getTimestamp(this,'certification_at');}
        }
    },{
        underscored: true,
        timestamps: true,
        tableName: 'functional_area',
        comment: 'worker functional knowledge data',
        classMethods: {
            associate: function(models) {
                FunctionalArea.belongsTo(models.TypeFunctionalAreaSubCategory, {
                    as: 'subcategory',
                    comment: 'functional area subcategory type id',
                    foreignKey: {
                        allowNull: false
                    }
                });
                FunctionalArea.belongsToMany(models.Experience, {
                    as: 'experiences',
                    through: 'experience_functional_area',
                    timestamps: false,
                    comment: 'functional areas used'
                });
                FunctionalArea.belongsTo(models.User, {
                    as: 'created_by',
                    comment: 'created by user',
                    foreignKey: {
                        allowNull: false
                    }
                });
                FunctionalArea.belongsTo(models.User, {
                    as: 'updated_by',
                    comment: 'updated by user',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        },
        getterMethods: {
            created_at: function() {return utils.getTimestamp(this,'created_at');},
            updated_at: function() {return utils.getTimestamp(this,'updated_at');}
        }
    });
    return FunctionalArea;
};