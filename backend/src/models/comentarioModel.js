import conn from "../config/conn.js"
import Usuario from "./usuarioModel.js"
import Publicacao from "./publicacaoModel.js"
import { DataTypes } from "sequelize";



const Comentario =  conn.define("comentarios", {
id:{
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true
},
comentario:{
    type: DataTypes.STRING, 
    allowNull: false, 
    validate:{
        min: 3
    }
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
Comentario.belongsTo(Usuario, {foreignKey: "usuario_id"})
Comentario.belongsTo(Publicacao,{foreignKey:"publicacao_id"})

export default Comentario; 