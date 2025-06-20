const BucketItem = require('../models/BucketItem');

// Create
exports.addItem = async (req, res) => {
    try {
        const { title, category } = req.body;
        const newItem = new BucketItem({ title, category });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Read
exports.getAllItems = async (req, res) => {
    try {
        const items = await BucketItem.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
exports.updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await BucketItem.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete
exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        await BucketItem.findByIdAndDelete(id);
        res.json({ message: 'Item deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Mark as Completed
exports.markCompleted = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await BucketItem.findById(id);
        item.isCompleted = true;
        await item.save();
        res.json(item);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Filter by Category
exports.getByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const items = await BucketItem.find({ category });
        res.json(items);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
