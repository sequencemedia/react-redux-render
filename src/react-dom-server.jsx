/**
 *  @typedef {import('redux').Store} Store
 *  @typedef {ReactReduxRenderTypes.ComponentType} ComponentType
 *  @typedef {ReactReduxRenderTypes.PropsType} PropsType
 *
 *  @typedef {{
 *    props: PropsType
 *  }} PropsException
 *
 *  @typedef {{
 *    e: unknown
 *  }} Exception
 */

import debug from 'debug'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {
  Provider
} from 'react-redux'
import Boom from '@hapi/boom'

const log = debug('@sequencemedia/react-redux-render')

log('`react-redux-render` is awake')

/**
 *  @param {Error} e
 *  @param {PropsException | Exception} data
 *  @returns A boom object
 */
function badImplementation (e, data) {
  return (
    Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })
  )
}

/**
 *  @param {Store} store
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
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
    if (e instanceof Error) throw badImplementation(e, { props })
    throw badImplementation(new Error('Exception'), { e })
  }
}

/**
 *  @param {Store} store
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
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
    if (e instanceof Error) throw badImplementation(e, { props })
    throw badImplementation(new Error('Exception'), { e })
  }
}
