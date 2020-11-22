# lc-module-3-bundling

Lemoncode - Module 3

Exercise - Basic

# First step: Initialize npm
npm init
add -y at the end to avoid questions (default configuration)

# Second step: Install webpack and webpack-cli (dev dependency)
npm install webpack webpack-cli --save-dev

# Install webpack-dev-server to development server that provides live reloading
npm install webpack-dev-server --save-dev

# Add script to run webpack in package.json
"start": "webpack --mode development"
"start:dev": "webpack-dev-server --mode development"

# Install babel cli, core and preset-env to transpile >= ES6 to ES5
npm install @babel/cli @babel/core @babel/preset-env --save-dev

# Webpack loader: babel (webpack needs loaders to understand about any component)
npm install babel-loader --save-dev

# Create a js and html files
./src/index.js
./src/index.html

# Create a babel configuration file to transpile ES6 to ES5 (.babelrc)
{
  "presets": ["@babel/preset-env"]
}

# Webpack configuration: create a webpack.config.js to indicate js entry
module.exports = {
  entry: ["./src/index.js"],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};

# To copy the HTML to the dist folder
npm install html-webpack-plugin --save-dev

# Clean dist folder before running a build
npm install clean-webpack-plugin --save-dev

# 
npm install style-loader css-loader --save-dev

# Separate css files, instead of being embedded into js
npm install mini-css-extract-plugin --save-dev

# SASS
npm install sass sass-loader --save-dev

# Typescript -> it needs a tsconfig file
npm install typescript --save-dev
npm install @babel/preset-typescript --save-dev