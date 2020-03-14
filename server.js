const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



const PORT = process.env.PORT || 8080;
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// app.use(require("./routes/api"));
app.use(require("./routes/html"));

// app.get("/api/workouts", (req,res) => {
//    db.Workout.find({}).then(data => {
//       console.log(data);
//       res.json(data);
//     })
//     .catch(err => {
//        res.status(400).json(err)
//     });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});