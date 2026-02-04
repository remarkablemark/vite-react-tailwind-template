import type { Config } from 'jest';

const config: Config = {
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.ts',
    '\\.svg$': '<rootDir>/test/__mocks__/svgMock.ts',
    '^src/(.*)$': '<rootDir>/src/$1',
    '^test/(.*)$': '<rootDir>/test/$1',
  },
  preset: 'ts-jest',
  reporters:
    process.env.CI === 'true'
      ? [['github-actions', { silent: false }], 'summary']
      : undefined,
  setupFiles: ['<rootDir>/test/setupFiles.ts'],
  setupFilesAfterEnv: ['<rootDir>/test/setupFilesAfterEnv.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.m?[tj]sx?$': ['ts-jest', { tsconfig: 'tsconfig.test.json' }],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

export default config;
