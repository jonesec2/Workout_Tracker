const app = require("express");
const db = require("../models/workout");

app.get("/api/workouts", (req,res) => {
   db.Workout.find({})
   .then(dbWor)
})