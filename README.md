# react-redux-render

Render isomorphic _React_ apps and components in Node.

- With _Redux_

An example implementation of the companion package `@sequencemedia/react-router-redux-render` can be found in [react-router-pagination-io](http://github.com/sequencemedia/react-router-pagination-io.git).

## Example

In Express:

```javascript
const express = require('express')

const app = express()
const port = 3000

const {
  configureStore
} = require('./path/to/store')

const store = configureStore()

const {
  renderToString
} = require('react-redux-render')

const App = require('./path/to/react/app')

app.get('/', (req, res) => res.send(renderToString(store, App)))

app.listen(port, () => console.log(`Express ${port}`))
```

If `renderToString` encounters an error then it throws a `500 Internal Server Error`. Otherwise, it returns a string.

You can supply `App` with `props` using the third argument:

```javascript
renderToString(store, App, {})
```

(Since this is a _Redux_ app you are unlikely to use `props`.)

## In this package

`react-redux-render` exports three functions:

1. `renderToString`
2. `renderToStaticMarkup`
3. `render`

`renderToString` generates `<html />` including the attributes that _React_ uses in `ReactDOM.hydrate()`. It implements [`ReactDOMServer.renderToString()`](https://react.dev/reference/react-dom/server/renderToString).

`renderToStaticMarkup` doesn't include those attributes. It's useful for using React as a rendering engine for static pages. It implements [`ReactDOMServer.renderToStaticMarkup()`](https://react.dev/reference/react-dom/server/renderToStaticMarkup).

`render` executes `renderToString` but returns a `Promise` which resolves to a string.

## Companion packages

1. `@sequencemedia/react-router-redux-render` for React Router apps (with Redux)
2. `@sequencemedia/react-router-render` for React Router apps (without Redux)
3. `@sequencemedia/react-render` for React Redux apps (without React Router or Redux)
