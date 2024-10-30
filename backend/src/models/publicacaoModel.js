import { DataTypes } from "sequelize";

import conn from "../config/conn.js";
import Empresa from "./empresaModel.js";


const Publicacao = conn.define("publicacao", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

Empresa.hasMany(Publicacao, {
    foreignKey: 'id_empresa'
})
Empresa.belongsTo(Empresa, {
    foreignKey: 'id_empresa'
})
export default Publicacao; 