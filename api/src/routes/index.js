const { Router } = require('express');

const router = Router()

const {getToken, getCode} = require('../controllers/acdapi');

router.post('/token', getToken);
router.get('/code', getCode);

module.exports = router;