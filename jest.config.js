module.exports = {
  verbose: true,
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  coverageReporters: ['text', 'lcov'],
  // Hilft bei der korrekten Auflösung von Pfaden in verschiedenen Umgebungen
  roots: ['<rootDir>/src/', '<rootDir>/test/'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  // Hinzufügen des GitHub Actions Reporters
  reporters: process.env.GITHUB_ACTIONS
    ? ['default', 'jest-github-actions-reporter']
    : ['default'],
  testLocationInResults: true
};
