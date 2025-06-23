const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Bucket = require('../models/BucketItem');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    // Insert dummy data to test GET
    await Bucket.create({ title: 'Integration Test Item', category: 'Test' });
});

afterAll(async () => {
    await Bucket.deleteMany({});
    await mongoose.connection.close();
});

describe('Integration Tests', () => {
    it('should add and get items', async () => {
        const res = await request(app).get('/api/bucket');
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0); // ✅ will now pass since an item was added
    });
});
