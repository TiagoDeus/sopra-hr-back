var models = require('../models');
var express = require('express');
var async = require('async');
var router = express.Router();

router.get('/document', function (req, res) {
    models.TypeDocument.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "document_types": rows});
                console.log("success", "Retrieved " + rows.length + " Document type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all document types "});
                console.log("error", "Error fetching all document types: " + err);
            }
        );
});

router.get('/document/:document_id', function (req, res) {
    models.TypeDocument.findById(req.params.document_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "document_type": row});
                console.log("success", "Retrieved document type: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching document type"});
                console.log("error", "Error fetching document type: " + err);
            }
        );
});

router.get('/career_branch', function (req, res) {
    models.TypeCareerBranch.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "career_branch_types": rows});
                console.log("success", "Retrieved " + rows.length + " career branch type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all career branch types "});
                console.log("error", "Error fetching all career branch types: " + err);
            }
        );
});

router.get('/career_branch/:career_branch_id', function (req, res) {
    models.TypeCareerBranch.findById(req.params.career_branch_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "career_branch_type": row});
                console.log("success", "Retrieved career branch type: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching career branch type"});
                console.log("error", "Error fetching career branch type: " + err);
            }
        );
});

router.get('/company_level', function (req, res) {
    models.TypeCompanyLevel.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "company_level_types": rows});
                console.log("success", "Retrieved " + rows.length + " company level type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all company level types"});
                console.log("error", "Error fetching all company level types: " + err);
            }
        );
});

router.get('/company_level/:company_level_id', function (req, res) {
    models.TypeCompanyLevel.findById(req.params.company_level_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "company_level_type": row});
                console.log("success", "Retrieved company level type: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching company level type"});
                console.log("error", "Error fetching company level type: " + err);
            }
        );
});

router.get('/degree', function (req, res) {
    models.TypeDegree.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "degree_types": rows});
                console.log("success", "Retrieved " + rows.length + " degree type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all degree types "});
                console.log("error", "Error fetching all degree types: " + err);
            }
        );
});

router.get('/degree/:degree_id', function (req, res) {
    models.TypeDegree.findById(req.params.degree_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "degree_type": row});
                console.log("success", "Retrieved degree type: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching degree type"});
                console.log("error", "Error fetching degree type: " + err);
            }
        );
});

router.get('/language', function (req, res) {
    models.TypeLanguage.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "language_types": rows});
                console.log("success", "Retrieved " + rows.length + " language type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all language types "});
                console.log("error", "Error fetching all language types: " + err);
            }
        );
});

router.get('/language/:language_id', function (req, res) {
    models.TypeLanguage.findById(req.params.language_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "language_type": row});
                console.log("success", "Retrieved language type: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching language type"});
                console.log("error", "Error fetching language type: " + err);
            }
        );
});

router.get('/client', function (req, res) {
    models.TypeClient.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "client_types": rows});
                console.log("success", "Retrieved " + rows.length + " client type(s)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all client types "});
                console.log("error", "Error fetching all client types: " + err);
            }
        );
});

router.get('/client/:client_id', function (req, res) {
    models.TypeClient.findById(req.params.client_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "client_type": row});
                console.log("success", "Retrieved client type: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching client type"});
                console.log("error", "Error fetching client type: " + err);
            }
        );
});

router.get('/functional_area_category', function (req, res) {
    models.TypeFunctionalAreaCategory.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "functional_area_categories": rows});
                console.log("success", "Retrieved " + rows.length + " functional area category(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all functional area categories"});
                console.log("error", "Error fetching all functional area categories: " + err);
            }
        );
});

router.get('/functional_area_category/:category_id', function (req, res) {
    models.TypeFunctionalAreaCategory.findById(req.params.category_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "functional_area_category": row});
                console.log("success", "Retrieved functional area category: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching functional area category"});
                console.log("error", "Error fetching functional area category: " + err);
            }
        );
});

router.get('/functional_area_category/:category_id/subcategory', function (req, res) {
    models.TypeFunctionalAreaSubCategory.findAll({
        where: {
            category_id: req.params.category_id
        },
        order: [['id', 'ASC']]
    }).then(
            function (rows) {
                res.json({"error": false, "message": "success", "functional_area_subcategories": rows});
                console.log("success", "Retrieved " + rows.length + " functional area subcategory(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching functional area subcategories"});
                console.log("error", "Error fetching functional area subcategories: " + err);
            }
    );
});

router.get('/functional_area_subcategory', function (req, res) {
    models.TypeFunctionalAreaSubCategory.findAll({
            order: [['category_id', 'ASC'], ['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "functional_area_subcategories": rows});
                console.log("success", "Retrieved " + rows.length + " functional area subcategory(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all functional area subcategories "});
                console.log("error", "Error fetching all functional area subcategories: " + err);
            }
        );
});

router.get('/technology_category', function (req, res) {
    models.TypeTechnologyCategory.findAll({
            order: [['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "technology_categories": rows});
                console.log("success", "Retrieved " + rows.length + " technology category(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all technology categories "});
                console.log("error", "Error fetching all technology categories: " + err);
            }
        );
});

router.get('/technology_category/:category_id', function (req, res) {
    models.TypeTechnologyCategory.findById(req.params.category_id)
        .then(
            function (row) {
                res.json({"error": false, "message": "success", "technology_category": row});
                console.log("success", "Retrieved technology category: " + row.id);
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching technology category"});
                console.log("error", "Error fetching technology category: " + err);
            }
        );
});

router.get('/technology_category/:category_id/subcategory', function (req, res) {
    models.TypeTechnologySubCategory.findAll({
        where: {
            category_id: req.params.category_id
        },
        order: [['id', 'ASC']]
    }).then(
        function (rows) {
            res.json({"error": false, "message": "success", "technology_subcategories": rows});
            console.log("success", "Retrieved " + rows.length + " technology subcategory(ies)");
        },
        function (err) {
            res.json({"error": true, "message": "Error fetching technology subcategories"});
            console.log("error", "Error fetching technology subcategories: " + err);
        }
    );
});

router.get('/technology_subcategory', function (req, res) {
    models.TypeTechnologySubCategory.findAll({
            order: [['category_id', 'ASC'], ['id', 'ASC']]
        })
        .then(
            function (rows) {
                res.json({"error": false, "message": "success", "technology_subcategories": rows});
                console.log("success", "Retrieved " + rows.length + " technology subcategory(ies)");
            },
            function (err) {
                res.json({"error": true, "message": "Error fetching all technology subcategories "});
                console.log("error", "Error fetching all technology subcategories: " + err);
            }
        );
});

module.exports = router;
