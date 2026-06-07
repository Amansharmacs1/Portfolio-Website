import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: String, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  technologies: [{ type: String }],
  imageUrl: { type: String },
  liveLink: { type: String },
  githubLink: { type: String },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
