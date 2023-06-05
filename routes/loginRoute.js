const router = require('express').Router(),
    userController = require('../controllers/userController');


router.get("/", userController.login);

module.exports = router;