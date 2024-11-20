1. Initialize a New Git Repository and Install Dependencies
First, create a new folder and initialize a Git repository:

`
mkdir your-project-name
cd your-project-name
git init
`
Initialize a Node.js project:

bash
Copiar código
npm init -y
2. Install TypeScript and Initialize TypeScript Configuration
Install TypeScript as a development dependency:

bash
Copiar código
npm install typescript --save-dev
Create a basic TypeScript configuration file:

bash
Copiar código
npx tsc --init
In the generated tsconfig.json, update settings based on your project needs. Here are some common configurations:

json
Copiar código
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"]
}
3. Set Up Testing Framework (Jest with TypeScript Support)
Jest is a popular testing framework, and it works well with TypeScript.

Install Jest and the necessary packages:

bash
Copiar código
npm install jest ts-jest @types/jest --save-dev
Create a basic Jest configuration file:

bash
Copiar código
npx ts-jest config:init
This will generate a jest.config.js file. In this file, you should see configurations like this:

js
Copiar código
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
};
4. Update package.json Scripts
Add scripts to package.json to compile TypeScript and run tests:

json
Copiar código
"scripts": {
  "build": "tsc",
  "test": "jest",
  "start": "node dist/index.js"
},
5. Set Up Project Structure
Create a basic structure for your project with src and tests directories:

bash
Copiar código
mkdir src tests
Add an entry point in src/index.ts:

typescript
Copiar código
// src/index.ts
export const greet = (name: string): string => `Hello, ${name}!`;
Add a test file for the greet function:

typescript
Copiar código
// tests/index.test.ts
import { greet } from '../src';

test('greet returns correct greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
6. Run Your Tests
To make sure everything is working, run:

bash
Copiar código
npm test