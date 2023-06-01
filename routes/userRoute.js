const router = require('express').Router(),
    userController = require('../controllers/userController');

router.get("/signup", userController.signup);
router.get("/login", userController.login);
router.get("/profile", userController.profile);

module.exports = router;
