const core_path = '<rootDir>/../../../node_modules/@project-name/core/dist';

module.exports = {
  displayName: {
    name: 'nestjs',
    color: 'magentaBright',
  },
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageProvider: 'v8',
  coverageDirectory: '../__coverage',
  testEnvironment: 'node',

  moduleNameMapper: {
    '@project\\-\\name/core/(.*)$': `${core_path}/$1`,
    '#shared/(.*)$': `${core_path}/@shared/$1`,
  },
};
