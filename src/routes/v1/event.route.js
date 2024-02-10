const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const eventValidation = require('../../validations/event.validation');
const eventController = require('../../controllers/event.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageEvents'), validate(eventValidation.createEvent), eventController.createEvent)
  .get(validate(eventValidation.getEvents), eventController.getEvents);

router
  .route('/:eventId')
  .get(auth('getEvents'), validate(eventValidation.getEvent), eventController.getEvent)
  .patch(auth('manageEvents'), validate(eventValidation.updateEvent), eventController.updateEvent)
  .delete(auth('manageEvents'), validate(eventValidation.deleteEvent), eventController.deleteEvent);

router.route('/public/upcoming').get(eventController.getUpcomingEvents);
module.exports = router;
