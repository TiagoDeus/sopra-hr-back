"use strict";

var utils = require('../utils');

module.exports = function (sequelize, DataTypes) {
    var Worker = sequelize.define('Worker', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                comment: 'worker id'
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                comment: 'worker name'
            },
            surname: {
                type: DataTypes.STRING(150),
                allowNull: false,
                comment: 'worker surname'
            },
            birthday_at: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                comment: 'worker birthday',
                get: function () {
                    return utils.getTimestamp(this, 'birthday_at');
                },
                set: function (birthday_at) {
                    return utils.setDateOnly(birthday_at, this, 'birthday_at');
                }
            },
            email: {
                type: DataTypes.STRING(150),
                allowNull: false,
                isEmail: true,
                comment: 'worker email'
            },
            document_number: {
                type: DataTypes.STRING(20),
                allowNull: false,
                comment: 'worker identification document number'
            },
            startup_at: {
                type: DataTypes.DATEONLY,
                comment: 'worker startup date in the company',
                get: function () {
                    return utils.getTimestamp(this, 'startup_at');
                },
                set: function (startup_at) {
                    return utils.setDateOnly(startup_at, this, 'startup_at');
                }
            },
            salary: {
                type: DataTypes.DECIMAL(10, 2),
                comment: 'worker current gross salary by year'
            }
        }, {
            underscored: true,
            timestamps: true,
            tableName: 'worker',
            comment: 'worker data main table',
            paranoid: true,
            classMethods: {
                associate: function (models) {
                    Worker.belongsTo(models.TypeDocument, {
                        as: 'document_type',
                        comment: 'worker identification document type',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.belongsTo(models.User, {
                        as: 'user',
                        comment: 'worker is user'
                    });
                    Worker.hasMany(models.Career, {
                        comment: 'worker identification',
                        as: 'careers',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.hasMany(models.LanguageLevel, {
                        comment: 'worker identification',
                        as: 'language_levels',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.hasMany(models.WorkerAvailability, {
                        comment: 'worker identification',
                        as: 'worker_availabilities',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.hasMany(models.Study, {
                        comment: 'worker identification',
                        as: 'studies',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.hasMany(models.Technology, {
                        comment: 'worker identification',
                        as: 'technologies',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.hasMany(models.FunctionalArea, {
                        comment: 'worker identification',
                        as: 'functional_areas',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.belongsTo(models.User, {
                        as: 'created_by',
                        comment: 'created by user',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.belongsTo(models.User, {
                        as: 'updated_by',
                        comment: 'updated by user',
                        foreignKey: {
                            allowNull: false
                        }
                    });
                    Worker.belongsTo(models.User, {
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
        }
        )
        ;
    return Worker;
}
;