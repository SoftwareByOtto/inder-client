import path from 'path'

export default function () {
  const options = {
    url: this.options.socket.url || 'wss://inder.glitch.me',
    debug: this.nuxt.options.dev, // Disable debug messages in production mode
    options: {
      path: this.options.socket.options.path || 'adonis-ws',
      reconnection: this.options.socket.options.reconnection || true,
      reconnectionAttempts: this.options.socket.options.reconnectionAttempts || 10,
      reconnectionDelay: this.options.socket.options.reconnectionDelay || 1000
    }
  }
  // Disable `regeneratorRuntime` error
  this.options.head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/babel-regenerator-runtime@6.5.0/runtime.min.js'
  })
  // Include 'debuggerless' socket client
  if (!options.debug) {
    this.options.head.script.push({
      src: 'https://unpkg.com/@adonisjs/websocket-client@1.0.9/dist/Ws.browser.min.js'
    })
  }
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    ssr: false,
    options
  })
}
