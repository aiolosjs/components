const options = {
  entry: 'src/index.ts',
  esm: 'babel',
  cjs: 'babel',
  disableTypeCheck: true,
  preCommit: {
    eslint: false,
    prettier: true,
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
};

export default options;
