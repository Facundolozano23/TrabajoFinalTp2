import { Sequelize } from "sequelize";

const connectionDatabase = new Sequelize("", "root", "", {
    host: "localhost",
    dialect: "sqlserver",
    
  });

  try {
    await connectionDatabase.authenticate();
    console.log('Conección realizada con éxito a la base de datos.');
  } catch (error) {
    console.error('Error al intentar conectarse con la base de datos:', error);
  }
  export default connectionDatabase;




