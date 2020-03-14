const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req,res) => {
   db.Workout.find({})
   .then(dbWorkout => {
      for (const workout of dbWorkout) {
        workout.setTotalDuration();
      }
      res.json(dbWorkout);
    })
   .catch(err => {
      res.status(400).json(err);
   })
});

module.exports = router;