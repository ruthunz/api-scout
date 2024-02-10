const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const branches = ['Lobatos', 'Exploradores', 'Rovers', 'Pioneros', 'Todos'];
const types = ['Distrito', 'Brownsea'];

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    requirements: [
      {
        type: String,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      enum: types,
      default: 'Brownsea',
    },
    branches: [
      {
        type: String,
        enum: branches,
        default: 'Todos',
      },
    ],
    dates: [
      {
        type: Date,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
