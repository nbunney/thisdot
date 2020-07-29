# Thisdot - JavaScript Exercise: GitHub User Search

## Requirements

The goal of this exercise is to create an app that re-implements a portion of GitHub's Search feature, the user search,
using their public API.  Please share a working deployed version of the exercise as well as the github repo.  The app should NOT require users of the application to provide GitHub permissions.

The purpose of this code exercise is for us to see a little taste of who you are as a developer. Don't worry about
'over-engineering' your solution, and don't be afraid to add additional features (or playful flourishes!), as long as what
you build is something you're proud of.

We know that there will be things that you wished you could add if you had more time, that's part of the goal! We
learn as much about you from what you choose not to include as we do from what you include!

Feel free to use third party libraries or other code that you did not write to help you implement your exercise.
However, please make sure that it is obvious which code you wrote and which code you borrowed from somewhere
else. Also, be sure there's enough of your own work to give us an accurate impression of who you are.

### Setup
- [X] Please share a working deployed version of the exercise as well as the github repo.
- [X] Use the latest version of the framework or library. **Angular 10**
* You may use any build system you wish, including any cli.
* You may use any additional third-party libraries you see fit.

### Minimum Requirements
- [ ] Use https://github.com/search as a reference for functionality, but feel free to change style, behavior, and features as
you see fit and time permitting. It is not necessary to match the actual design of GitHub and we are not expecting a
professional design. Focus on functionality and code.
As a user,
* I can search for users and see a paginated list of results
* I can navigate through the next and previous pages of the paginated results
* I see the total count of search results
* I see notable information for each search result, such as the description, star/follower count, profile pictures, etc.
* I can select a search result and be taken to the applicable page on github.com API
The app should utilize GitHub's public API; either the v3 REST API or the v4 GraphQL version. Examples of the API
call you'll likely need to make:
Search
Documentation: https://developer.github.com/v3/search/

● https://api.github.com/search/users?q=example 

## Project Info From Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
