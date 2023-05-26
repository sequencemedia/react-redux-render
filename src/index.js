import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'
import { Provider } from 'react-redux'
import debug from 'debug'

const log = debug('@sequencemedia/react-redux-render')

log('`react-redux-render` is awake')

const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

function getReactDOMServerRenderToString (store, Component, props) {
  try {
    return ReactDOMServer.renderToString(
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    )
  } catch (e) {
    log(e)

    throw badImplementation(e, { props })
  }
}

function getReactDOMServerRenderToStaticMarkup (store, Component, props) {
  try {
    return ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    )
  } catch (e) {
    log(e)

    throw badImplementation(e, { props })
  }
}

/**
 * @return {string}
 */
export const renderToString = (store, Component, props = {}) => getReactDOMServerRenderToString(store, Component, props)

/**
 * @return {string}
 */
export const renderToStaticMarkup = (store, Component, props = {}) => getReactDOMServerRenderToStaticMarkup(store, Component, props)

/**
 * @return {Promise<string>}
 */
export const render = async (store, Component, props = {}) => getReactDOMServerRenderToString(store, Component, props)
