"use strict";

var utils      = require('../utils');

module.exports = function(sequelize, DataTypes) {
    var WorkerAvailability = sequelize.define('WorkerAvailability', {
        id: {
            type:DataTypes.INTEGER, 
            primaryKey:true,
            comment: 'worker availability id'
        },
        starting_at: {
            type:DataTypes.DATEONLY, 
            allowNull:false,
            comment: 'worker availability starting date',
            get: function() {return utils.getTimestamp(this,'starting_at');}
        },
        ending_at: {
            type:DataTypes.DATEONLY,
            comment: 'worker availability ending date',
            get: function() {return utils.getTimestamp(this,'ending_at');}
        },
        motive: {
            type:DataTypes.TEXT, 
            comment: 'availability motive'
        },
        visible_agency: {
            type:DataTypes.BOOLEAN, 
            comment: 'visible in the agency'
        },
        visible_department: {
            type:DataTypes.BOOLEAN, 
            comment: 'visible in the department'
        },
        visible_company: {
            type:DataTypes.BOOLEAN, 
            comment: 'visible in the company'
        }
    },{
        underscored: true,
        timestamps: false,
        tableName: 'worker_availability',
        comment: 'worker availability'
    });
    return WorkerAvailability;
};