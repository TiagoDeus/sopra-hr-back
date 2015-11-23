var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Hello World !"});
    });

    router.get("/worker",function(req,res){
        var query = "SELECT id,name,surname,date_format(birth_date,'%d/%m/%Y') as birth_date,document_id,document_type,date_format(startup_date,'%d/%m/%Y') as startup_date,salary FROM ??";
        var table = ["worker"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
                console.log("error", "Error executing MySQL query: "+query);
            } else {
                res.json({"error" : false, "message" : "success", "worker" : rows});
                console.log("success", "Retrieved "+rows.length+" worker(s)");
            }
        });
    });

    router.get("/worker/:worker_id",function(req,res){
        var query = "SELECT id,name,surname,date_format(birth_date,'%d/%m/%Y') as birth_date,document_id,document_type,date_format(startup_date,'%d/%m/%Y') as startup_date,salary FROM ?? WHERE ??=?";
        var table = ["worker","id",req.params.worker_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
                console.log("error", "Error executing MySQL query: "+query);
            } else {
                res.json({"error" : false, "message" : "success", "worker" : rows});
                console.log("success", "Retrieved worker with id: " + req.params.worker_id);
            }
        });
    });

    router.post("/worker",function(req,res){
        var query1 = "SELECT MAX(??) + 1 as worker_id FROM ??";
        var table1 = ["id","worker"];
        query1 = mysql.format(query1,table1);
        connection.query(query,function(err,rows1){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
                console.log("error", "Error executing MySQL query: "+query1);
            } 
        });
        var query2 = "INSERT INTO ??(id,name,surname,str_to_date(birth_date,'%d/%m/%Y'),document_id,document_type,str_to_date(startup_date,'%d/%m/%Y') VALUES (?,?,?,?,?,?,?,?)";
        var table2 = ["worker",rows1[0].worker_id,req.body.name,req.body.surname,req.body.birth_date,req.body.document_id,req.body.document_type,req.body.startup_date,req.body.salary];
        query2 = mysql.format(query2,table2);
        connection.query(query,function(err,rows2){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
                console.log("error", "Error executing MySQL query: "+query2);
            } else {
                res.json({"error" : false, "message" : "Worker Added !"});
                console.log("success", "Worker Added !");
            }
        });
    });

    router.put("/worker/:worker_id",function(req,res){
        var query = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        var table = ["worker","name",req.body.name,"id",req.params.worker_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
                console.log("error", "Error executing MySQL query: "+query);
            } else {
                res.json({"error" : false, "message" : "Updated the worker with id: "+req.params.worker_id});
                console.log("success", "Updated the worker with id "+req.params.worker_id);
            }
        });
    });

    router.delete("/worker/:worker_id",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["worker","id",req.params.worker_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"error" : true, "message" : "Error executing MySQL query"});
                console.log("error", "Error executing MySQL query: "+query);
            } else {
                res.json({"error" : false, "message" : "Deleted the worker with id "+req.params.worker_id});
                console.log("success", "Deleted the worker with id "+req.params.worker_id);
            }
        });
    });
}

module.exports = REST_ROUTER;
