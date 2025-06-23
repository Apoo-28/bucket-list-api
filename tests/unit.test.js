const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') }); // 👈 correct env path

const controller = require('../controllers/bucketController');
const Bucket = require('../models/BucketItem');

jest.mock('../models/BucketItem');

describe('Bucket Controller Unit Tests', () => {
    let req, res;

    beforeEach(() => {
        req = { body: { title: 'Test', category: 'Fun' }, params: {} };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    });

    test('addItem should add a new item', async () => {
        Bucket.prototype.save = jest.fn().mockResolvedValue({ _id: '123', ...req.body, isCompleted: false });

        await controller.addItem(req, res);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining(req.body));
    });

    test('addItem should handle error properly', async () => {
        req.body = {}; // Missing title & category
        await controller.addItem(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Title and Category are required' });
    });
});
