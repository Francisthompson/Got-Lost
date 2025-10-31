import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Scene from './models/Scene.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const scenes = [
  {
    title: 'Main Entrance',
    imageUrl: 'https://example.com/entrance.jpg',
    description: 'Welcome to the main entrance of the university.',
    hotspots: [{ targetScene: 'Library', pitch: 5, yaw: 60, tooltip: 'Go to Library' }],
  },
  {
    title: 'Library',
    imageUrl: 'https://example.com/library.jpg',
    description: 'The central library with study areas and resources.',
    hotspots: [{ targetScene: 'Main Entrance', pitch: 2, yaw: -45, tooltip: 'Return to Entrance' }],
  },
];

const seedData = async () => {
  try {
    await Scene.deleteMany();
    await Scene.insertMany(scenes);
    console.log('✅ Sample scenes added!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedData();
