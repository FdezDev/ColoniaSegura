import * as admin from 'firebase-admin';
import serviceAccount from './config.json'; // Asegúrate de que la ruta es correcta

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://multi-debce-default-rtdb.firebaseio.com'
});

const db = admin.database();

export { db }; // Exporta db para uso en otros módulos


