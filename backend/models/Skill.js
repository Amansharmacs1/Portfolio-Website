import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g., 'Frontend', 'Backend', 'Core CS'
  name: { type: String, required: true },
  iconUrl: { type: String }, // Optional, for SVGs or icon classes
  level: { type: Number, min: 1, max: 100 }, // Optional proficiency level
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Skill = mongoose.model('Skill', skillSchema);
export default Skill;
