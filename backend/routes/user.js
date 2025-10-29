const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// CRUD
router.get('/', userController.getUsers);
router.post('/', userController.addUser);
router.put('/:id', userController.updateUser);   // Cập nhật
router.delete('/:id', userController.deleteUser); // Xóa

module.exports = router;
