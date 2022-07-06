/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    'jest-plugin-context/setup',
    '@testing-library/jest-dom/extend-expect',
  ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
  ],
};

export default config;
