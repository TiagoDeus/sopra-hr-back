"use strict";

var utils = require('../utils');

module.exports = function (sequelize, DataTypes) {
    var Technology = sequelize.define('Technology', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'technology id'
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: 'technology description'
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: 'technology mastery level'
        },
        experience_years: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false,
            comment: 'technology experience in years'
        },
        last_used_at: {
            type: DataTypes.DATEONLY,
            comment: 'technology last use date',
            get: function () {
                return utils.getTimestamp(this, 'last_used_at');
            },
            set: function (last_used_at) {
                return utils.setDateOnly(last_used_at, this, 'last_used_at');
            }
        },
        certification: {
            type: DataTypes.STRING(100),
            comment: 'technology certification'
        },
        certification_at: {
            type: DataTypes.DATEONLY,
            comment: 'technology certification date',
            get: function () {
                return utils.getTimestamp(this, 'certification_at');
            },
            set: function (certification_at) {
                return utils.setDateOnly(certification_at, this, 'certification_at');
            }
        }
    }, {
        underscored: true,
        timestamps: true,
        tableName: 'technology',
        comment: 'worker technologic knowledge data',
        classMethods: {
            associate: function (models) {
                Technology.belongsTo(models.TypeTechnologySubCategory, {
                    as: 'subcategory',
                    comment: 'technology subcategory type id',
                    foreignKey: {
                        allowNull: false
                    }
                });
                Technology.belongsToMany(models.Experience, {
                    as: 'experiences',
                    through: 'experience_technology',
                    timestamps: false,
                    comment: 'technology used'
                });
                Technology.belongsTo(models.User, {
                    as: 'created_by',
                    comment: 'created by user',
                    foreignKey: {
                        allowNull: false
                    }
                });
                Technology.belongsTo(models.User, {
                    as: 'updated_by',
                    comment: 'updated by user',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        },
        getterMethods: {
            created_at: function () {
                return utils.getTimestamp(this, 'created_at');
            },
            updated_at: function () {
                return utils.getTimestamp(this, 'updated_at');
            }
        }
    });
    return Technology;
};