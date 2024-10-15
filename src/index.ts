import mongoose from "mongoose";
const PORT = 3001;
import app from "./app";
import { connect } from "http2";
import { connectToDB } from "./utils/connectionAtlas";



  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToDB();
  });