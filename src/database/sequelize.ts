import { Sequelize } from 'sequelize-typescript';
import UserModel from '../user/infraestructure/models/userModel';
import GroupModel from '../group/infraestructure/models/groupModel';
import AlarmModel from '../alarma/infraestructure/models/alarmModel';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'viaduct.proxy.rlwy.net',
    port: 13272,
    database: 'railway',
    username: 'postgres',
    password: 'qLdudzzqAkMezALMURqbAvUIrxBTtTGC',
    models: [UserModel, GroupModel, AlarmModel],
});

export async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Conexión establecida correctamente.');
        await sequelize.sync({ force: false });
    } catch (err) {
        console.error('No se pudo conectar a la base de datos:', err);
        process.exit(1);  // Cierra la aplicación si hay un error de conexión
    }
}

