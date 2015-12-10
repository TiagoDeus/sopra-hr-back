var models = require('../models');
var express = require('express');
var async = require('async');
var router = express.Router();

// document

router.get('/document', function (req, res) {
    console.log("debug", "Fetching all document types");
    models.TypeDocument.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (document_types) {
                res.json({"error": false, "message": "success", "document_types": document_types});
                console.log("success", "Retrieved " + document_types.length + " document type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all document types"});
                console.log("error", "Error fetching all document types: " + err);
            }
        );
});

router.post('/document', function (req, res) {
    console.log("debug", "Creating document type");
    models.TypeDocument.create({
            description: req.body.document_type.description
        })
        .then(
            function (document_type) {
                res.json({"error": false, "message": "success", "document_type": {"id": document_type.id}});
                console.log("success", "Created document type: " + document_type.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating document type"});
                console.log("error", "Error creating document type: " + err);
            }
        );
});

router.patch('/document/:document_id', function (req, res) {
    console.log("debug", "Updating document type");
    models.TypeDocument.update({
            description: req.body.document_type.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.document_id
            }
        })
        .then(
            function (document_type) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated document type");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating document type"});
                console.log("error", "Error updating document type: " + err);
            }
        );
});

router.get('/document/:document_id', function (req, res) {
    console.log("debug", "Fetching document type: " + req.params.document_id);
    models.TypeDocument.findById(req.params.document_id)
        .then(
            function (document_type) {
                res.json({"error": false, "message": "success", "document_type": document_type});
                console.log("success", "Retrieved document type: " + document_type.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching document type"});
                console.log("error", "Error fetching document type: " + err);
            }
        );
});

// career_branch

router.get('/career_branch', function (req, res) {
    console.log("debug", "Fetching all career branches");
    models.TypeCareerBranch.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (career_branches) {
                res.json({"error": false, "message": "success", "career_branches": career_branches});
                console.log("success", "Retrieved " + career_branches.length + " career branch(es)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all career branches"});
                console.log("error", "Error fetching all career branches: " + err);
            }
        );
});

router.post('/career_branch', function (req, res) {
    console.log("debug", "Creating career branch");
    models.TypeCareerBranch.create({
            description: req.body.career_branch.description
        })
        .then(
            function (career_branch) {
                res.json({"error": false, "message": "success", "career_branch": {"id": career_branch.id}});
                console.log("success", "Created career branch: " + career_branch.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating career branch"});
                console.log("error", "Error creating career branch: " + err);
            }
        );
});

router.patch('/career_branch/:career_branch_id', function (req, res) {
    console.log("debug", "Updating career branch: " + req.params.career_branch_id);
    models.TypeCareerBranch.update({
            description: req.body.career_branch.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.career_branch_id
            }
        })
        .then(
            function (career_branch) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated career branch");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating career branch"});
                console.log("error", "Error updating career branch: " + err);
            }
        );
});

router.get('/career_branch/:career_branch_id', function (req, res) {
    console.log("debug", "Fetching career branch: " + req.params.career_branch_id);
    models.TypeCareerBranch.findById(req.params.career_branch_id)
        .then(
            function (career_branch) {
                res.json({"error": false, "message": "success", "career_branch": career_branch});
                console.log("success", "Retrieved career branch: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching career branch"});
                console.log("error", "Error fetching career branch: " + err);
            }
        );
});

// company_level

router.get('/company_level', function (req, res) {
    console.log("debug", "Fetching all company levels");
    models.TypeCompanyLevel.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (company_levels) {
                res.json({"error": false, "message": "success", "company_levels": company_levels});
                console.log("success", "Retrieved " + company_levels.length + " company level(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all company levels"});
                console.log("error", "Error fetching all company levels: " + err);
            }
        );
});

