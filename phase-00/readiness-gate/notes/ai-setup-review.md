# AI Setup Instruction Review

## More usable instruction

Instruction B is more usable because it provides the project folder, file structure, and explains where to run the commands.

## Missing folder/working-directory information

- Instruction A does not specify where to create `app.js` or where to run the commands.
- Instruction B specifies the `sample` directory, but could also mention using `cd sample`.

## Unexplained commands

- Instruction A does not explain what `npm install -g react` or `npm start` do.
- Instruction B does not explain `npm init -y`.

## Incorrect assumptions

- Instruction A assumes React is needed and that `npm start` will work without a `package.json`.
- Instruction B assumes Node.js and npm are already installed.

## Unnecessary tools/packages

- Instruction A incorrectly installs React, which is not needed for a simple Node.js script.
- Instruction B does not include unnecessary packages.

## Runtime identification

- Instruction A does not clearly identify the Node.js runtime.
- Instruction B clearly uses Node.js (`node app.js` via the `start` script).

## Three concrete problems in Instruction A

1. Installs React unnecessarily.
2. Uses `npm start` without creating a `package.json`.
3. Does not specify the correct working directory.

## Improvement for Instruction B

Add a step to change into the `sample` directory (`cd sample`) before running the npm commands.
