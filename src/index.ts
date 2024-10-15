import app from "./app";
import { connectToDB } from "./utils/connectionAtlas";
const PORT = 3001;



  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToDB();
  });