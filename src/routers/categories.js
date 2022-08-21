const categories = require('express').Router();
const categoriesController = require('../controllers/categories');
const uploudMiddleware = require('../middleware/upload');
const authMiddleware = require('../middleware/auth');

categories.get('/categories', authMiddleware, categoriesController.getAllCategories);
categories.get('/categories/:id', authMiddleware, categoriesController.getCategoryById);
categories.post('/categories', authMiddleware, uploudMiddleware, categoriesController.createCategory);
categories.patch('/categories/:id', authMiddleware, uploudMiddleware, categoriesController.updateCategory);
categories.delete('/categories/:id', authMiddleware, categoriesController.deleteCategory);

module.exports=categories;