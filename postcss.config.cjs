module.exports = {
  plugins: {
    '@pandacss/dev/postcss': {},
    'postcss-pxtorem': {
      propList: ['*']
    },
    autoprefixer: {},
    '@csstools/postcss-cascade-layers': {}
  }
}
