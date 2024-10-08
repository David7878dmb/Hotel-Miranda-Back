import mongoose from "mongoose";
const PORT = 5368;
import app from "./app";


mongoose.connect('mongodb://localhost:27017/Hotel')
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
