'use strict';

var _ = require('lodash');

var actions = [
  'ACTION_LOG_OUT',
  'ACTION_VALIDATING_AUTH_TOKEN',
  'ACTION_VALID_AUTH_TOKEN',
  'ACTION_INVALID_AUTH_TOKEN',

  'ACTION_NEW_LOADED_COMPONENTS',
  'ACTION_NEW_EVENTS',
  'ACTION_NEW_SERVICES',
  'ACTION_NEW_STATES',

  'ACTION_SHOW_TOAST',

  'ACTION_EVENT_FIRED',
  'ACTION_INITIAL_LOAD_DONE',
];

module.exports = _.zipObject(actions, actions);
