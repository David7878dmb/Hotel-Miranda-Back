import app from "./app";
import { connectToDB } from "./utils/connectionSQL";

const PORT = process.env.PORT || 3002;

const startServer = async () => {
  try {
    // Conectar a MySQL en lugar de MongoDB
    const dbConnection = await connectToDB();
    
    // Hacer que la conexión esté disponible en toda la aplicación
    app.locals.db = dbConnection;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();