
import mongoose from "mongoose";
const PORT = 5368;

const username = "admin4";
const password = "123";
const dbName = "Hotel";

const connectionString = `mongodb+srv://${username}:${password}@cluster.nd9ic.mongodb.net/
`

export const connectToDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log("Database connected");
    } catch (err) {
        console.error("Database connection error:", err);
        throw err;
    }
};