router.post('/company_level', function (req, res) {
    console.log("debug", "Creating company level");
    models.TypeCompanyLevel.create({
            description: req.body.company_level.description
        })
        .then(
            function (company_level) {
                res.json({"error": false, "message": "success", "company_level": {"id": company_level.id}});
                console.log("success", "Created company level: " + company_level.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating company level"});
                console.log("error", "Error creating company level: " + err);
            }
        );
});

router.patch('/company_level/:company_level_id', function (req, res) {
    console.log("debug", "Updating company level");
    models.TypeCompanyLevel.update({
            description: req.body.company_level.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.company_level_id
            }
        })
        .then(
            function (company_level) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated company level");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating company level"});
                console.log("error", "Error updating company level: " + err);
            }
        );
});

router.get('/company_level/:company_level_id', function (req, res) {
    console.log("debug", "Fetching company level: " + req.params.company_level_id);
    models.TypeCompanyLevel.findById(req.params.company_level_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "company_level": row});
                console.log("success", "Retrieved company level: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching company level"});
                console.log("error", "Error fetching company level: " + err);
            }
        );
});

// degree

router.get('/degree', function (req, res) {
    console.log("debug", "Fetching all degrees");
    models.TypeDegree.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (degrees) {
                res.json({"error": false, "message": "success", "degrees": degrees});
                console.log("success", "Retrieved " + degrees.length + " degree(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all degrees "});
                console.log("error", "Error fetching all degrees: " + err);
            }
        );
});

router.post('/degree', function (req, res) {
    console.log("debug", "Creating degree");
    models.TypeDegree.create({
            description: req.body.degree.description
        })
        .then(
            function (degree) {
                res.json({"error": false, "message": "success", "degree": {"id": degree.id}});
                console.log("success", "Created degree: " + degree.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating degree"});
                console.log("error", "Error creating degree: " + err);
            }
        );
});

router.patch('/degree/:degree_id', function (req, res) {
    console.log("debug", "Updating degree: " + req.params.degree_id);
    models.TypeDegree.update({
            description: req.body.degree.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.degree_id
            }
        })
        .then(
            function (degree) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated degree");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating degree"});
                console.log("error", "Error updating degree: " + err);
            }
        );
});

router.get('/degree/:degree_id', function (req, res) {
    console.log("debug", "Fetching degree: " + req.params.degree_id);
    models.TypeDegree.findById(req.params.degree_id)
        .then(
            function (degree) {
                res.json({"error": false, "message": "success", "degree": degree});
                console.log("success", "Retrieved degree: " + degree.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching degree"});
                console.log("error", "Error fetching degree: " + err);
            }
        );
});

// language

router.get('/language', function (req, res) {
    console.log("debug", "Fetching all languages");
    models.TypeLanguage.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (languages) {
                res.json({"error": false, "message": "success", "languages": languages});
                console.log("success", "Retrieved " + languages.length + " language(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all languages"});
                console.log("error", "Error fetching all languages: " + err);
            }
        );
});

router.post('/language', function (req, res) {
    console.log("debug", "Creating language");
    models.TypeLanguage.create({
            description: req.body.language.description
        })
        .then(
            function (language) {
                res.json({"error": false, "message": "success", "language": {"id": language.id}});
                console.log("success", "Created language: " + language.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating language"});
                console.log("error", "Error creating language: " + err);
            }
        );
});

router.patch('/language/:language_id', function (req, res) {
    console.log("debug", "Updating language: " + req.params.language_id);
    models.TypeLanguage.update({
            description: req.body.language.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.language_id
            }
        })
        .then(
            function (language) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated language");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating language"});
                console.log("error", "Error updating language: " + err);
            }
        );
});

router.get('/language/:language_id', function (req, res) {
    console.log("debug", "Fetching language: " + req.params.language_id);
    models.TypeLanguage.findById(req.params.language_id)
        .then(
            function (language) {
                res.json({"error": false, "message": "success", "language": language});
                console.log("success", "Retrieved language: " + language.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching language"});
                console.log("error", "Error fetching language: " + err);
            }
        );
});

// client

router.get('/client', function (req, res) {
    console.log("debug", "Fetching all clients");
    models.TypeClient.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (clients) {
                res.json({"error": false, "message": "success", "clients": clients});
                console.log("success", "Retrieved " + clients.length + " client(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all clients"});
                console.log("error", "Error fetching all clients: " + err);
            }
        );
});

