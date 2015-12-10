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


router.post('/', function (req, res) {
    console.log("debug", "Creating worker");
    models.Worker.create({
        name: req.body.worker.name,
        surname: req.body.worker.surname,
        birthday_at: req.body.worker.birthday_at,
        email: req.body.worker.email,
        document_number: req.body.worker.document_number,
        document_type_id: req.body.worker.document_type_id,
        startup_at: req.body.worker.startup_at,
        salary: req.body.worker.salary,
        created_by_id: 1, // TODO authentication
        updated_by_id: 1
    }).then(
        function (worker) {
            console.log("success", "Created worker: " + worker.id);
            res.json({"error": false, "message": "success", "worker": {"id": worker.id}});
        },
        function (err) {
            console.log("error", "Error creating worker: " + err);
            res.json({"error": true, "message": "Error creating worker"});
        }
    );
});


router.put('/:worker_id', function (req, res) {
    console.log("debug", "Updating worker");
    var fields = ['updated_by_id'];
    if (req.body.worker.name) fields.push('name');
    if (req.body.worker.surname) fields.push('surname');
    if (req.body.worker.birthday_at) fields.push('birthday_at');
    if (req.body.worker.email) fields.push('email');
    if (req.body.worker.document_number) fields.push('document_number');
    if (req.body.worker.document_type_id) fields.push('document_type_id');
    if (req.body.worker.startup_at) fields.push('startup_at');
    if (req.body.worker.salary) fields.push('salary');
    models.Worker.update({
            name: req.body.worker.name,
            surname: req.body.worker.surname,
            birthday_at: req.body.worker.birthday_at,
            email: req.body.worker.email,
            document_number: req.body.worker.document_number,
            document_type_id: req.body.worker.document_type_id,
            startup_at: req.body.worker.startup_at,
            salary: req.body.worker.salary,
            updated_by_id: 1 // TODO authentication
        },
        {
            fields: fields,
            where: {
                id: req.params.worker_id
            }
        }
    ).then(
        function (worker) {
            console.log("success", "Updating worker: " + worker.id);
            res.json({"error": false, "message": "success"});
        },
        function (err) {
            console.log("error", "Error updating worker: " + err);
            res.json({"error": true, "message": "Error updating worker"});
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
                },
                {
                    document_number: {
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


router.get('/:worker_id/technology', function (req, res) {
    console.log("debug", "fetching worker technology: " + req.params.worker_id);
    models.Technology.findAll({
        where: {
            worker_id: req.params.worker_id
        },
        order: [['subcategory_id', 'ASC'], ['created_at', 'DESC']],
        include: [
            {
                model: models.TypeTechnologySubCategory, as: 'subcategory', include: [
                {model: models.TypeTechnologyCategory, as: 'category'}
            ]
            }, {
                model: models.Experience, as: 'experiences', include: [
                    {model: models.TypeClient, as: 'client'}
                ]
            },
            {model: models.User, as: 'created_by', attributes: ['username']},
            {model: models.User, as: 'updated_by', attributes: ['username']}
        ]
    }).
    then(
        function (technologies) {
            console.log("success", "Retrieved " + technologies.length + " technology(ies)");

            var technologiesData = (JSON.parse(JSON.stringify(technologies)));

            models.utils.cleanJson(technologiesData);

            res.json({"error": false, "message": "success", "technologies": technologiesData});
        },
        function (err) {
            console.log("error", "Error fetching worker technologies: " + err);
            res.json({"error": true, "message": "Error fetching worker technologies"});
        }
    );
});


router.get('/:worker_id/functional_area', function (req, res) {
    console.log("debug", "fetching worker functional areas: " + req.params.worker_id);
    models.FunctionalArea.findAll({
        where: {
            worker_id: req.params.worker_id
        },
        order: [['subcategory_id', 'ASC'], ['created_at', 'DESC']],
        include: [
            {
                model: models.TypeFunctionalAreaSubCategory, as: 'subcategory', include: [
                {model: models.TypeFunctionalAreaCategory, as: 'category'}
            ]
            }, {
                model: models.Experience, as: 'experiences', include: [
                    {model: models.TypeClient, as: 'client'}
                ]
            },
            {model: models.User, as: 'created_by', attributes: ['username']},
            {model: models.User, as: 'updated_by', attributes: ['username']}
        ]
    }).
    then(
        function (functionalAreas) {
            console.log("success", "Retrieved " + functionalAreas.length + " functional area(s)");

            var functionalAreasData = (JSON.parse(JSON.stringify(functionalAreas)));

            models.utils.cleanJson(functionalAreasData);

            res.json({"error": false, "message": "success", "functional_areas": functionalAreasData});
        },
        function (err) {
            console.log("error", "Error fetching worker functional areas: " + err);
            res.json({"error": true, "message": "Error fetching worker functional areas"});
        }
    );
});

module.exports = router;
