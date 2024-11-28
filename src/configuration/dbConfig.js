const mongoose = require("mongoose");

mongoose.connect( "mongodb+srv://akbardwiputrapondokit:ot646zHwiXu0oZq3@backend.1bnzb.mongodb.net/?retryWrites=true&w=majority&appName=backend",
     {
        serverSelectionTimeoutMS: 5000
    }
);

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.log(`MonoDB connection error: ${err}`)
});

module.exports = mongoose;