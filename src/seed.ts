import { fakeContact } from "./data/fake/fakeContact";
import mongoose from "mongoose";
import { contactModel } from "./mongo/contactMongo";
import { roomModel } from "./mongo/roomsMongo";
import { fakeRooms } from "./data/fake/fakeRooms";
import { userModel } from "./mongo/userMongo";
import { fakeUsers } from "./data/fake/fakeUsers";
import { BookingModel } from "./mongo/bookingMongo";
import { fakeBooking } from "./data/fake/fakeBookings";
import { connectToDB } from "./utils/connectionSQL";
import { createTableUser } from "./interfaces/userInterfaces";
import { createTableContact } from "./interfaces/contactInterfaces";
import { createTableRoom } from "./interfaces/roomInterfaces";
import { createTableBooking } from "./interfaces/bookingInterfaces";

const createTable = async () =>{
    const connection = await connectToDB();

    try {
        await connection.execute(createTableUser)
        await connection.execute(createTableContact)
        await connection.execute(createTableRoom)
        await connection.execute(createTableBooking)

        console.log('Create Table SuccessFully');
    } catch (error) {
        console.log('Error creating tables', error);
    } finally {
        connection.end();
    }
};

createTable().catch(err => console.error('error creating tables:', err));

/*
const uri = "mongodb+srv://admin4:123@cluster.nd9ic.mongodb.net/Hotel";

const saveFakeData = async () => {
    // Primero, crear habitaciones
    for (let i = 0; i < 10; i++) {
        const room = new roomModel(fakeRooms());
        await room.save();
    }
    console.log("Fake rooms created");

    // Luego, crear el resto de los datos
    for (let i = 0; i < 10; i++) {
        const contact = new contactModel(fakeContact());
        const user = new userModel(fakeUsers());
        await contact.save();
        await user.save();
    }
    console.log("Fake contacts and users created");

    // Finalmente, crear reservas
    for (let i = 0; i < 10; i++) {
        const bookingData = await fakeBooking();
        const booking = new BookingModel(bookingData);
        await booking.save();
    }
    console.log("Fake bookings created");
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

export async function seedDB(){
    await dbConnection();
    await saveFakeData();
    await mongoose.connection.close();
}

seedDB().then(() => console.log("Seeding completed")).catch(console.error);*/