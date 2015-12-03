"use strict";

var utils      = require('../utils');

module.exports = function(sequelize, DataTypes) {
    var Career = sequelize.define('Career', {
        id: {
            type:DataTypes.INTEGER, 
            primaryKey:true,
            comment: 'career id'
        },
        starting_at: {
            type:DataTypes.DATEONLY, 
            allowNull:false,
            comment: 'career starting date',
            get: function() {return utils.getTimestamp(this,'starting_at');}
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
                        allowNull: false
                    }
                });
                Career.belongsTo(models.TypeCareerBranch, {
                    as: 'career_branch',
                    comment: 'worker career branch',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Career;
};