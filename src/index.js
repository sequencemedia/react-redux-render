import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Boom from '@hapi/boom'
import { Provider } from 'react-redux'

const badImplementation = (e, data) => Boom.boomify(e, { statusCode: 500, message: 'Rendering exception', data })

const getReactDOMServerRenderToString = (store, Component, props) => {
  try {
    return ReactDOMServer.renderToString(
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    )
  } catch (e) {
    throw badImplementation(e, { props })
  }
}

const getReactDOMServerRenderToStaticMarkup = (store, Component, props) => {
  try {
    return ReactDOMServer.renderToStaticMarkup(
      <Provider store={store}>
        <Component
          {...props}
        />
      </Provider>
    )
  } catch (e) {
    throw badImplementation(e, { props })
  }
}

/**
 * @return {String}
 */
export const renderToString = (store, Component, props = {}) => getReactDOMServerRenderToString(store, Component, props)

/**
 * @return {String}
 */
export const renderToStaticMarkup = (store, Component, props = {}) => getReactDOMServerRenderToStaticMarkup(store, Component, props)

/**
 * @return {Promise}
 */
export const render = async (store, Component, props = {}) => getReactDOMServerRenderToString(store, Component, props)
