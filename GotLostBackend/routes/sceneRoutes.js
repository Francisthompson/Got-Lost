const express = require('express');
const router = express.Router();
const { getScenes, getSceneById, createScene, updateScene, deleteScene } = require('../controllers/sceneController');
router.route('/').get(getScenes).post(createScene);
router.route('/:id').get(getSceneById).put(updateScene).delete(deleteScene);
module.exports = router;