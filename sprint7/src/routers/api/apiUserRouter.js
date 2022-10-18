const express = require('express');
const router = express.Router();

const apiUserController = require('../../controller/api/apiUserController')
router.get('/', apiUserController.list);
router.get('/:id', apiUserController.detailId);

module.exports = router;