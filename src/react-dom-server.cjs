require('@babel/register')({
  ignore: [
    /node_modules\/(?!@sequencemedia\/react-redux-render)/
  ]
})

const {
  getReactDOMServerRenderToString,
  getReactDOMServerRenderToStaticMarkup
} = require('./react-dom-server.jsx')

module.exports.getReactDOMServerRenderToString = getReactDOMServerRenderToString
module.exports.getReactDOMServerRenderToStaticMarkup = getReactDOMServerRenderToStaticMarkup
