/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: [
    "!**/*.d.ts",
    "!**/node_modules/**",
    "!<rootDir>/out/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.js",
    "!<rootDir>/coverage/**",
    "<rootDir>/playground/Utils/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/pages/components/**/*.{js,jsx,ts,tsx}",
  ],
  coverageThreshold: {
    global: {
      branches: 45,
      functions: 50,
      lines: 67,
      statements: 68,
    },
  },
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleFileExtensions: ["js", "ts", "tsx"],
  moduleNameMapper: {
    "^react($|/.+)": "<rootDir>/node_modules/react$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
};
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
