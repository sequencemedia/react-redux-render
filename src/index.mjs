import debug from 'debug'

import {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} from './react-dom-server.cjs'

const log = debug('@sequencemedia/react-redux-render')

log('`react-redux-render` is awake')

/**
 * @param {Object.<string, any>} store
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export const renderToString = (store, Component, props = {}) => getReactDOMServerRenderToString(store, Component, props)

/**
 * @param {Object.<string, any>} store
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {string}
 */
export const renderToStaticMarkup = (store, Component, props = {}) => getReactDOMServerRenderToStaticMarkup(store, Component, props)

/**
 * @param {Object.<string, any>} store
 * @param {React.ReactElement} Component
 * @param {Object.<string, any>} props
 * @returns {Promise<string>}
 */
export const render = async (store, Component, props = {}) => getReactDOMServerRenderToString(store, Component, props)
