import { Sequelize } from "sequelize";


const dataBase = new Sequelize('appsys', 'root', '', {
  host: 'localhost',
  port: 3307,
  dialect: "mysql",
  define: {
    timestamps: true
  }
})

export default dataBase