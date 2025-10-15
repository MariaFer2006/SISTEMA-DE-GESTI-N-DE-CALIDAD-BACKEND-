import {DataTypes} from "sequelize";
import {sequelize} from "../config/db";

export const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    n_identificacion: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false
    },
    username: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    name1: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    name2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    lastname1: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    lastname2: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    password_hash: {
        type: DataTypes.STRING(512),
        allowNull: false
    },
    rol_id: {
        type: DataTypes.SMALLINT,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    create_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    update_at:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'users',
    timestamps: false
});
