// // jest.config.js
module.exports = {
  // Run polyfills first
  setupFiles: ['<rootDir>/jestPolyfills.js'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  // Enable coverage collection
  collectCoverage: true,

  // Specify the files for which you want to collect coverage.
  // Adjust the glob patterns to include all relevant files.
  collectCoverageFrom: [
    'src/**/*.{js,jsx}', // include all JS/JSX files in the src folder
    '!src/**/*.test.js', // exclude test files
    '!src/**/index.js', // optionally, exclude entry point files if desired
  ],

  // Optionally, specify output directory and reporters
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
};
