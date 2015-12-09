"use strict";

var utils = require('../utils');

module.exports = function (sequelize, DataTypes) {
    var LanguageLevel = sequelize.define('LanguageLevel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'language level id'
        },
        spoken_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'language spoken level'
        },
        written_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'language written level'
        },
        understanding_level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'language understanding level'
        },
        certification: {
            type: DataTypes.STRING(100),
            comment: 'language certification'
        },
        certification_at: {
            type: DataTypes.DATEONLY,
            comment: 'language certification date',
            get: function () {
                return utils.getTimestamp(this, 'certification_at');
            },
            set: function (certification_at) {
                return utils.setDateOnly(certification_at, this, 'certification_at');
            }
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: 'language_level',
        comment: 'worker language level',
        classMethods: {
            associate: function (models) {
                LanguageLevel.belongsTo(models.TypeLanguage, {
                    as: 'language',
                    comment: 'language id',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });
    return LanguageLevel;
};