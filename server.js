const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models/workout");
// const seed = require("../seeders/seed.js");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

// app.use(require("./routes/api"));

app.get("/api/workouts", (req,res) => {
   db.Workout.find({}).then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => {
       res.status(400).json(err)
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});