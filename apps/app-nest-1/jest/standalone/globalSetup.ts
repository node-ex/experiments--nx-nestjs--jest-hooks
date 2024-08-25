import type { Config } from '@jest/types';

export default (
  globalConfig: Config.GlobalConfig,
  projectConfig: Config.ProjectConfig,
): void => {
  console.log();
  console.log('>>> standalone setup.ts');
  console.log();
};
