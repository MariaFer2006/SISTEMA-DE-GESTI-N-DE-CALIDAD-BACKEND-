import  { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_HOST, process.env.DB_PORT);

export const sequelize = new Sequelize(

    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS || '',

    {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT) || 5432,
        dialect: 'postgres',
        logging: false,
    }
)


export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos' );
    } catch (error) {
        console.error('Error al conectar:', error);
    }
}