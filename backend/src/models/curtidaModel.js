import { DataTypes } from "sequelize";
import Publicacao from "./publicacaoModel";
import Usuario from "./usuarioModel";
import conn from "../config/conn.js";

const Curtida = conn.define("curtidas", {
    tipo_avaliacao:{
        type: DataTypes.ENUM(["up", "down"])
    }, 
    usuario_id:{
        type: DataTypes.INTEGER, 
        references:{
         model: Usuario, 
         key: "id "
        }, 
        onDelete: "CASCADE"

    },
     publicacao_id:{
        type: DataTypes.INTEGER, 
        references:{
            model: Usuario, 
            key: "id "
        }, 
        onDelete: "CASCADE"
    }

})
 Usuario.belongsTo(Publicacao, {
    through: Curtida, 

 })
 Publicacao.belongsToMany(Usuario, {
    through: Curtida, 
    foreignKey: "publicacao_id", 
    otherKey:"usuario_id"
 })

export default Curtida; 