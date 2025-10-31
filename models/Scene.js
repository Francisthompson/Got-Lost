import mongoose from 'mongoose';

const sceneSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Scene title is required'], trim: true },
  imageUrl: { type: String, required: [true, 'Scene image URL is required'] },
  description: { type: String, default: '' },
  hotspots: [
    {
      targetScene: { type: String, required: true },
      pitch: Number,
      yaw: Number,
      tooltip: String,
    },
  ],
}, { timestamps: true });

const Scene = mongoose.model('Scene', sceneSchema);
export default Scene;