router.post('/client', function (req, res) {
    console.log("debug", "Creating client");
    models.TypeClient.create({
            description: req.body.client.description
        })
        .then(
            function (client) {
                res.json({"error": false, "message": "success", "client": {"id": client.id}});
                console.log("success", "Created client: " + client.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating client"});
                console.log("error", "Error creating client: " + err);
            }
        );
});

router.patch('/client/:client_id', function (req, res) {
    console.log("debug", "Updating client: " + req.params.client_id);
    models.TypeClient.update({
            description: req.body.client.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.client_id
            }
        })
        .then(
            function (client) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated client");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating client"});
                console.log("error", "Error updating client: " + err);
            }
        );
});

router.get('/client/:client_id', function (req, res) {
    console.log("debug", "Fetching client: " + req.params.client_id);
    models.TypeClient.findById(req.params.client_id)
        .then(
            function (client) {
                res.json({"error": false, "message": "success", "client": client});
                console.log("success", "Retrieved client: " + client.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching client"});
                console.log("error", "Error fetching client: " + err);
            }
        );
});

// functional_area_category

router.get('/functional_area_category', function (req, res) {
    console.log("debug", "Fetching all functional area categories");
    models.TypeFunctionalAreaCategory.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (functional_area_categories) {
                res.json({
                    "error": false,
                    "message": "success",
                    "functional_area_categories": functional_area_categories
                });
                console.log("success", "Retrieved " + functional_area_categories.length + " functional area category(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all functional area categories"});
                console.log("error", "Error fetching all functional area categories: " + err);
            }
        );
});

router.post('/functional_area_category', function (req, res) {
    console.log("debug", "Creating functional area category");
    models.TypeFunctionalAreaCategory.create({
            description: req.body.functional_area_category.description
        })
        .then(
            function (functional_area_category) {
                res.json({
                    "error": false,
                    "message": "success",
                    "functional_area_category": {"id": functional_area_category.id}
                });
                console.log("success", "Created functional area category: " + functional_area_category.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating functional area category"});
                console.log("error", "Error creating functional area category: " + err);
            }
        );
});

router.patch('/functional_area_category/:category_id', function (req, res) {
    console.log("debug", "Updating functional area category: " + req.params.category_id);
    models.TypeFunctionalAreaCategory.update({
            description: req.body.functional_area_category.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.category_id
            }
        })
        .then(
            function (functional_area_category) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated functional area category");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating functional area category"});
                console.log("error", "Error updating functional area category: " + err);
            }
        );
});

router.get('/functional_area_category/:category_id', function (req, res) {
    console.log("debug", "Fetching functional area category: " + req.params.category_id);
    models.TypeFunctionalAreaCategory.findById(req.params.category_id)
        .then(
            function (functional_area_category) {
                res.json({"error": false, "message": "success", "functional_area_category": functional_area_category});
                console.log("success", "Retrieved functional area category: " + functional_area_category.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching functional area category"});
                console.log("error", "Error fetching functional area category: " + err);
            }
        );
});


// functional_area_subcategory

router.get('/functional_area_category/:category_id/subcategory', function (req, res) {
    console.log("debug", "Fetching all functional area subcategories from category: " + req.params.category_id);
    models.TypeFunctionalAreaSubCategory.findAll({
        where: {
            category_id: req.params.category_id
        },
        order: [['id', 'ASC']]
    }).then(
        function (functional_area_subcategories) {
            res.json({
                "error": false,
                "message": "success",
                "functional_area_subcategories": functional_area_subcategories
            });
            console.log("success", "Retrieved " + functional_area_subcategories.length + " functional area subcategory(ies)");
        },
        function (err) {
            res.json({"error": true, "message": "Error fetching functional area subcategories"});
            console.log("error", "Error fetching functional area subcategories: " + err);
        }
    );
});

router.get('/functional_area_subcategory', function (req, res) {
    console.log("debug", "Fetching all functional area subcategories");
    models.TypeFunctionalAreaSubCategory.findAll({
            order: [['category_id', 'ASC'], ['id', 'ASC']]
        })
        .then(
            function (functional_area_subcategories) {
                res.json({
                    "error": false,
                    "message": "success",
                    "functional_area_subcategories": functional_area_subcategories
                });
                console.log("success", "Retrieved " + functional_area_subcategories.length + " functional area subcategory(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all functional area subcategories"});
                console.log("error", "Error fetching all functional area subcategories: " + err);
            }
        );
});

