const Scene = require('../models/Scene');
const getScenes = async (req, res, next) => {
  try {
    const scenes = await Scene.find().select('-__v');
    res.json(scenes);
  } catch (err) { next(err); }
};
const getSceneById = async (req, res, next) => {
  try {
    const scene = await Scene.findById(req.params.id).select('-__v');
    if (!scene) { res.status(404); throw new Error('Scene not found'); }
    res.json(scene);
  } catch (err) { next(err); }
};
const createScene = async (req, res, next) => {
  try {
    const scene = new Scene(req.body);
    const created = await scene.save();
    res.status(201).json(created);
  } catch (err) { next(err); }
};
const updateScene = async (req, res, next) => {
  try {
    const scene = await Scene.findById(req.params.id);
    if (!scene) { res.status(404); throw new Error('Scene not found'); }
    Object.assign(scene, req.body);
    const updated = await scene.save();
    res.json(updated);
  } catch (err) { next(err); }
};
const deleteScene = async (req, res, next) => {
  try {
    const scene = await Scene.findById(req.params.id);
    if (!scene) { res.status(404); throw new Error('Scene not found'); }
    await scene.remove();
    res.json({ message: 'Scene removed' });
  } catch (err) { next(err); }
};
module.exports = { getScenes, getSceneById, createScene, updateScene, deleteScene };