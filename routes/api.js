const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
   db.Workout.find({})
      .then(dbWorkout => {
         for (const workout of dbWorkout) {
            workout.setTotalDuration();
            console.log(workout.setTotalDuration())
         }
         res.json(dbWorkout);
      })
      .catch(err => {
         res.status(400).json(err);
      });
});

router.post("/api/workouts", (req, res) => {
   db.Workout.create(req.body)
      .then(dbWorkout => {
         res.json(dbWorkout);
      })
      .catch(err => {
         res.json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
   console.log(req.params.id);
   console.log(req.body);
   db.Workout.updateOne(
      {
         _id: req.params.id
      },
      {
         $push: { exercises: req.body }
      }
   )
      .then(dbWorkout => {
         res.json(dbWorkout);
      })
      .catch(err => {
         res.json(err);
      });
});

module.exports = router;