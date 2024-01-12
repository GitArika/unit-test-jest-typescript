# About

Unit testing is a code quality technique that provides visibility to rules inside of your application, by using it, the application code becomes easy to change, add features or refactoring.

## Jest testing framework

In this case we are using `jest` javascript testing framework to run our tests and provide code coverage.

Use **`describe`** to create test suits, you should give a description as a string and implement a function that will run the suit. 

For each test case, use **`it`** to create a test, you should give a description as a string and impelment a function that will run the test.

The rule should be a expectation, use **`expect`** to provide the value. It gives you access to a number of "matchers" as **`toEqual`** so you can assert your expectations.

```javascript
describe("Sum operation test suit", () => {
  it("1 - Check if 1+1 equals 2.", (done) => {
    expect(sum(1,1)).toEqual(2);
    done();
  });
});
```

## Scripts

`yarn test or npm test`

## About the project

It is a simple example that is purpose to: 

**Check User adulthood**

# Files structure

## src

`src/entities/User.ts` -> User entity on application

`src/exceptions/ExceptionsConstants/index` -> Exceptions constants using exceptions instance.

`src/exceptions/index.ts` -> Exceptions object extends Error

`src/helpers/dateHelper` -> System common date Helper.

`src/helpers/getAgeFromBirthday` -> Helper for give age from User birthday;

`src/validations/checkUserAdulthood` -> Rule implementation.

`tests/checkUserAdulthood.spec.ts` -> File containing all test suit ensuring User adulthood on our app.

## Test Driven Development

In test driven development, we should code test first, then code the app.

## About me

I am a software engineer located in São Paulo, Brazil, you can see more about my experiences and contact me on LinkedIn:

[Ariel Evangelista](https://www.linkedin.com/in/ariel-evangelista-a4677614b/). 


Hope you enjoy the code!
