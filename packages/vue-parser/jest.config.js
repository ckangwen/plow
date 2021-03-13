module.exports = {
  transform: {
    '.ts': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  collectCoverageFrom: ['src/*.{js,ts}']
};
