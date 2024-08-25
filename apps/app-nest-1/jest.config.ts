import type { Config } from 'jest';

/* eslint-disable */
export default {
  displayName: 'app-nest-1',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        /*
         * Disable type-checking to speed up test runs
         *
         * https://kulshekhar.github.io/ts-jest/docs/getting-started/options/
         * https://github.com/kulshekhar/ts-jest/blob/main/website/docs/getting-started/options/diagnostics.md
         * https://github.com/kulshekhar/ts-jest/issues/822#issuecomment-1961616203
         */
        diagnostics: false,
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/app-nest-1',
  /* https://jestjs.io/docs/configuration#globalsetup-string */
  globalSetup: './jest/standalone/globalSetup.ts',
  /* https://jestjs.io/docs/configuration#globalteardown-string */
  globalTeardown: './jest/standalone/globalTeardown.ts',
  /* https://jestjs.io/docs/configuration#testenvironment-string */
  testEnvironment: './jest/standalone/testEnvironment.ts',
  /* https://jestjs.io/docs/configuration#setupfiles-array */
  setupFiles: [
    './jest/standalone/setupFiles1.ts',
    './jest/standalone/setupFiles2.ts',
  ],
  /* https://jestjs.io/docs/configuration#setupfilesafterenv-array */
  setupFilesAfterEnv: [
    './jest/standalone/setupFilesAfterEnv1.ts',
    './jest/standalone/setupFilesAfterEnv2.ts',
  ],
  /*
   * https://jestjs.io/docs/configuration#preset-string
   * Must be a JavaScript file and import JavaScript files
   */
  preset: '../../jest.preset.js',
  // preset: './jest/combined.preset.js',
} as Config;
