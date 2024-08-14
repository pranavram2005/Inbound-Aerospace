const mongoose = require("mongoose");


const dbURI = "mongodb+srv://inboundaerospace:qRaZyC07XwSnBDiH@cluster0.6eoxs6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("MongoDB connection error: ", err);
    process.exit(1); // Exit process with failure
  }
};



/* mongoose
  .connect(
    "mongodb+srv://inboundaerospace:qRaZyC07XwSnBDiH@cluster0.6eoxs6i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("error while connecting to database", err);
  });

// get the default connection
// Mongoose maintain a default conncetion object reprsenting the MongoDB connection
const db = mongoose.connection;
// define the event lisners for databases
db.on("connected", () => {
  console.log("connected to mongoDB server");
});

db.on("error", (err) => {
  console.error("mongoDB server connection error:", err);
});

db.on("disconnected", () => {
  console.log("mongoDB server disconnected");
}); */

// Export the database connection
module.exports = db;
