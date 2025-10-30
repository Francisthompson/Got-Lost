require('dotenv').config();
const connectDB = require('../config/db');
const Scene = require('../models/Scene');
const sample = require('../data/sampleScenes.json');
const run = async () => {
  try {
    await connectDB();
    await Scene.deleteMany({});
    const created = await Scene.insertMany(sample);
    console.log(`Inserted ${created.length} scenes`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
run();