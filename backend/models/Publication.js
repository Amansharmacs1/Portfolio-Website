import mongoose from 'mongoose';

const publicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String },
  architectureOverview: { type: String },
  aiWorkflow: { type: String },
  implementationDetails: { type: String },
  link: { type: String },
  order: { type: Number, default: 0 }
}, { timestamps: true });

const Publication = mongoose.model('Publication', publicationSchema);
export default Publication;
