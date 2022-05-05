const path = require('path'); 

module.exports = { 
  "mode": "none", 
  "entry": "./src/index.js", 
  "output": { 
  "path": __dirname + '/dist', 
  "filename": "bundle.js" 
}, 
devtool: 'eval-cheap-source-map', 
devServer: { 
    static: {
        directory: path.join(__dirname, 'dist'),
      },
    //   compress: true,
      port: 5000,
//   contentBase: path.join(__dirname, 'dist') 
}, 
"module": { 
  "rules": [ { 
    "test": /\.css$/, 
    "use": [ "style-loader", "css-loader" ] 
  }, 
  { 
    "test": /\.js$/, 
    "exclude": /node_modules/, 
    "use": { 
      "loader": "babel-loader", 
      "options": { 
        "presets": [ "@babel/preset-env", ] 
      } 
    } 
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  },

] }};