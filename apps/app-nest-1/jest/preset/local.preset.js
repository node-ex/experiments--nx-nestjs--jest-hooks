/** @type {import('jest').Config} */
module.exports = {
  globalSetup: '<rootDir>/jest/preset/globalSetup.js',
  globalTeardown: '<rootDir>/jest/preset/globalTeardown.js',
  testEnvironment: '<rootDir>/jest/preset/testEnvironment.js',
};
