const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createEvent = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    requirements: Joi.array().items(Joi.string().required()),
    description: Joi.string().required(),
    organizer: Joi.string().required(),
    branches: Joi.array().items(Joi.string().required()),
    dates: Joi.array().items(Joi.string().required()),
  }),
};

const getEvents = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getEvent = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
};

const updateEvent = {
  params: Joi.object().keys({
    eventId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string().required(),
      requirements: Joi.array().items(Joi.string().required()),
      description: Joi.string().required(),
      organizer: Joi.string().required(),
      branches: Joi.array().items(Joi.string().required()),
      dates: Joi.array().items(Joi.string().required()),
    })
    .min(1),
};

const deleteEvent = {
  params: Joi.object().keys({
    eventId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createEvent: createEvent,
  getEvents: getEvents,
  getEvent: getEvent,
  updateEvent: updateEvent,
  deleteEvent: deleteEvent,
};
