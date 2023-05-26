/**
 * @typedef {import('redux').Store} Store
 */

import debug from 'debug'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'
import { Provider } from 'react-redux'

const log = debug('@sequencemedia/react-redux-render')

log('`react-redux-render` is awake')

/**
 * @param {Error} e
 * @param {{props: Object.<string, any>}} data
 * @returns A boom object
 */
const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

/**
 * @param {Store} store
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export function getReactDOMServerRenderToString (store, Component, props) {
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

/**
 * @param {Store} store
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export function getReactDOMServerRenderToStaticMarkup (store, Component, props) {
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
