const workspacePreset = require('../../../jest.preset').default;
const localPreset = require('./preset/local.preset');

module.exports = {
  ...workspacePreset,
  ...localPreset,
};
