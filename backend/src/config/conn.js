import {Sequelize} from "sequelize"

const conn = new Sequelize('prep_ade3f', 'root', 'Sen@aiDev77!.',{
    host: 'localhost', 
    dialect: 'mysql'
})

export default conn; 