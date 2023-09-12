# Jest and React Testing Library

## Get started with ts-node playground

- Run `nvm use`
- `npm install`
- `npm run play`

## Get Next.js application started

- Run `npm run dev`
- Go to `/form`

## Run Tests

- Run `npm run test:watch` to run tests in background
- Run `npm run test ./filePath` to run single test
- Run `npm run test` to run all tests once

# Exercises

1. `arraysEqual.test.ts` includes tests but they are all failing. Go to `arraysEqual.ts` and figure out what goes inside that function.

2. `Form.test.tsx` is missing some tests.

- Figure out if entire form renders correctly. The first test is only checking if the submit button is in the document. It's missing the name and email inputs.

- Write a test to make sure the name field works correctly
- Write a test to make sure the email field works correctly
- Write a test to make sure handleOnSubmit is called
- The last test is failing. Figure out how to fix it

3. `fetchFunction.test.ts` is missing a test

- Write a test to check if an error is thrown

## Solutions

Find all solutions in the `tests/solutions` branch
