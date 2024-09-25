const WritingType = require('../models/writingTypeModel');

async function createWritingType(req, res) {
    try {
        const { writing_type_name, code, description } = req.body;
        const writing_type = new WritingType({ writing_type_name, code, description });
        await writing_type.save();
        res.status(201).json({ message: 'Writing Type created', writing_type });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getWritingTypes(req, res) {
    try {
        const writing_types = await WritingType.find();
        res.status(200).json(writing_types);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function updateWritingType(req, res) {
    try {
        const { writing_type_name, code, description } = req.body;
        const writing_type = await WritingType.findByIdAndUpdate(req.params.id, { writing_type_name, code, description });
        res.status(200).json({ message: 'Writing Type updated', writing_type });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function deleteWritingType(req, res) {
    try {
        await WritingType.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Writing Type deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createWritingType,
    getWritingTypes,
    updateWritingType,
    deleteWritingType
};

