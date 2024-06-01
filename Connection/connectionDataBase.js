import { Sequelize } from "sequelize";

const connectionDatabase = new Sequelize("tp2final", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port:"3306"
    
  });

  try {
    await connectionDatabase.authenticate();
    console.log('Conexión realizada con éxito a la base de datos.');
  } catch (error) {
    console.error('Error al intentar conectarse con la base de datos:', error);
  }
  export default connectionDatabase;




