const mongoose = require('mongoose');
const HotspotSchema = new mongoose.Schema({
  id: { type: String, required: true },
  targetSceneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Scene', default: null },
  pitch: { type: Number, required: true },
  yaw: { type: Number, required: true },
  title: { type: String },
  description: { type: String },
  type: { type: String, enum: ['nav', 'info', 'media'], default: 'nav' },
  icon: { type: String }
}, { timestamps: true });
module.exports = HotspotSchema;