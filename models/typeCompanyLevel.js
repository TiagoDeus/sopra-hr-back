"use strict";

module.exports = function (sequelize, DataTypes) {
    var TypeCompanyLevel = sequelize.define('TypeCompanyLevel', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'company level type id'
        },
        description: {
            type: DataTypes.STRING(50),
            allowNull: false,
            comment: 'company level type description'
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'tp_company_level',
        comment: 'company level types'
    });
    return TypeCompanyLevel;
};