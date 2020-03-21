# gem-url-builder

This is an utility to build an url leveraging functional programming approaches

# Intended Usage

This is to show case a real life production package with all the bells and whistles required for a production ready release.
For instance

- Manage configuration across various environments
- Extensive Quality checks with unit tests
- Monitor and Attest the Code Quality with code coverage which is one of the prerecquistes for a sucessful agile shop.

**This is to meet the need for a production ready approach rather than just a bare bones tutorial meant to demostrate the concepts.**
Generally the most chalenges are encountered when a real life production release is attempted.

## Unit Tests

![Unit Tests Screenshot](./readme-images/unit-tests.JPG?raw=true "Unit Tests Screenshot")

## Test Coverage Report

Includes unit tests with 90+ code coverage see image ![Test Coverage Report](./readme-images/test-coverage-report.JPG?raw=true)

### Get Test Coverage Report

On the on the root folder run this command in the terminal see image below

> npm run-script test-coverage

![Get Test Coverage Report ](./readme-images/get-test-coverage-report.JPG?raw=true)

## Environment Variables

This feature is implemented leveraging [cross-env npm package](https://www.npmjs.com/package/cross-env)

### Other Related References

[Managing environment variables in Nodejs and Modern JS apps](https://medium.com/dubizzletechblog/managing-environment-variables-in-nodejs-and-modern-js-apps-608003f4686c)

# JSDocs documentation

to generate JSDocs documentation use this command jsdoc src -r -d docs

NOTE JSDoc is required . (npm i jsdoc --save-dev)
