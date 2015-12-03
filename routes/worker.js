var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    console.log("debug", "Fetching all workers");
    models.Worker.findAll({
        include: [
            {model: models.TypeDocument, as: 'document_type'},
            {model: models.User, as: 'user', attributes: ['username']},
            {model: models.User, as: 'created_by', attributes: ['username']},
            {model: models.User, as: 'updated_by', attributes: ['username']}
        ]
    }).then(
        function (workers) {
            console.log("success", "Retrieved " + workers.length + " worker(s)");

            var workersData = (JSON.parse(JSON.stringify(workers)));

            models.utils.cleanJson(workersData);

            res.json({"error": false, "message": "success", "workers": workersData});
        },
        function (err) {
            console.log("error", "Error fetching all workers: " + err);
            res.json({"error": true, "message": "Error fetching all workers"});
        }
    );
});

router.get('/:worker_id', function (req, res) {
    console.log("debug", "Searching worker: " + req.params.worker_id);
    models.Worker.findById(req.params.worker_id, {
        include: [
            {model: models.TypeDocument, as: 'document_type'},
            {
                model: models.Career, as: 'careers', include: [
                {model: models.TypeCompanyLevel, as: 'company_level'},
                {model: models.TypeCareerBranch, as: 'career_branch'}
            ]
            },
            {model: models.User, as: 'user', attributes: ['username']},
            {model: models.User, as: 'created_by', attributes: ['username']},
            {model: models.User, as: 'updated_by', attributes: ['username']},
            {
                model: models.LanguageLevel, as: 'language_levels', include: [
                {model: models.TypeLanguage, as: 'language'}
            ]
            },
            {model: models.WorkerAvailability, as: 'worker_availabilities'},
            {
                model: models.Study, as: 'studies', include: [
                {model: models.TypeDegree, as: 'degree'}
            ]
            },
            {
                model: models.FunctionalArea, as: 'functional_areas', include: [
                {
                    model: models.TypeFunctionalAreaSubCategory, as: 'subcategory', include: [
                    {model: models.TypeFunctionalAreaCategory, as: 'category'}
                ]
                },
                {
                    model: models.Experience, as: 'experiences', include: [
                    {model: models.TypeClient, as: 'client'}
                ]
                },
                {model: models.User, as: 'created_by', attributes: ['username']},
                {model: models.User, as: 'updated_by', attributes: ['username']}
            ]
            },
            {
                model: models.Technology, as: 'technologies', include: [
                {
                    model: models.TypeTechnologySubCategory, as: 'subcategory', include: [
                    {model: models.TypeTechnologyCategory, as: 'category'}
                ]
                },
                {
                    model: models.Experience, as: 'experiences', include: [
                    {model: models.TypeClient, as: 'client'}
                ]
                },
                {model: models.User, as: 'created_by', attributes: ['username']},
                {model: models.User, as: 'updated_by', attributes: ['username']}
            ]
            }
        ]
    }).then(
        function (worker) {
            console.log("success", "Worker retrieved");

            var workerData = (JSON.parse(JSON.stringify(worker)));

            models.utils.cleanJson(workerData);

            workerData.functional_areas = models.utils.groupLatestBySubcategory(workerData.functional_areas);

            workerData.technologies = models.utils.groupLatestBySubcategory(workerData.technologies);

            res.json({"error": false, "message": "success", "worker": workerData});
        },
        function (err) {
            console.log("error", "Error fetching worker: " + err);
            res.json({"error": true, "message": "Error fetching worker"});
        }
    );
});

router.post('/search', function (req, res) {
    console.log("debug", "Searching workers");
    models.Worker.findAll({
        where: {
            $or: [
                {
                    name: {
                        $like: '%' + req.body.text + '%'
                    }
                },
                {
                    surname: {
                        $like: '%' + req.body.text + '%'
                    }
                },
                {
                    email: {
                        $like: '%' + req.body.text + '%'
                    }
                }
            ]
        },
        include: [
            {model: models.TypeDocument, as: 'document_type'},
            {model: models.User, as: 'user', attributes: ['username']},
            {model: models.User, as: 'created_by', attributes: ['username']},
            {model: models.User, as: 'updated_by', attributes: ['username']}
        ]
    }).then(
        function (workers) {
            console.log("success", "Found " + workers.length + " worker(s)");

            var workersData = (JSON.parse(JSON.stringify(workers)));

            models.utils.cleanJson(workersData);

            res.json({"error": false, "message": "success", "workers": workersData});
        },
        function (err) {
            console.log("error", "Error searching workers: " + err);
            res.json({"error": true, "message": "Error searching workers"});
        }
    );
});

module.exports = router;