router.post('/functional_area_subcategory', function (req, res) {
    console.log("debug", "Creating functional area subcategory");
    models.TypeFunctionalAreaSubCategory.create({
            description: req.body.functional_area_subcategory.description,
            category_id: req.body.functional_area_subcategory.category_id,
        })
        .then(
            function (functional_area_subcategory) {
                res.json({
                    "error": false,
                    "message": "success",
                    "functional_area_subcategory": {"id": functional_area_subcategory.id}
                });
                console.log("success", "Created functional area subcategory: " + functional_area_subcategory.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating functional area subcategory"});
                console.log("error", "Error creating functional area subcategory: " + err);
            }
        );
});

router.patch('/functional_area_subcategory/:subcategory_id', function (req, res) {
    console.log("debug", "Updating functional area subcategory: " + req.params.subcategory_id);
    var fields = [];
    if (req.body.functional_area_subcategory.description)  fields.push('description');
    if (req.body.functional_area_subcategory.category_id)  fields.push('category_id');
    models.TypeFunctionalAreaSubCategory.update({
            description: req.body.functional_area_subcategory.description,
            category_id: req.body.functional_area_subcategory.category_id,
        },
        {
            fields: fields,
            where: {
                id: req.params.subcategory_id
            }
        })
        .then(
            function (functional_area_subcategory) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated functional area subcategory");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating functional area subcategory"});
                console.log("error", "Error updating functional area subcategory: " + err);
            }
        );
});

router.get('/functional_area_subcategory/:subcategory_id', function (req, res) {
    console.log("debug", "Fetching functional area subcategory: " + req.params.subcategory_id);
    models.TypeFunctionalAreaCategory.findById(req.params.subcategory_id)
        .then(
            function (functional_area_subcategory) {
                res.json({
                    "error": false,
                    "message": "success",
                    "functional_area_subcategory": functional_area_subcategory
                });
                console.log("success", "Retrieved functional area subcategory: " + functional_area_subcategory.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching functional area subcategory"});
                console.log("error", "Error fetching functional area subcategory: " + err);
            }
        );
});

// technology_category

router.get('/technology_category', function (req, res) {
    console.log("debug", "Fetching all technology categories");
    models.TypeTechnologyCategory.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (technology_categories) {
                res.json({"error": false, "message": "success", "technology_categories": technology_categories});
                console.log("success", "Retrieved " + technology_categories.length + " technology category(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all technology categories"});
                console.log("error", "Error fetching all technology categories: " + err);
            }
        );
});

router.post('/technology_category', function (req, res) {
    console.log("debug", "Creating technology category");
    models.TypeTechnologyCategory.create({
            description: req.body.technology_category.description
        })
        .then(
            function (technology_category) {
                res.json({"error": false, "message": "success", "technology_category": {"id": technology_category.id}});
                console.log("success", "Created technology category: " + technology_category.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating technology category"});
                console.log("error", "Error creating technology category: " + err);
            }
        );
});

router.patch('/technology_category/:category_id', function (req, res) {
    console.log("debug", "Updating technology category: " + req.params.category_id);
    models.TypeTechnologyCategory.update({
            description: req.body.technology_category.description
        },
        {
            fields: ['description'],
            where: {
                id: req.params.category_id
            }
        })
        .then(
            function (technology_category) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated technology category");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating technology category"});
                console.log("error", "Error updating technology category: " + err);
            }
        );
});

