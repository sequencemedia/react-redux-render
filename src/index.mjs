/**
 *  @typedef {import('redux').Store} Store
 *  @typedef {ReactReduxRenderTypes.ComponentType} ComponentType
 *  @typedef {ReactReduxRenderTypes.PropsType} PropsType
 */

import debug from 'debug'

import {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} from './react-dom-server.cjs'

const log = debug('@sequencemedia/react-redux-render')

log('`react-redux-render` is awake')

/**
 *  @param {Store} store
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function renderToString (store, Component, props = {}) {
  return (
    getReactDOMServerRenderToString(store, Component, props)
  )
}

/**
 *  @param {Store} store
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function renderToStaticMarkup (store, Component, props = {}) {
  return (
    getReactDOMServerRenderToStaticMarkup(store, Component, props)
  )
}

/**
 *  @param {Store} store
 *  @param {ComponentType} Component
 *  @param {PropsType} props
 *  @returns {string}
 */
export function render (store, Component, props = {}) {
  return (
    getReactDOMServerRenderToString(store, Component, props)
  )
}
