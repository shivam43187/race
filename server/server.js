const express = require("express");
const mongoose = require("mongoose");
const app = express()
port = process.env.PORT || 8000
const racerRouter = require("./routers/racer")

const Racer = require("./models/racer");

//middleware
app.use(express.json())


//db connection
mongoose.connect("mongodb://localhost:27017/olympic", { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }).
then(() => console.log("DB Connected")).
catch((error) => console.log(error.message))


//routes
app.use(racerRouter);

//start server
app.listen(port, () => console.log(`App is running on port ${port}`));