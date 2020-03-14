const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
   exercises: [
      {
         type: {
            type: String,
            required: true
         },
         name: String,
         duration: Number,
         distance: Number,
         weight: Number,
         reps: Number,
         sets: Number,
      }
   ]
});

WorkoutSchema.methods.setTotalDuration = function () {
   let total = 0;
   for (let i = 0; i < this.exercises.length; i++) {
      total += this.exercises[i].duration;
   }
   this.totalDuration = total;
   return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;