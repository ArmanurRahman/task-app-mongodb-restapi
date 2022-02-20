const mongoose = require("mongoose");

//connect to database
mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

// const Task = mongoose.model("Task", {
//     description: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
// });

// const task = new Task({
//     description: "Dinner",
// });

// task.save()
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
