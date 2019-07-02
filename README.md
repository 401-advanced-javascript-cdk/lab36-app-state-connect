# Lab36 - Redux Assignment 1 - Connecting to Store

Connects to the store

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/lab36-app-state-connect/pull/1)
- [Netlify Deployment](https://compassionate-visvesvaraya-2873aa.netlify.com)

### Modules

#### `index.js`

Gets the root element in the HTML and renders the App component wrapped in the store provider

#### `app.js`

Renders a div with data from the store and a function that sends an action to the reducer.

#### `store/index.js`

Basic Redux store that exports the createStore method with reporter middleware attached.

#### `store/reducers.js`

Holds logic that is triggered on a 'CHANGE' action type.

#### `store/actions.js`

Exports the 'CHANGE' action.

#### `store/middleware/reporter.js`

Creates a log on any action.

#### Operation

Go to the deployment [here](https://compassionate-visvesvaraya-2873aa.netlify.com).  Clicking on the text will activate the action and change the text into a random number, which originates from the store's state.