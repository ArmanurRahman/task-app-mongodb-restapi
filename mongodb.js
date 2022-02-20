const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log(error);
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //     {
    //         name: "Mubeen",
    //         age: 28,
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log("Unable to insert user");
    //         }
    //         console.log(result.insertedId);
    //     }
    // );

    // db.collection("users").insertMany(
    //     [
    //         {
    //             name: "Arman",
    //             age: 27,
    //         },
    //         {
    //             name: "Maliha",
    //             age: 18,
    //         },
    //     ],
    //     (error, results) => {
    //         if (error) {
    //             return console.log("Unable to insert");
    //         }

    //         console.log(results.insertedIds);
    //     }
    // );

    // db.collection("tasks").insertMany(
    //     [
    //         {
    //             name: "Sleep",
    //             completed: true,
    //         },
    //         {
    //             name: "Study",
    //             completed: false,
    //         },
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log("Unable to insert");
    //         }

    //         console.log(result.insertedIds);
    //     }
    // );

    // db.collection("users").findOne({ name: "Maliha" }, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch");
    //     }

    //     console.log(user);
    // });

    // db.collection("users")
    //     .find({ name: "Mubeen" })
    //     .toArray((error, users) => {
    //         if (error) {
    //             return console.log("Unable to fetch");
    //         }

    //         console.log(users);
    //     });

    // db.collection("users")
    //     .updateOne(
    //         { _id: new ObjectId("6211fdd17249a01a6b6ecadc") },
    //         {
    //             $set: {
    //                 name: "MUBEEN",
    //             },
    //         }
    //     )
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    // db.collection("users")
    //     .updateMany({ age: 27 }, { $inc: { age: 1 } })
    //     .then((result) => {
    //         console.log(result);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });

    db.collection("users")
        .deleteMany({ name: "Mubeen" })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });
});
