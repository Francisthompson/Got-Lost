import Scene from '../models/Scene.js';

export const getScenes = async (req, res) => {
  try {
    const scenes = await Scene.find();
    res.status(200).json(scenes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createScene = async (req, res) => {
  try {
    const newScene = new Scene(req.body);
    const savedScene = await newScene.save();
    res.status(201).json(savedScene);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateScene = async (req, res) => {
  try {
    const updated = await Scene.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteScene = async (req, res) => {
  try {
    await Scene.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Scene deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
