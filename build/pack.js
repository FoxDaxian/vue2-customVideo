require('./check-versions')()

process.env.NODE_ENV = 'pack'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
const packConf = require("./webpack.pack.conf.js"); 

var spinner = ora('building for packing...')
spinner.start()

rm(path.join(config.pack.assetsRoot, config.pack.assetsSubDirectory), err => {
  if (err) throw err
  webpack(packConf, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Pack complete.\n'))
  })
})


