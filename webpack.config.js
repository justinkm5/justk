const path = require('path');

module.exports = {
  target: 'web',

  mode: 'development',

  entry: {
    'webclient': './src/index.jsx',
  },

  output: {
    path: path.join(__dirname, 'build/'),
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        // Build JS and JSX with Babel
        test: /\.(js|jsx)$/,
        include: [
            path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
            presets: ['env', 'react', 'stage-2'],
            plugins: ["babel-plugin-styled-components"],
        },
      },
    ],
  },
};