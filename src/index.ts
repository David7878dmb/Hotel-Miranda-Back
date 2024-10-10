import mongoose from "mongoose";
const PORT = 5368;
import app from "./app";
import { connect } from "http2";
import { connectToDB } from "./utils/connectionAtlas";



  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectToDB();
  });