const mongoose = require('mongoose');
const HotspotSchema = require('./Hotspot');
const SceneSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String },
  imagePath: { type: String, required: true },
  thumbnailPath: { type: String },
  yaw: { type: Number, default: 0 },
  pitch: { type: Number, default: 0 },
  hfov: { type: Number, default: 100 },
  hotspots: [HotspotSchema],
  tags: [{ type: String }]
}, { timestamps: true });
module.exports = mongoose.model('Scene', SceneSchema);