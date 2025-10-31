import express from 'express';
import { getScenes, createScene, updateScene, deleteScene } from '../controllers/sceneController.js';

const router = express.Router();
router.route('/').get(getScenes).post(createScene);
router.route('/:id').put(updateScene).delete(deleteScene);
export default router;
