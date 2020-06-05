module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [ "import", {
      "libraryName": "ant-design-vue",
      "libraryDirectory": "es",
      "style": "css" }
    ],
    [ 'import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
