const router = require('express').Router(),
    userController = require('../controllers/userController');

router.get("/", userController.profile);

module.exports = router;