"use strict";

module.exports = function (sequelize, DataTypes) {
    var TypeFunctionalAreaCategory = sequelize.define('TypeFunctionalAreaCategory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            comment: 'functional area category type id'
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: false,
            comment: 'functional area category type description'
        }
    }, {
        timestamps: false,
        underscored: true,
        tableName: 'tp_functional_area_category',
        comment: 'functional area category types'
    });
    return TypeFunctionalAreaCategory;
};