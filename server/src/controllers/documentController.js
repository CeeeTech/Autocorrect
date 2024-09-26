const Document = require('../models/documentModel');

async function saveDocument(req, res) {
    try {
        const { user_id, document_name, file_type, upload_date, correction_id } = req.body;
        const document = new Document({ user_id, document_name, file_type, upload_date, correction_id });
        await document.save();
        res.status(201).json({ message: 'Document saved', document });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

async function getDocuments(req, res) {
    try {
        const documents = await Document.find();
        res.json({ documents });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    saveDocument,
    getDocuments
};
