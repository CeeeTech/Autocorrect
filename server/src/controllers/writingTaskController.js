const WritingTask = require('../models/writingTaskModel');

async function createWritingTask(req, res) {
    try {
        const { correction_id, writing_type_id, grade_level_id } = req.body;
        const writing_task = new WritingTask({ correction_id, writing_type_id, grade_level_id });
        await writing_task.save();
        res.status(201).json({ message: 'Writing Task created', writing_task });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createWritingTask
};
