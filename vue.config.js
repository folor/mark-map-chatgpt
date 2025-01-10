const { defineConfig } = require('@vue/cli-service')
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.VUE_PUBLIC_PATH);

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.VUE_PUBLIC_PATH,
  devServer: {
    port: 7000
  },

  chainWebpack: config =>{
    config.plugin('html')
        .tap(args => {
          args[0].title = "MarkMap";
          return args;
        })
  }
})
