module.exports = {
    input: ['src/index.js'],
    output: {
      dir: 'dist',
      format: 'esm'
    },
    plugins: [
      {
        name: '@turbopack/babel-plugin',
        options: {
          babelConfigFile: '.babelrc'
        }
      }
    ]
  }