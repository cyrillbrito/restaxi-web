const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const I18nPlugin = require("i18n-webpack-plugin");

const languages = {
  en: require("./src/i18n/en.json"),
  fr: require("./src/i18n/fr.json"),
  pt: require("./src/i18n/pt.json")
};

module.exports = Object.keys(languages).map(language => ({
  entry: path.resolve(__dirname, 'src/scripts.js'),
  output: {
    path: path.resolve(__dirname, 'dist', language === 'pt' ? '' : language),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      inlineSource: '.(js|css)$' // embed all javascript and css inline
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new I18nPlugin(languages[language])
  ]
}));
