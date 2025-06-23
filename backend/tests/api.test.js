const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // 👈 correct env path

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
const Bucket = require('../models/BucketItem');

let newItemId;

beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    const newItem = await Bucket.create({ title: 'API Test', category: 'Test' });
    newItemId = newItem._id;
});

afterAll(async () => {
    await Bucket.deleteMany({});
    await mongoose.connection.close();
});

describe('API Endpoints Test', () => {
    it('should PATCH (mark as complete)', async () => {
        const res = await request(app).patch(`/api/bucket/${newItemId}/complete`);
        expect(res.statusCode).toBe(200);
        expect(res.body.isCompleted).toBeTruthy();
    });

    it('should FAIL PATCH for invalid ID', async () => {
        const res = await request(app).patch(`/api/bucket/invalidid/complete`);
        expect(res.statusCode).toBe(500);
    });

    it('should DELETE the bucket item', async () => {
        const res = await request(app).delete(`/api/bucket/${newItemId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe('Bucket item deleted');
    });
});
