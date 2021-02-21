const path = require('path')
const fs = require('fs')

const args = process.argv.slice(2)

const getEntries = dir => {
  let absPath = path.resolve(__dirname, dir)
  let files = fs.readdirSync(absPath)
  let entires = {}
  files.forEach(item => {
    let p = path.join(absPath, item)
    if (fs.statSync(p).isDirectory()) {
      p = path.join(p, 'index.js')
      entires[item] = p
    }
  })
  return entires
}

if (process.env.NODE_ENV === 'production' && args.includes('--all')) {
  module.exports = {
    outputDir: 'dist',
    configureWebpack: {
      entry: {
        ...getEntries('./src/packages')
      },
      output: {
        // 因为按需引入的时候要结合 babel-import-plugin 这个插件
        // lib是该插件默认读取目录
        // import { Button } from 'panda-ui';
        //  ↓ ↓ ↓ ↓ ↓ ↓
        // var _button = require('panda-ui/lib/button');
        filename: 'lib/[name]/index.js',
        library: ['PandaUI', '[name]'],
        libraryTarget: 'umd',
        libraryExport: 'default'
      },
      externals: {
        vue: {
          root: 'vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    },
    css: {
      sourceMap: true,
      extract: {
        filename: 'css/[name]/style.css'
      }
    },
    chainWebpack(config) {
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('html')
      config.plugins.delete('hmr')
      config.entryPoints.delete('app')
    }
  }
}
