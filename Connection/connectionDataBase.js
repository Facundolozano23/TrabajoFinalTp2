import { Sequelize } from "sequelize";

const connectionDatabase = new Sequelize("", "", "", {
    host: "DESKTOP-0C34D10\SQLEXPRESS",
    dialect: "mssql",
    
  });

  try {
    await connectionDatabase.authenticate();
    console.log('Conección realizada con éxito a la base de datos.');
  } catch (error) {
    console.error('Error al intentar conectarse con la base de datos:', error);
  }
  export default connectionDatabase;




