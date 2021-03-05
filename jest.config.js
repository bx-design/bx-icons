module.exports = {
  collectCoverage: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'text-summary'],
  preset: 'ts-jest',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/esm/',
    '<rootDir>/dist/',
    '<rootDir>/svg-icons/'
  ]
}
