import { fakeContact } from "./data/fake/fakeContact";
import mongoose, { Model } from "mongoose";
import { contactModel } from "./mongo/contactMongo";




const uri = "mongodb://127.0.0.1:27017/Hotel";

const clearCollections = async() => {
    await contactModel.deleteMany({});
}

const saveFakeData = async () => {
    for (let i = 0; i < 10; i++) {
        const item = new contactModel(fakeContact());
        await item.save();
    }}

export async function seedDB(){
    await dbConnection();
    await clearCollections();
    await saveFakeData();
    mongoose.connection.close();
}

async function dbConnection() {
    try {
        await mongoose.connect(uri);
        console.log("Connected correctly to server");
    } catch (err: any) {
        console.log(err.stack);
        await mongoose.disconnect();
    }
}

seedDB();