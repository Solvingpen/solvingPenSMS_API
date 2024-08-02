import { db_host, db_port, db_name, db_user, db_password } from './config';
import { Sequelize } from 'sequelize';

  // Function to connect to the database
// export const connectToDatabase = async () => {
//   try {
//     const client = await pool.connect();
//     console.log('Connected to the database');
//     client.release();
//   } catch (err) {
//     console.error('Error connecting to the database', err);
//   }
// };

export default new Sequelize({
  dialect: "postgres",
  host: db_host,
  port: db_port,
  database: db_name,
  username: db_user,
  password: db_password
});
