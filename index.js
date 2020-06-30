const path = require('path')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const user = options.user || siteConfig.user
    const USER = user || false
    return { USER }
  },

  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ]
})
