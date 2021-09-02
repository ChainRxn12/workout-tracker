const db = require("../models");

module.exports = function(app) {
    // get last workout
    app.get("/api/workouts", (req, res) => {
        db.Workouts.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    // creates a new workout
    app.post("/api/workouts", async (req, res) => {
        try {
            const response = await db.Workout.create({ type: "workout" })
            res.json(res);
        }
        catch(err) {
            console.log("error occured creating a workout: ", err)
        }
    })

    //  add an exericse to workout
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        const workoutId = params.id;
        let savedExercises = [];

        // find all exercises
        db.Workout.find({ _id: workoutId })
        .then(dbWorkout => {
            // console.log(dbWorkout)
            savedExercises = dbWorkout[0].exercies;
            res.json(dbWorkout[0].exercises);
            let allExercises = [...savedExercises, body]
            console.log(allExercises)
            updatedWorkout(allExercises)
        })
        .catch(err => {
            res.json(err);
        });

        function updatedWorkout(exercises) {
            db.Workout.findByIdAndUpdate(workoutId, {exercises: exercises}, function(err, doc) {
                if(err){
                    console.log(err)
                }
            })
        }
    })

    // view stats
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};