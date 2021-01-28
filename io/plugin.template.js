import Vue from 'vue'
import Cookies from 'js-cookie'

const jwt = Cookies.get('auth._token.local') ? Cookies.get('auth._token.local').substring(7) : null

  <% if (!options.debug) { %>
const wsVuePlugin = (Vue, url, options) => {
      Vue.prototype.$io = adonis.Ws(url, options).withJwtToken(jwt).connect()
    }<% } else { %>
const Ws = require('@adonisjs/websocket-client')
  const wsVuePlugin = (Vue, url, options) => {
    Vue.prototype.$io = Ws(url, options).withJwtToken(jwt).connect(console.log)
  }<% } %>

export default () => {
  Vue.use(wsVuePlugin, '<%= options.url %>', {
    path: '<%= options.options.path %>',
    reconnection: <% if(options.options.reconnection) { %> true <% } else { %> false <% } %>,
      reconnectionAttempts: <%= options.options.reconnectionAttempts %>,
        reconnectionDelay: <%= options.options.reconnectionDelay %>,
          query: <% if (options.options.query) { %><%= options.options.query %><% } else { %> null <% } %>
  })
}