import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const config: Config = {
  roots: ['<rootDir>'],
  coverageProvider: 'v8',
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/libs/components/$1',
  },
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.tsx'],
  collectCoverageFrom: [
    './src/**',
    '!**/*.d.ts',
    '!./.next/**',
    '!./src/types/**',
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
