const express = require('express');
const authController = require('../controller/authController');
const auth = require('../middlewares/auth');
const blogController = require('../controller/blogController');
const commentController = require('../controller/commentController');
const router = express.Router();

// register
router.post('/register', authController.register);

// login
router.post('/login', authController.login);

// logout
router.post('/logout', auth, authController.logout);

// refresh
router.get('/refresh', authController.refresh);

// blog
router.post('/blog', auth, blogController.create);

// get all
router.get('/blog/all', auth, blogController.getAll);

// get blog by id
router.get('/blog/:id', auth, blogController.getById);

// update
router.put('/blog', auth, blogController.update);

// delete
router.delete('/blog/:id', auth, blogController.delete);

//comment
// create
router.post('/comment', auth, commentController.create);

//comment
// get
router.get('/comment/:id', auth, commentController.getById);

module.exports = router;