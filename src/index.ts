import mongoose from "mongoose";
const PORT = 5368;
import app from "./app";
import { run } from "./mongo/contactMongo";

mongoose.connect('mongodb://localhost:27017/Hotel').then(() => {
    app.listen(PORT, () => {
        console.log(`Server running in port ${PORT}`)
        run();
    }
    )
});