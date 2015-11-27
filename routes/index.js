var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  	models.Worker.findAll({
		include: [ models.TypeDocument ]
  	}).then(
  	function(rows){
        res.json({"error" : false, "message" : "success", "worker" : rows});
        console.log("success", "Retrieved " + rows.length + " worker(s)");
    },
  	function(err) {
        res.json({"error" : true, "message" : "Error fetching all workers"});
        console.log("error", "Error fetching all workers: " + err);
    });
});

module.exports = router;
