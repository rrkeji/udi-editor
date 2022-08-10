const { join } = require('path');
const fs = require('fs-extra');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig((config) => {
    config.resolve.plugin('tsconfigpaths').use(TsconfigPathsPlugin, [
      {
        configFile: './tsconfig.json',
      },
    ]);

    config.merge({
      node: {
        fs: 'empty',
      },
    });


    config
      .plugin('index')
      .use(HtmlWebpackPlugin, [
        {
          inject: false,
          templateParameters: {
          },
          template: require.resolve('./public/index.html'),
          filename: 'index.html',
        },
      ]);

    config
      .plugin('editor')
      .use(HtmlWebpackPlugin, [
        {
          inject: false,
          templateParameters: {
          },
          template: require.resolve('./public/editor.html'),
          filename: 'editor.html',
        },
      ]);

    config.plugins.delete('hot');
    config.devServer.hot(false);

    config.module // fixes https://github.com/graphql/graphql-js/issues/1272
      .rule('mjs$')
      .test(/\.mjs$/)
      .include
      .add(/node_modules/)
      .end()
      .type('javascript/auto');
  });
};
