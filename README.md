# GlobalLogic JS ProCamp Homework Repo

## Getting started

There is a few steps to get started with your homework.

- First of all you have to click the `Fork` button to make your own repo based on this one.
- Then clone your own repo (i.e. `git clone git@github.com:username/your-forked-repo.git`)
- Before submitting your homework you should check yourself with our public tests. Run `git submodule add git@github.com:vladkampov/gl-jsprocamp-tests.git __tests__` to add tests repo as git submodule.
- To run tests use `npm install && npm test` *(or yarn`?)*
- Post to slack your repo ssh link and you are all set!

## What else

- Note that to make your homework you should use our code convention. [Read More...](#code-convention)
- Feel free to use npm scripts. [Read more...](#scripts)
- Before doing your stuff don't forget to pull the updates from this repo. [Read more...](#rebase-with-base-repo)
- Don't forget to keep updated tests submodule [Read more...](#update-tests)

## Code convention

We are kindly asks you to stick to the following reexporting flow in your project and not change prefedined folders, files and functions names.

### Sources structure

```javascript
- src
|- lesson0
    |- task0.js // export default { sum };
    |- index.js // import task0 from './task0'; export default { task0 };
...
|- index.js // import lesson0 from './lesson0'; export default { lesson0 };
```

## Scripts

- `npm lint` to check the sources linting
- `npm run coverage` to check the tests coverage
- `npm test` to run tests
- `npm run debug` to run tests with debugger compatibility
- `npm run test:watch` to run tests with `--watch` flag

## Rebase with base repo

To keep your forked repo up to date with current run following commands in your project folder.

```bash
git remote add upstream git@github.com:vladkampov/gl-jsprocamp-homework.git
git fetch upstream
git pull upstream master
```

## Update tests

To keep tests submodule updated use `git submodule update --remote`
