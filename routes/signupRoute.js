const router = require('express').Router(),
    userController = require('../controllers/userController');

router.get("/", userController.signup);

module.exports = router;