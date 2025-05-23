const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/news-homepage/' // 这里是你的仓库名，注意前后都要加斜杠
    : '/'
})
