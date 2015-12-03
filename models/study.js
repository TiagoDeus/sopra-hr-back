"use strict";

var utils      = require('../utils');

module.exports = function(sequelize, DataTypes) {
    var Study = sequelize.define('Study', {
        id: {
            type:DataTypes.INTEGER, 
            primaryKey:true,
            comment: 'study id'
        },
        course: {
            type:DataTypes.STRING(200), 
            comment: 'course name'
        },
        institution: {
            type:DataTypes.STRING(200), 
            comment: 'education institution'
        },
        grade: {
            type:DataTypes.DECIMAL(2,1), 
            comment: 'final grade'
        },
        starting_at: {
            type:DataTypes.DATEONLY, 
            allowNull:false,
            comment: 'course iniciation date',
            get: function() {return utils.getTimestamp(this,'starting_at');}
        },
        ending_at: {
            type:DataTypes.DATEONLY, 
            allowNull:false,
            comment: 'course ending date',
            get: function() {return utils.getTimestamp(this,'ending_at');}
        },
        country: {
            type:DataTypes.STRING(50), 
            comment: 'country where the degree was taken'
        },
        observation: {
            type:DataTypes.TEXT, 
            comment: 'course observations'
        }
    },{
        underscored: true,
        timestamps: false,
        tableName: 'study',
        comment: 'worker studies',
        classMethods: {
            associate: function(models) {
                Study.belongsTo(models.TypeDegree, {
                    as: 'degree',
                    comment: 'degree id',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Study;
};