const mongoose = require('mongoose');

const uri = "mongodb+srv://Exclusive:Manjit%40970@exclusive.e7oj7.mongodb.net/?retryWrites=true&w=majority&appName=Exclusive";

async function connectToDatabase() {
    try {
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 30000 
        });
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Failed to connect to MongoDB:", err);
    }
}

connectToDatabase();

module.exports = connectToDatabase;
