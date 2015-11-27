var models  = require('../models');
var express = require('express');
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

module.exports = router;
