const express = require("express");

const Task = require("../models/task");

const router = express.Router();

router.post("/tasks", async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/tasks", async (req, res) => {
    try {
        const task = await Task.find({});
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id;
    const task = await Task.findById(_id);
    try {
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
});

router.patch("/tasks/:id", async (req, res) => {
    const updates = Object.keys(req.body);

    const allowUpdates = ["description", "completed"];
    const isValidOperation = updates.every((item) =>
        allowUpdates.includes(item)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid Object" });
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
