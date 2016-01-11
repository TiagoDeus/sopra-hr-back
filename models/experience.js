"use strict";

var utils = require('../utils');

module.exports = function (sequelize, DataTypes) {
    var Experience = sequelize.define('Experience', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'experience id'
        },
        starting_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            comment: 'experience in client starting date',
            get: function () {
                return utils.getTimestamp(this, 'starting_at');
            },
            set: function (starting_at) {
                return utils.setDateOnly(starting_at, this, 'starting_at');
            }
        },
        ending_at: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            comment: 'experience in client ending date',
            get: function () {
                return utils.getTimestamp(this, 'ending_at');
            },
            set: function (ending_at) {
                return utils.setDateOnly(ending_at, this, 'ending_at');
            }
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'experience',
        comment: 'experience in client data',
        classMethods: {
            associate: function (models) {
                Experience.belongsToMany(models.Technology, {
                    as: 'technologies',
                    through: 'experience_technology',
                    timestamps: false,
                    comment: 'technology used'
                });
                Experience.belongsToMany(models.FunctionalArea, {
                    as: 'functional_areas',
                    through: 'experience_functional_area',
                    timestamps: false,
                    comment: 'functional areas used'
                });
                Experience.belongsTo(models.TypeClient, {
                    as: 'client',
                    comment: 'client id',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return Experience;
};