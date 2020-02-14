const { environment } = require('@rails/webpacker')

environment.config.set('optimization', {
  splitChunks: {
    chunks: "all",
    name: 'vendor',
    cacheGroups: {
      vendors: {
        reuseExistingChunk: true
      }
    }
  }
});

module.exports = environment
