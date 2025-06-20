const mongoose = require('mongoose');

const BucketItemSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    isCompleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('BucketItem', BucketItemSchema);
