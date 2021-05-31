# About

Unit testing is a code control practice, providing visibility into the rules of your application.

# Document your app

use `describe` to create test suits. and `it` for each test case.

```javascript
describe("Name your test suit", () => {
  it("1 - First test case", (done) => {
    done();
  });
});
```

# Scripts

`yarn test or npm test`

# Use Case

Test Driven Development

Problem:
System has user;

You need to check User adulthood.

We create a tests/ directory with this rule.

# Files

## src

`src/entities/User.ts` -> Entidade do usuário na aplicação

`src/exceptions/ExceptionsConstants/index` -> Exceptions Constants using exceptions instance.

`src/exceptions/index.ts` -> Exceptions object extends Error

`src/helpers/dateHelper` -> System common date Helper.

`src/helpers/getAgeFromBirthday` -> Helper for give age from User birthday;

`src/validations/checkUserAdulthood` -> Rule implementation.

## tests

We chose to write our tests based on our problem for use limit value check testing strategy, then refactor the whole application.

`tests/checkUserAdulthood.spec.ts` -> File containing all test suit ensuring User adulthood on our app.

## About me

Im a fullstack web developer, you can see more and contact with LinkedIn:

[Ariel Evangelista](https://www.linkedin.com/in/ariel-evangelista-a4677614b/). Hope you enjoy!
