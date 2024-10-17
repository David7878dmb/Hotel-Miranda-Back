import app from "./app";
import { connectToDB } from "./utils/connectionAtlas";

const PORT = process.env.PORT || 3002;

const startServer = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();