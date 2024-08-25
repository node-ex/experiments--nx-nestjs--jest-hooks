// my-custom-environment
const NodeEnvironment = require('jest-environment-node').TestEnvironment;

/**
 * @typedef {import('@jest/environment').JestEnvironmentConfig} JestEnvironmentConfig
 * @typedef {import('@jest/environment').EnvironmentContext} EnvironmentContext
 * @typedef {import('vm').Context} Context
 * @typedef {import('jest-circus').Event} Event
 * @typedef {import('jest-circus').State} State
 */

class TestEnvironment extends NodeEnvironment {
  /**
   * @param {JestEnvironmentConfig} config
   * @param {EnvironmentContext} context
   */
  constructor(config, context) {
    super(config, context);
    console.log('>>> preset TestEnvironment.constructor');
  }

  /**
   * @override
   * @returns {Promise<void>}
   */
  async setup() {
    await super.setup();
    console.log('>>> preset TestEnvironment.setup');
  }

  /**
   * @override
   * @returns {Promise<void>}
   */
  async teardown() {
    console.log('>>> preset TestEnvironment.teardown');
    await super.teardown();
  }

  /**
   * @override
   * @returns {Context | null}
   */
  getVmContext() {
    // console.log('>>> preset TestEnvironment.getVmContext');
    return super.getVmContext();
  }

  /**
   * @param {Event} event
   * @param {State} state
   */
  handleTestEvent(event, state) {
    // console.log('>>> preset TestEnvironment.handleTestEvent');
    // console.log('event:', event);
    // console.log('state:', state);
  }
}

module.exports = TestEnvironment;
