"use strict";

var utils = require('../utils');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'user id'
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            comment: 'username'
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
            comment: 'user surname',
            get: function () {
                return null;
            }
        }
    }, {
        underscored: true,
        timestamps: true,
        tableName: 'user',
        comment: 'user data',
        paranoid: true,
        classMethods: {
            associate: function (models) {
                User.belongsTo(models.UserRole, {
                    as: 'role',
                    comment: 'user role type',
                    foreignKey: {
                        allowNull: false
                    }
                });
                User.hasOne(models.Worker, {
                    as: 'user',
                    comment: 'worker is user'
                });
                User.belongsTo(models.User, {
                    as: 'created_by',
                    comment: 'created by user',
                    foreignKey: {
                        allowNull: false
                    }
                });
                User.belongsTo(models.User, {
                    as: 'updated_by',
                    comment: 'updated by user',
                    foreignKey: {
                        allowNull: false
                    }
                });
                User.belongsTo(models.User, {
                    as: 'deleted_by',
                    comment: 'deleted by user',
                    foreignKey: {
                        allowNull: true
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
            },
            deleted_at: function () {
                return utils.getTimestamp(this, 'deleted_at');
            }
        }
    });
    return User;
};