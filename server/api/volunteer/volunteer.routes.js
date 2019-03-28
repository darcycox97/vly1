import { Router } from 'express';
import * as VolunteerController from './volunteer.controller';
const router = new Router();

// Get all Posts
router.route('/').get(VolunteerController.getVolunteers);

// Add a new Post
router.route('/').post(VolunteerController.addVolunteer);

export default router;
