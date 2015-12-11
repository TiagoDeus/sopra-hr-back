var models = require('../models');
var express = require('express');
var md5 = require('md5');
var router = express.Router();

router.post('/login', function (req, res) {
    console.log("debug", "Login user: " + req.body.user.username);
    models.User.findAll({
        include: [
            {model: models.UserRole, as: 'role'}
        ],
        where: {
            username: req.body.user.username,
            password: md5(req.body.user.password)
        }
    }).then(
        function (users) {
            if (users && users.length > 0) {
                console.log("success", "Retrieved user: " + users[0].id);
                var userData = (JSON.parse(JSON.stringify(users[0])));
                models.utils.cleanJson(userData);
                res.json({"error": false, "message": "success", "user": userData});
            } else {
                console.log("warning", "user: ");
                res.status(404).json({"error": true, "message": "user/password not found"});
            }
        },
        function (err) {
            console.log("error", "Error login user: " + err);
            res.json({"error": true, "message": "Error login user"});
        }
    );
});

router.post('/', function (req, res) {
    console.log("debug", "Creating user");
    models.Worker.create({
        username: req.body.user.username,
        // saves the cripted password
        password: md5(req.body.user.password),
        role_id: req.body.user.role_id,
        created_by_id: 1, // TODO authentication
        updated_by_id: 1
    }).then(
        function (user) {
            console.log("success", "Created user: " + user.id);
            res.json({"error": false, "message": "success", "user": {"id": user.id}});
        },
        function (err) {
            console.log("error", "Error creating user: " + err);
            res.json({"error": true, "message": "Error creating user"});
        }
    );
});

router.get('/:user_id', function (req, res) {
    console.log("debug", "Fetching user: " + req.params.user_id);
    models.Worker.findById(req.params.user_id)
        .then(
            function (user) {
                console.log("success", "User " + user.id + " retrieved");
                res.json({"error": false, "message": "success", "user": user});
            },
            function (err) {
                console.log("error", "Error fetching user: " + err);
                res.json({"error": true, "message": "Error fetching user"});
            }
        );
});

module.exports = router;
