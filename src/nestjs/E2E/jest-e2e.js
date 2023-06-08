module.exports = {
  ...require('../jest.config'),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: '.',
  collectCoverageFrom: ['src/**/*.{js,jsx,tsx,ts}'],
  coverageDirectory: './coverage/E2E',
  testEnvironment: 'node',
  testRegex: '/e2e/.*\\.(e2e-test|e2e-spec).(ts|tsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', ''],

  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};
