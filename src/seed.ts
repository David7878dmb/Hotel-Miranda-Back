import { fakeContact } from "./data/fake/fakeContact";
import mongoose, { Model } from "mongoose";
import { contactModel } from "./mongo/contactMongo";
import { roomModel } from "./mongo/roomsMongo";
import { fakeRooms } from "./data/fake/fakeRooms";
import { userModel } from "./mongo/userMongo";
import { fakeUsers } from "./data/fake/fakeUsers";
import { BookingModel } from "./mongo/bookingMongo";
import { fakeBooking } from "./data/fake/fakeBookings";




const uri = "mongodb://127.0.0.1:27017/Hotel";


const saveFakeData = async () => {
    for (let i = 0; i < 10; i++) {
        const item = new contactModel(fakeContact());
        const item2 = new roomModel(fakeRooms());
        const item3 = new userModel(fakeUsers());
        //const item4 = new BookingModel(fakeBooking());
        await item.save();
        await item2.save();
        await item3.save();
        //await item4.save();
    }}

export async function seedDB(){
    await dbConnection();
    //await clearCollections();
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