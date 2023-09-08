/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config = {
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/playground/Utils/**/*.{js,ts,tsx}",
    "<rootDir>/pages/components/**/*.{js,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 45,
      functions: 50,
      lines: 67,
      statements: 68,
    },
  },
  moduleNameMapper: {
    "^nanoid(/(.*)|$)": "nanoid$1",
    "^d3-(.*)$": `<rootDir>/node_modules/d3-$1/dist/d3-$1`,
    "^uuid(/(.*)|$)": "uuid$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "node",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
