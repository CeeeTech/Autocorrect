const GradeLevel = require('../models/gradeLevelModel');

async function createGradeLevel(req, res) {
    try {
        const { grade_level_name } = req.body;
        const gradeLevel = new GradeLevel({ grade_level_name });
        await gradeLevel.save();
        res.status(201).json({ message: 'Grade Level created', gradeLevel });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getGradeLevels(req, res) {
    try {
        const gradeLevels = await GradeLevel.find();
        res.json({ gradeLevels });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createGradeLevel,
    getGradeLevels
};
