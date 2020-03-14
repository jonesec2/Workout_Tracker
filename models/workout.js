const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
   day: {
      type: Date, default: Date.now
   },
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

WorkoutSchema.methods.getDuration = function () {
   let total = 0;
   for (var i = 0; i < this.exercises.length; i++) {
      total += this.exercises[i].duration;
   }
   this.totalDuration = total;
   console.log("js" + this.totalDuration);
   return this.totalDuration;
};

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;