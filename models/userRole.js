"use strict";

module.exports = function (sequelize, DataTypes) {
    var UserRole = sequelize.define('UserRole', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'role type id'
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: false,
            comment: 'role type description'
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'user_role',
        comment: 'user role types'
    });
    return UserRole;
};