router.get('/technology_category/:category_id', function (req, res) {
    console.log("debug", "Fetching technology category: " + req.params.category_id);
    models.TypeTechnologyCategory.findById(req.params.category_id)
        .then(
            function (technology_category) {
                res.json({"error": false, "message": "success", "technology_category": technology_category});
                console.log("success", "Retrieved technology category: " + technology_category.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching technology category"});
                console.log("error", "Error fetching technology category: " + err);
            }
        );
});

// technology_subcategory

router.get('/technology_category/:category_id/subcategory', function (req, res) {
    console.log("debug", "Fetching all technology subcategories from category: " + req.params.category_id);
    models.TypeTechnologySubCategory.findAll({
        where: {
            category_id: req.params.category_id
        },
        order: [['id', 'ASC']]
    }).then(
        function (technology_subcategories) {
            res.json({"error": false, "message": "success", "technology_subcategories": technology_subcategories});
            console.log("success", "Retrieved " + technology_subcategories.length + " technology subcategory(ies)");
        },
        function (err) {
            res.json({"error": true, "message": "Error fetching technology subcategories"});
            console.log("error", "Error fetching technology subcategories: " + err);
        }
    );
});

router.get('/technology_subcategory', function (req, res) {
    console.log("debug", "Fetching all technology subcategories");
    models.TypeTechnologySubCategory.findAll({
            order: [['category_id', 'ASC'], ['id', 'ASC']]
        })
        .then(
            function (technology_subcategories) {
                res.json({"error": false, "message": "success", "technology_subcategories": technology_subcategories});
                console.log("success", "Retrieved " + technology_subcategories.length + " technology subcategory(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all technology subcategories "});
                console.log("error", "Error fetching all technology subcategories: " + err);
            }
        );
});

router.post('/technology_subcategory', function (req, res) {
    console.log("debug", "Creating technology subcategory");
    models.TypeTechnologySubCategory.create({
            description: req.body.technology_subcategory.description
        })
        .then(
            function (technology_subcategory) {
                res.json({"error": false, "message": "success", "technology_subcategory": {"id": technology_subcategory.id}});
                console.log("success", "Created technology subcategory: " + technology_subcategory.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error creating technology subcategory"});
                console.log("error", "Error creating technology subcategory: " + err);
            }
        );
});

router.patch('/technology_subcategory/:subcategory_id', function (req, res) {
    console.log("debug", "Updating technology subcategory: " + req.params.subcategory_id);
    var fields = [];
    if (req.body.technology_subcategory.description)  fields.push('description');
    if (req.body.technology_subcategory.category_id)  fields.push('category_id');
    models.TypeTechnologySubCategory.update({
            description: req.body.technology_subcategory.description,
            category_id: req.body.technology_subcategory.category_id,
        },
        {
            fields: fields,
            where: {
                id: req.params.subcategory_id
            }
        })
        .then(
            function (technology_subcategory) {
                res.json({"error": false, "message": "success"});
                console.log("success", "Updated technology subcategory");
            },
            function (err) {
                res.json({"error": true, "message": "Error updating technology subcategory"});
                console.log("error", "Error updating technology subcategory: " + err);
            }
        );
});

router.get('/technology_subcategory/:subcategory_id', function (req, res) {
    console.log("debug", "Fetching technology subcategory: " + req.params.subcategory_id);
    models.TypeTechnologySubCategory.findById(req.params.subcategory_id)
        .then(
            function (technology_subcategory) {
                res.json({"error": false, "message": "success", "technology_subcategory": technology_subcategory});
                console.log("success", "Retrieved technology subcategory: " + technology_subcategory.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching technology subcategory"});
                console.log("error", "Error fetching technology subcategory: " + err);
            }
        );
});

module.exports = router;
