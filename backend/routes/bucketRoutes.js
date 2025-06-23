const express = require('express');
const router = express.Router();
const controller = require('../controllers/bucketController');

router.post('/', controller.addItem);
router.get('/', controller.getAllItems);
router.delete('/:id', controller.deleteItem);
router.patch('/:id/complete', controller.markCompleted);
router.get('/category/:category', controller.getByCategory);

module.exports = router;
