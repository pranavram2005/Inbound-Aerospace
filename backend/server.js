const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const bodyParser = require("body-parser");
const personRoute = require("./routes/personRoute");
const careerRoute = require("./routes/careerRoute");

app.use(cors({origin: "https://ccx34t.csb.app",allowedHeaders: ["Content-Type", "Authorization", "Accept", "Origin", "X-Requested-With"],}));
app.UseCors((g)=>g.AllowAnyOrigin());
app.use(bodyParser.json());
app.use("/api/v1", personRoute);
app.use("/api/v1", careerRoute);

connectDB();

app.get("/api/v1/form",(req,res)=>{
  console.log(res)
})

app.listen(3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
