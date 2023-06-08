module.exports = {
  projects: ['<rootDir>/src/@core', '<rootDir>/src/nestjs'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};
