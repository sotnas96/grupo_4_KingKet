const express = require('express');
const router = express.Router();
const apiProductController = require('../../controller/api/apiProductController')
router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detailId);

module.exports = router;