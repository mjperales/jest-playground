/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  // collectCoverageFrom: ["./helpers/**"],
  coverageThreshold: {
    global: {
      branches: 45,
      functions: 50,
      lines: 67,
      statements: 68,
    },
  },
  moduleFileExtensions: ["js", "ts"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },

  testEnvironment: "node",
};
