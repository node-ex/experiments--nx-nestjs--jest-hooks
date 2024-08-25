// my-custom-environment
import { TestEnvironment as NodeEnvironment } from 'jest-environment-node';
import type {
  EnvironmentContext,
  JestEnvironmentConfig,
} from '@jest/environment';
import type { Event, State } from 'jest-circus';

export default class TestEnvironment extends NodeEnvironment {
  constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
    super(config, context);
    console.log('>>> standalone TestEnvironment.constructor');
  }

  override async setup() {
    await super.setup();
    console.log('>>> standalone TestEnvironment.setup');
  }

  override async teardown() {
    console.log('>>> standalone TestEnvironment.teardown');
    await super.teardown();
  }

  override getVmContext() {
    // console.log('>>> standalone TestEnvironment.getVmContext');
    return super.getVmContext();
  }

  handleTestEvent(event: Event, state: State) {
    // console.log('>>> standalone TestEnvironment.handleTestEvent');
    // console.log('event:', event);
    // console.log('state:', state);
  }
}
