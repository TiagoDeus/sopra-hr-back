"use strict";

module.exports = function(sequelize, DataTypes) {
    var Worker = sequelize.define('Worker', {
        id: {
            type:DataTypes.INTEGER, 
            primaryKey:true,
            comment: 'worker id'
        },
        name: {
            type:DataTypes.STRING(100), 
            allowNull:false,
            comment: 'worker name'
        },
        surname: {
            type:DataTypes.STRING(150), 
            allowNull:false,
            comment: 'worker surname'
        },
        birthday: {
            type:DataTypes.DATEONLY, 
            allowNull:false,
            comment: 'worker birthday',
            get: function() {
                var date = new Date(this.getDataValue('birthday')); 
                return date.getTime();
            }
        },
        email: {
            type:DataTypes.STRING(150), 
            allowNull:false,
            isEmail: true,
            comment: 'worker email'
        },
        document_number: {
            type:DataTypes.STRING(20), 
            allowNull:false,
            comment: 'worker identification document number'
        },
        startup_date: {
            type:DataTypes.DATEONLY,
            comment: 'worker startup date in the company',
            get: function() {
                var date = new Date(this.getDataValue('startup_date')); 
                return date.getTime();
            }
        },
        salary: {
            type:DataTypes.DECIMAL(10,2),
            comment: 'worker current gross salary by year'
        }
    },{
        underscored: true,
        timestamps: true,
        tableName: 'worker',
        comment: 'worker data main table',
        paranoid: true,
        classMethods: {
            associate: function(models) {
                Worker.belongsTo(models.TypeDocument, {
                    as: 'document_type',
                    comment: 'worker identification document type',
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        },
        getterMethods: {
            created_at: function()  { 
                var date = new Date(this.getDataValue('created_at')); 
                return date.getTime();
            },
            updated_at: function()  { 
                var date = new Date(this.getDataValue('created_at')); 
                return date.getTime(); 
            },
            deleted_at: function()  { 
                if (this.getDataValue('deleted_at')) {
                    var date = new Date(this.getDataValue('deleted_at')); 
                    return date.getTime(); 
                } else {
                    return null;
                }
            }
        }
    });
    return Worker;
};