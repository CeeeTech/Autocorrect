const Invoice = require('../models/invoiceModel');

async function createInvoice(req, res) {
    try {
        const { subscription_id, amount, due_date } = req.body;
        const invoice = new Invoice({ subscription_id, amount, due_date });
        await invoice.save();
        res.status(201).json({ message: 'Invoice created', invoice });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    createInvoice
};
