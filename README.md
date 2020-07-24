# League of Legends Build Simulator

This web app is a basic League of Legends 'simulator', which allows the user to select between three different champions (or create their own) and a variety of different weapons and armor which allow the user to simulate how their champion might perform with different equipment. Each weapon or piece of armor is associated with statictics in several categories including health, attack damage, health regeneration, and armor, among others. The user may choose them incrementally to see how their selected champion behaves with these enhancements.

In addtion, the user might also choose to modify one or more values and save their modifications to an external Parse database.

The user will first need to register an account and login before being able to access the app.

The website was built with AngularJS, Gulp, and Parse free software packages.

---

## Dependency Installation

During the time building this project, you'll need development dependencies of which run on Node.js, follow the steps below for setting everything up:

- Download and install Node.js for Windows or for Mac.
- Install Gulp CLI on the command-line with `npm install`, followed by `npm install gulp-cli -g`

To ensure that the Angular Material items work as intended, be sure that the following line of code is included in the `index.html` file located in the `src` folder:

 - `<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.23/angular-material.min.js"></script>`

---

## Running The App

To run the app, simply navigate to the folder containing the files, then run `gulp` to build and start the app. After that, navigate to the port specified by `gulp`.
