import { use, expect } from 'chai'
import sinonChai from '@sequencemedia/sinon-chai'

import {
  renderToString,
  renderToStaticMarkup,
  render
} from '@sequencemedia/react-redux-render'

import Component from './component.cjs'

use(sinonChai)

describe('react-render', () => {
  describe('`renderToString`', () => {
    it('is a function', () => {
      return expect(renderToString)
        .to.be.a('function')
    })
  })

  describe('`renderToStaticMarkup`', () => {
    it('is a function', () => {
      return expect(renderToStaticMarkup)
        .to.be.a('function')
    })
  })

  xdescribe('`render`', () => {
    it('is a function', () => {
      return expect(render)
        .to.be.a('function')
    })
  })

  describe('With props', () => {
    const store = { getState () { return {} } }
    const props = {
      content: 'MOCK CONTENT'
    }

    describe('`renderToString()`', () => {
      it('returns a string', () => {
        return expect(renderToString(store, Component, props))
          .to.equal('<h1>Component <!-- -->MOCK CONTENT</h1>')
      })
    })

    describe('`renderToStaticMarkup()`', () => {
      it('returns a string', () => {
        return expect(renderToStaticMarkup(store, Component, props))
          .to.equal('<h1>Component MOCK CONTENT</h1>')
      })
    })

    describe('`render()`', () => {
      it('returns a Promise resolving to a string', async () => {
        return expect(await render(store, Component, props))
          .to.equal('<h1>Component <!-- -->MOCK CONTENT</h1>')
      })
    })
  })

  describe('Without props', () => {
    const store = { getState () { return {} } }

    describe('`renderToString()`', () => {
      it('returns a string', () => {
        return expect(renderToString(store, Component))
          .to.equal('<h1>Component</h1>')
      })
    })

    describe('`renderToStaticMarkup()`', () => {
      it('returns a string', () => {
        return expect(renderToStaticMarkup(store, Component))
          .to.equal('<h1>Component</h1>')
      })
    })

    describe('`render()`', () => {
      it('returns a Promise resolving to a string', async () => {
        return expect(await render(store, Component))
          .to.equal('<h1>Component</h1>')
      })
    })
  })
})
