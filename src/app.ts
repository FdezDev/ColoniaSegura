import express from 'express';
import { Signale } from 'signale';
import { initializeDatabase } from './database/sequelize'; 
import { userRouter } from './user/infraestructure/userRouter';
import { groupRouter } from './group/infraestructure/groupRouter';
import { alarmRouter } from './alarma/infraestructure/alarmRouter';
import * as admin from 'firebase-admin';
import serviceAccount from './database/firebase/config.json';  // Asegúrate de que la ruta y el archivo son correctos
import { authRouter } from './auth/infraestructure/authRouter';
import cors from 'cors';  



const app = express();
const signale = new Signale();

app.use(cors({
    origin: '*'  // Permite todas las origins. Cambia esto según tus necesidades de seguridad.
}));

app.use(express.json());
app.use('/login',authRouter);
app.use('/user',userRouter);
app.use('/group',groupRouter);
app.use('/alarm',alarmRouter);

async function startServer() {
    try {
        signale.success("Firebase Admin initialized successfully");

        // Primero inicializa y conecta la base de datos
        await initializeDatabase();
        
        // Luego inicia el servidor Express
        app.listen(3000, () => {
            signale.success("Server online in port 3000");
        });
    } catch (error) {
        signale.error("Error al iniciar el servidor:", error);
        process.exit(1);
    }
}

// Inicia todo
startServer();
