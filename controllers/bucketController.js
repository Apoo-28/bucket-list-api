const Bucket = require('../models/BucketItem');

exports.addItem = async (req, res) => {
    try {
        const { title, category } = req.body;
        if (!title || !category) return res.status(400).json({ error: 'Title and Category are required' });

        const newItem = new Bucket({ title, category });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ error: 'Failed to add item' });
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await Bucket.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Bucket.findByIdAndDelete(id);
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.status(200).json({ message: 'Bucket item deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

exports.markCompleted = async (req, res) => {
    try {
        const { id } = req.params;
        const item = await Bucket.findByIdAndUpdate(id, { isCompleted: true }, { new: true });
        if (!item) return res.status(404).json({ error: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: 'Failed to mark as complete' });
    }
};

exports.getByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        const items = await Bucket.find({ category });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch by category' });
    }
};
