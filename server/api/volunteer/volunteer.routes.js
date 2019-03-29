import { Router } from 'express';
import * as VolunteerController from './volunteer.controller';
const router = new Router();

// Get all Posts
router.route('/').get(VolunteerController.getVolunteers);

// Add a new Post
router.route('/').post(VolunteerController.addVolunteer);

// Get one volunteer by cuid
router.route('/:cuid').get(VolunteerController.getVolunteer);

// Delete a volunteer by cuid
router.route('/:cuid').delete(VolunteerController.deleteVolunteer);

export default router;
