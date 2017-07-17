# `Github Issues Clone` — with AngularJS 1.5

This project is an application skeleton for a typical [AngularJS][angularjs] web app. You can use it
to quickly bootstrap your angular webapp projects and dev environment for these projects.

The seed contains a sample AngularJS application and is preconfigured to install the Angular
framework and a bunch of development and testing tools for instant web development gratification.

The seed app doesn't do much, just shows how to wire two controllers and views together.


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository.
You must have Node.js and its package manager (npm) installed.

### Clone `GitHub Issues`

Clone the repository using git:

```
git clone https://github.com/saikat-sinha/angular-seed.git
cd Github_Issues_Clone
```


### Install Dependencies

I have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].

I have preconfigured `npm` to automatically run `bower` so you can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files


### Run the Application

 The simplest way to start this server is:

```
npm start
```

Now browse to the app at [`localhost:8000`].


## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  views/
      issuesView/                --> the view template and logic
        view1.html            --> the partial template
        main.js              --> the controller logic

      mainView/                --> the view template and logic
        main.html            --> the partial template
        main.js              --> the controller logic

  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```


