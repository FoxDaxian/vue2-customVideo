var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV !== 'development'
var sourceMap = !isProduction ? config.dev.cssSourceMap : process.env.NODE_ENV === 'production' ? config.build.productionSourceMap : config.pack.productionSourceMap

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap,
    extract: isProduction
  })
}

