import express from 'express';
import { getItems, createItem, updateItem, deleteItem } from '../controllers/genericController.js';
import { protect } from '../middleware/authMiddleware.js';

import Project from '../models/Project.js';
import Skill from '../models/Skill.js';
import Experience from '../models/Experience.js';
import Achievement from '../models/Achievement.js';
import Publication from '../models/Publication.js';
import Message from '../models/Message.js';

const router = express.Router();

const setupRoutes = (path, Model, isPublicReadOnly = true) => {
  router.route(path)
    .get(isPublicReadOnly ? getItems(Model) : [protect, getItems(Model)])
    .post(protect, createItem(Model));
    
  router.route(`${path}/:id`)
    .put(protect, updateItem(Model))
    .delete(protect, deleteItem(Model));
};

// Setup standard CRUD routes
setupRoutes('/projects', Project);
setupRoutes('/skills', Skill);
setupRoutes('/experiences', Experience);
setupRoutes('/achievements', Achievement);
setupRoutes('/publications', Publication);

// Message routes (POST is public, GET/PUT/DELETE are protected)
router.route('/messages')
  .get(protect, getItems(Message))
  .post(createItem(Message));
  
router.route('/messages/:id')
  .put(protect, updateItem(Message))
  .delete(protect, deleteItem(Message));

export default router;
