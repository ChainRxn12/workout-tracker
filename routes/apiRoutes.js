const db = require("../models");

module.exports = function (app) {
  // Get all workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => res.json(err));
  });

  // Creates a new exercise in workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((newWorkout) => {
        res.json(newWorkout);
      })
      .catch((err) => res.json(err));
  });

  // Update workout
  app.put("/api/workouts/:id", ({ params, body }, res) => {
    db.Workout.findByIdAndUpdate(
      { _id: params.id },
      // mongo command to push exercise into the workout
      { $push: { exercises: body } }
    )
      //return as json
      .then((updatedWorkout) => {
        res.json(updatedWorkout);
      })
      .catch((err) => res.json(err));
  });

  // find all workouts to display in workout dashboard
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      //return as json
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => res.json(err));
  });

  // update existing workout
  app.post("/api/workouts/range", (req, res) => {
    db.Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  });
};
