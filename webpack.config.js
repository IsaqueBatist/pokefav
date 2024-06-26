const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Arquivo de entrada do seu aplicativo
  output: {
    filename: 'bundle.js',  // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'),  // Diretório de saída
    clean: true  // Limpa o diretório de saída antes de cada compilação
  },
  resolve: {
    fallback: {
      console: require.resolve('console-browserify')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // Extensões de arquivos que o webpack deve resolver
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,  // Tipos de arquivos que serão processados
        exclude: /node_modules/,    // Exclui o processamento de arquivos da pasta node_modules
        use: 'babel-loader',        // Usa o babel-loader para transpilar JavaScript/TypeScript
      },
      {
        test: /\.html$/,            // Processa arquivos HTML
        use: 'html-loader',         // Usa o html-loader para importar HTML
      },
      {
        test: /\.css$/,             // Processa arquivos CSS
        use: ['style-loader', 'css-loader'],  // Usa style-loader e css-loader
      },
      // Adicione outras regras conforme necessário (por exemplo, para processar imagens)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Caminho para o arquivo HTML de template
    }),
  ],
  devServer: {
    contentBase: './dist',         // Diretório onde o webpack dev server servirá os arquivos
    hot: true,                     // Habilita o Hot Module Replacement
  },
};
