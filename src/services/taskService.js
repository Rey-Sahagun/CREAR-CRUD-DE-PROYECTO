const Task = require('../models/taskModel');

module.exports = {
    getAllTasks: async () => {
        return await Task.find();
    },
    createTask: async (title) => {
        const task = new Task({title});
        return await task.save();
    },

    updateTask: async (_id, completed) => {
        return await Task.findByIdAndUpdate(_id, {completed});
    },

    deleteTask: async (_id) => {
        return await Task.findByIdAndDelete(_id);
    }
}