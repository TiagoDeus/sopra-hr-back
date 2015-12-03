var models  = require('../models');
var express = require('express');
var async = require('async');
var router  = express.Router();

router.get('/document', function(req, res) {
  	models.TypeDocument.findAll({
      order: [['id', 'DESC']]
    })
  	.then(
      function(rows){
        res.json({"error" : false, "message" : "success", "typeDocument" : rows});
        console.log("success", "Retrieved " + rows.length + " typeDocument(s)");
      },
      function(err) {
        res.json({"error" : true, "message" : "Error fetching all workers "});
        console.log("error", "Error fetching all document types: " + err);
      }
    );
});

router.get('/test', function(req, res) {

  models.Worker.findAll().then( function(result) {

    models.FunctionalArea.findAll({where: {worker_id:result[0].id}}).then(function(result2) {
      res.json({"error" : false, "message" : "success", "result" : result, "result2": result2});
    });

  });

});

module.exports = router;
