var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');


// All routes will start with '/skills/
// because this router is mounted in 
// server.js with a starts with a path of 
// /skills

// GET /skills (index functionality)
router.get('/', skillsCtrl.index);
// GET /skills/new (new functionality)
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality)
router.get('/:id', skillsCtrl.show);
// GET /skills/:id/edit (edit functionality)
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update);



module.exports = router; 