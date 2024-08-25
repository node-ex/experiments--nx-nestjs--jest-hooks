import type { Config } from '@jest/types';

export default (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): void => {
  console.log();
  console.log('>>> standalone teardown.ts');
  console.log();
};
